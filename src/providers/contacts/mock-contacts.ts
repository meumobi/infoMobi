import { Observable } from 'rxjs/Observable';

let contacts = Observable.of([
    {
        _id: "1",
        type: "user",
        displayName: "Luiza Bittencourt",
        created: 1503578164,
        published: 1503578164,
        modified: 1503578164,
        isPublished: true,
        domain: "infomobi.com",
        firstName: "Luiza",
        lastName: "Bittencourt",
        title: "Supervisora Administrativa e Fiscal",
        options: {
            landlinePhone: "(21) 4042-0755",
            mobilePhone: "(21) 96172-3672",
        },
        birthdate: "08-30",
        email: "luiza@empresa.com.br",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    },
    {
        _id: "2",
        type: "user",
        displayName: "Jaime Pacheco",
        created: 1503578165,
        published: 1503578165,
        modified: 1503578165,
        isPublished: true,
        domain: "infomobi.com",
        firstName: "Jaime",
        lastName: "Pacheco",
        title: "Departamento pessoal",
        options: {
            landlinePhone: "(21) 4042-0755",
            mobilePhone: "(21) 96172-3672",
        },
        birthdate: "05-31",
        email: "jaime@empresa.com.br",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
    },
    {
        _id: "3",
        type: "user",
        displayName: "Jonathan Bradley",
        created: 1503578166,
        published: 1503578166,
        modified: 1503578166,
        isPublished: true,
        domain: "infomobi.com",
        firstName: "Jonathan",
        lastName: "Bradley",
        title: "Senior Broker",
        options: {
            landlinePhone: "(21) 4042-0755",
            mobilePhone: "(21) 96172-3672",
        },
        birthdate: "05-17",
        email: "jonathan@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
    },
    {
        _id: "4",
        type: "user",
        displayName: "Jennifer Wu",
        created: 1503578167,
        published: 1503578167,
        modified: 1503578167,
        isPublished: true,
        domain: "infomobi.com",
        firstName: "Jennifer",
        lastName: "Wu",
        title: "Senior Broker",
        options: {
            landlinePhone: "(21) 4042-0755",
            mobilePhone: "(21) 96172-3672",
        },
        birthdate: "05-14",
        email: "jen@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
    },
    {
        _id: "5",
        type: "user",
        displayName: "Olivia Green",
        created: 1503578168,
        published: 1503578168,
        modified: 1503578168,
        isPublished: true,
        domain: "infomobi.com",
        firstName: "Olivia",
        lastName: "Green",
        title: "Senior Broker",
        options: {
            landlinePhone: "(21) 4042-0755",
            mobilePhone: "(21) 96172-3672",
        },
        birthdate: "05-13",
        email: "olivia@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
    },
    {
        _id: "6",
        type: "user",
        displayName: "Miriam Aupont",
        created: 1503578169,
        published: 1503578169,
        modified: 1503578169,
        isPublished: true,
        domain: "infomobi.com",
        firstName: "Miriam",
        lastName: "Aupont",
        title: "Senior Broker",
        options: {
            landlinePhone: "(21) 4042-0755",
            mobilePhone: "(21) 96172-3672",
        },
        birthdate: "05-12",
        email: "miriam@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg"
    },
    {
        _id: "7",
        type: "user",
        displayName: "Michelle Lambert",
        created: 1503578170,
        published: 1503578170,
        modified: 1503578170,
        isPublished: true,
        domain: "infomobi.com",
        firstName: "Michelle",
        lastName: "Lambert",
        title: "Senior Broker",
        options: {
            landlinePhone: "(21) 4042-0755",
            mobilePhone: "(21) 96172-3672",
        },
        birthdate: "05-11",
        email: "michelle@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michelle_lambert.jpg"
    },
    {
        _id: "8",
        type: "user",
        displayName: "Victor Ochoa",
        created: 1503578171,
        published: 1503578171,
        modified: 1503578171,
        isPublished: true,
        domain: "infomobi.com",
        firstName: "Victor",
        lastName: "Ochoa",
        title: "Senior Broker",
        options: {
            landlinePhone: "(21) 4042-0755",
            mobilePhone: "(21) 96172-3672",
        },
        birthdate: "08-10",
        email: "victor@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/victor_ochoa.jpg"
    },
    {
        _id: "9",
        type: "desk",
        displayName: "RH",
        created: 1503578172,
        published: 1503578172,
        modified: 1503578172,
        isPublished: true,
        domain: "infomobi.com",
        title: "Recursos Humanos",
        options: {
            landlinePhone: "(21) 4042-0755",
            mobilePhone: "(21) 96172-3672",
            email: "rh@infomobi.org"
        },
        picture: "http://s2.glbimg.com/5aKjIyo5XWoVDGWvgoJqSLnNGBQ=/620x350/e.glbimg.com/og/ed/f/original/2016/04/13/carreira.jpg"
    },
    {
        _id: "10",
        type: "desk",
        displayName: "Enfermaria",
        created: 1503578173,
        published: 1503578173,
        modified: 1503578173,
        isPublished: true,
        domain: "infomobi.com",
        title: "Ala 14",
        options: {
            bloco: "14A",
            ramal: "555",
            email: "sos@infomobi.org"
        },
        picture: "https://media.istockphoto.com/vectors/-vector-id479391700?k=6&m=479391700&s=612x612&w=0&h=tn49_mMKaZmu1dqTNE3-9K0Ejire4jg39qdxIllxyOg="
    },
    {
        _id: "11",
        type: "user",
        displayName: "Anna Carolina Pacheco",
        created: 1503578168,
        published: 1503578168,
        modified: 1503578168,
        isPublished: true,
        domain: "infomobi.com",
        firstName: "Anna Carolina",
        lastName: "Pacheco",
        title: "Assistente de Comunicação",
        options: {
            mobilePhone: "(21) 96452-0821",
        },
        birthdate: "09-09",
        email: "accarvalho@katrium.com.br",
        picture: "https://firebasestorage.googleapis.com/v0/b/ion-employee.appspot.com/o/carol.png?alt=media&token=d8ae50b2-9d27-4f90-bfe1-256b99a59ae2"
    },
]);

export default contacts.delay(500); 