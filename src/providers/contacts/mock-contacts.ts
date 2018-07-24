import { Observable } from 'rxjs/Observable';

let contacts = Observable.of([
    {
        id: "1",
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
        birthDate: "08-30",
        email: "luiza@empresa.com.br",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    },
    {
        id: "2",
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
        birthDate: "05-31",
        email: "jaime@empresa.com.br",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
    },
    {
        id: "3",
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
        birthDate: "05-17",
        email: "jonathan@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
    },
    {
        id: "4",
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
        birthDate: "05-14",
        email: "jen@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
    },
    {
        id: "5",
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
        birthDate: "05-13",
        email: "olivia@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
    },
    {
        id: "6",
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
        birthDate: "05-12",
        email: "miriam@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg"
    },
    {
        id: "7",
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
        birthDate: "05-11",
        email: "michelle@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michelle_lambert.jpg"
    },
    {
        id: "8",
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
        birthDate: "08-10",
        email: "victor@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/victor_ochoa.jpg"
    },
    {
        id: "9",
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
        id: "10",
        type: "desk",
        displayName: "Enfermairia",
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
    }
]);

export default contacts;