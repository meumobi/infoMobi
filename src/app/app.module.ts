import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, APP_INITIALIZER } from '@angular/core';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ApiService } from '@providers/api';
import { AuthDataPersistenceService } from '@providers/auth-data-persistence';
import { AuthService } from '@providers/auth';
import { CategoriesService } from '@providers/categories/';
import { CommentsProvider } from '@providers/comments';
import { ContactsService } from '@providers/contacts';
import { DynamicLinksProvider } from '@providers/dynamic-links';
import { ENV } from '@env';
import { FilesProvider } from '@providers/files/files';
import { SettingsService } from '@providers/settings';
import { SharedModule } from '@shared/shared.module';
import { UploadProvider } from '@providers/upload';
import { UserProfileService } from '@providers/user-profile';
import { VideosService } from '@providers/videos';
import 'mmb-avatar-img';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function initConfig(
  authDataPersistenceService: AuthDataPersistenceService
  ): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      authDataPersistenceService.checkToken().then(authData => {
        resolve();
      });
    });
  };
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'storage_db',
    }),
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(ENV.firebase),
    SuperTabsModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    FileTransferObject,
    FileOpener,
    InAppBrowser,
    File,
    FilesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommentsProvider,
    AngularFirestoreModule,
    UploadProvider,
    AuthService,
    DynamicLinksProvider,
    ApiService,
    ContactsService,
    AuthDataPersistenceService,
    UserProfileService,
    CategoriesService,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      multi: true,
      deps: [AuthDataPersistenceService]
    },
    VideosService,
    FilesProvider,
    SettingsService,
  ]
})

export class AppModule {}
