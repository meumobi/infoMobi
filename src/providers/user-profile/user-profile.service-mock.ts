import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserProfile } from '@models/contact-profile'; 
import userProfile from './mock-user-profile';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserProfileService {

  private current: UserProfile;

  constructor(public http: HttpClient) {
    console.log('Hello UserProfileProvider Provider');
  }

  public getCurrent() {
    return this.current;
  }

  public setCurrent(profile: UserProfile) {
    this.current = profile;
  }

  public create() {}

  public update() {}
  
  public fetchByEmail(email: string) {
    return userProfile;
  }

}
