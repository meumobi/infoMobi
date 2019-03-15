import { AuthDataPersistenceService } from '@providers/auth-data-persistence';
import { Component, OnInit } from '@angular/core';
import {
  IonicPage,
  NavController,
  MenuController,
  LoadingController,
  Loading,
  AlertController
} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@providers/auth';
import { MeuToastService } from '@shared/meu-toast.service';
import { EmailValidator } from '@validators/email';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsProvider } from '@shared/analytics.service';
import { Auth, AuthError } from '@models/auth.interface';

@IonicPage({
  segment: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  user: FormGroup; // = {} as IUser;
  loading: Loading;

  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public authService: AuthService,
    public menu: MenuController,
    public meuToastService: MeuToastService,
    private translateService: TranslateService,
    private authDataPersistenceService: AuthDataPersistenceService,
    public analytics: AnalyticsProvider,
  ) {}

  ngOnInit() {
    this.user = this.fb.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewWillLeave() {
    this.menu.enable(true);
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  isValid(email: string) {
    return !!email;
  }

  forgotPassword() {
    const prompt = this.alertCtrl.create({
      title:  this.translateService.instant('RESET_PASSWORD.LINK'),
      subTitle:  this.translateService.instant('RESET_PASSWORD.SUBTITLE'),
      inputs: [
        {
          name: 'email',
          placeholder: this.translateService.instant('RESET_PASSWORD.PLACEHOLDER')
        },
      ],
      buttons: [
        {
          text: this.translateService.instant('Cancel'),
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: this.translateService.instant('RESET_PASSWORD.SUBMIT'),
          handler: data => {
            this.loading = this.loadingCtrl.create({
              dismissOnPageChange: true,
            });
            if (this.isValid(data.email)) {
              this.loading.present();
              this.authService.forgotPassword(data.email)
              .then(
                () => {
                  this.loading.dismiss().then(() => {
                    this.meuToastService.present(this.translateService.instant('RESET_PASSWORD.SUCCESS'));
                  });
                }
              )
              .catch(
                err => {
                  this.loading.dismiss().then(() => {
                    this.meuToastService.present(this.translateService.instant('RESET_PASSWORD.ERROR'));
                  });
                }
              );
            } else {
              this.meuToastService.present(this.translateService.instant('Invalid Email'));
              return false;
            }
          }
        }
      ]
    });
    prompt.present();
  }

  ionViewCanEnter(): boolean {
    const isAuth = this.authDataPersistenceService.isAuthenticated();

    /**
     * workaround to redirect on ionViewCanEnter
     * see https://github.com/ionic-team/ionic/issues/11405#issuecomment-365163495
     */
    if (isAuth) {
      setTimeout(() => this.navCtrl.setRoot('HomePage'), 0);
    }

    return !isAuth;
  }

  loginUser(user) {
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
    this.authService.signIn(user.value.email, user.value.password)
    .then( (response: Auth) => {
      console.log(response);
      this.analytics.trackEvent('Login', 'Submit', 'Success');
      this.translateService.get('LOGIN.USER_WELCOME', {displayName: response.visitor.first_name}).subscribe(
        value => {
          this.meuToastService.present(value);
          this.navCtrl.setRoot('HomePage');
        }
      );
    })
    .catch ( (err: AuthError) => {
      console.log(err);
      this.analytics.trackEvent('Login', 'Submit', 'Failed');
      this.loading.dismiss().then( () => {
        if (err) {
          if (err.message === 'passwordExpired') {
            this.updatePassword(user.value.email, user.value.password)
            .then(() => {
              console.log('UpdatePassword resolved');
              this.navCtrl.setRoot('HomePage');
            })
            .catch(() => {
              console.log('UpdatePassword rejected');
            });
            return;
          }
          const alert = this.alertCtrl.create({
            message: this.translateService.instant(err.message),
            buttons: [
              {
                text: 'Ok',
                role: 'cancel'
              }
            ]
          });
          alert.present();
        }
      });
    });
  }

  updatePassword(email: string, currentPassword: string) {
    return new Promise((resolve, reject) => {
      const prompt = this.alertCtrl.create({
        title: this.translateService.instant('CHANGE_PASSWORD.LINK'),
        message: this.translateService.instant('CHANGE_PASSWORD.SUBTITLE'),
        enableBackdropDismiss: false,
        inputs: [
          {
            type: 'password',
            name: 'newPassword',
            placeholder: this.translateService.instant('CHANGE_PASSWORD.PLACEHOLDER')
          },
        ],
        buttons: [
          {
            text: this.translateService.instant('Cancel'),
            handler: data => {
              this.loading.dismiss();
              this.authService.signOut();
              reject();
            }
          }, {
            text: this.translateService.instant('CHANGE_PASSWORD.SUBMIT'),
            handler: data => {
              if (data.newPassword.length < 6) {
                this.meuToastService.present(this.translateService.instant('CHANGE_PASSWORD.ERROR'));
                return false;
              }
              this.authService.updatePassword(email, currentPassword, data.newPassword)
            .then(
              () => {
                this.meuToastService.present(this.translateService.instant('CHANGE_PASSWORD.SUCCESS'));
                resolve();
              }
            )
            .catch(err => {
              this.meuToastService.present(this.translateService.instant('COMMON_ERROR'));
              reject();
            });
            }
          }
        ]
      });

      prompt.present();
    });
  }
}
