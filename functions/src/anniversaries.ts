export class AnniversariesService {
  admin;
  constructor(
    admin
  ) {
    this.admin = admin;
  }

  private getCurrentDate():string {
    const today = new Date().toISOString().slice(5,10);
    console.log("Current date: " + today);
    
    return today;
  }

  private getContacts() {
    const contacts: Array<Object> = [];
    return this.admin.firestore().collection('contacts')
    .get()
    .then(
      data => {
        data.forEach(
          doc => {
            console.log(doc.data());
            const contact = doc.data();
            contacts.push(contact);
          }
        );
        return contacts;
      }
    );
  }

  private checkAnniversaries(currentDate) {
    const birthdate = currentDate.split("-");
    const year = new Date().getFullYear();
    const startDate = new Date(year, parseInt(birthdate[0]) - 1, parseInt(birthdate[1]));
    const endDate = new Date(year, parseInt(birthdate[0]) - 1, parseInt(birthdate[1]) + 1);
    const comments: Array<Object> = [];
    return this.admin.firestore().collection('comments')
    .where('type', '==', "anniversaries")
    .where('published', '>=', startDate.getTime())
    .where('published', '<=', endDate.getTime())
    .get()
    .then(
      data => {
        data.forEach(
          doc => {
            comments.push(doc.id);
          }
        );
        return comments;
      }
    );
  }

  private deleteAnniversaries(anniversaries) {
    anniversaries.forEach(
      data => {
        console.log(data);
        this.admin.firestore().collection('comments').doc(data).delete();
      }
    )
  }


  private groupByDomain(contacts) {
    let i = 0;
    let val: any;
    let index: number; 
    const values = []; 
    const result = [];
    for (; i < contacts.length; i++) {
      val = contacts[i]["domain"];
      index = values.indexOf(val);
      if (index > -1) {
        result[index].push(contacts[i]);
      } else {
        values.push(val);
        result.push([contacts[i]]);
      }
    }
    return result;
  }


  private publishAnniversaries(contacts) {
    const anniversaries = {
      title: "Aniversariante(s) do dia!",
      picture: "https://infomobi.page.link/uGeF",
      media: [{
        url: "https://infomobi.page.link/sqMF" 
      }],
      contacts: contacts
    }
    const comment = {
      channel: "live",
      type: "anniversaries",      
      domain: contacts[0].domain,
      created: Date.now(),
      published: Date.now(),
      modified: Date.now(),
      isPublished: true,
      data: anniversaries
    }
    return this.admin.firestore().collection('comments')
    .add(comment)
    .then(
      data => {
        return comment
      }
    );
  }

  public filterAnniversaries(contacts, currentDate) {
    return contacts.filter(
      (contact) => {
        if (contact.birthdate) {
          return (contact.birthdate.slice(5,10) === currentDate);
        } else {
          return false;
        }
      }
    )
  }

  public perform() {
    const currentDate = this.getCurrentDate();
    return this.getContacts()
    .then(
      data => {        
        let contacts = this.filterAnniversaries(data, currentDate);
        if (contacts.length > 0) {
          this.checkAnniversaries(currentDate).then(
            (ids) => {
              this.deleteAnniversaries(ids);
            }
          )
          contacts = this.groupByDomain(contacts);
          return contacts.forEach(
            element => {
              return this.publishAnniversaries(element);
            }
          )
        } else {
          return {};
        }
      });
  }
}