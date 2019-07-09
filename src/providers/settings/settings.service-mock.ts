import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Settings } from '@models/settings';
import { Observable } from 'rxjs';

@Injectable()
export class SettingsService {

  settings = Observable.of({
    domain: 'meumobibox.meumobi.com',
    youtubeChannelId: 'UCRGoQtYFZCkbBegdlv8xWew',
    primaryColor: '#f7ce06',
    onPrimaryColor: '#f4f4f4',
    analyticsTrackingId: 'UA-113298293-2',
    tvUrl: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    logoUrl: 'https://meumobi.com/uploads/site_logos/200x200_6943664.png'
  });


  constructor(public http: HttpClient) {
    console.log('Hello SettingsService Provider');
  }

  public loadByDomain(domain: string): void {
    return;
  }

  public setSettings(settings: Settings): Promise<void> {
    return Promise.resolve();
  }

  public getSettings(): Observable<Settings>  {

    return this.settings.delay(2000);
  }
}
