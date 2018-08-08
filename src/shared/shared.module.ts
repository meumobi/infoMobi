import { NgModule } from '@angular/core';
import { MeuToastProvider } from './meu-toast.service';
import { AnalyticsProvider } from './analytics.service';
import { 
  SafeUrlPipe,
  SearchPipe,
  KeysPipe,
  IconPathForContactTypePipe,
  ImgServerUrlyPipe,
  ImgServerSrcsettifyPipe
 } from '@pipes/.';
import { MomentModule } from 'ngx-moment';
import { IonicImageViewerModule } from 'ionic-img-viewer';

const sharedModules = [
  MomentModule,
  IonicImageViewerModule
];

@NgModule({
  imports: [
    sharedModules
  ],
  declarations: [
    ImgServerUrlyPipe,
    ImgServerSrcsettifyPipe,
    SafeUrlPipe,
    SearchPipe,
    KeysPipe,
    IconPathForContactTypePipe,
  ],
  providers: [
    MeuToastProvider,
    AnalyticsProvider
  ],
  exports: [
    ImgServerUrlyPipe,
    ImgServerSrcsettifyPipe,
    SafeUrlPipe,
    SearchPipe,
    KeysPipe,
    IconPathForContactTypePipe,
    sharedModules
  ]
})
export class SharedModule { }