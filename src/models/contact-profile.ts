export class ContactProfile {  
  _id?: string;
  type: string;
  picture: string;
  displayName: string;
  title: string;
  created: number;
  published: number;
  modified: number;
  isPublished: boolean;
  domain: string;
  options: Object;
  
  constructor(type: string) {
    this.type = type;
    this.created = Date.now();
    this.published = Date.now();
    this.modified = Date.now();
    this.isPublished = true;
  }
}

export class UserProfile extends ContactProfile {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  role: string;
  preferredLanguage: string;
  lastLogin: number;

  constructor() {
    super('user');
    this.options = {};
  }
}

export class DeskProfile extends ContactProfile {
  
  constructor() {
    super('desk');
    this.options = {};
  }
}
