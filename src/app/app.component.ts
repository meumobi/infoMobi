import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AnalyticsProvider } from '@shared/analytics.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@providers/auth';
import { AuthDataPersistenceService } from '@providers/auth-data-persistence';
import { UserProfileService } from '@providers/user-profile';
import { ENV } from '@env';
import { Observable } from 'rxjs';
import { Auth, AuthUser } from '@models/auth.interface';
import { Category } from '@models/categories.interface';
import { CategoriesService } from '@providers/categories';
import moment from 'moment';
import 'moment/min/locales';
/**
 * TODO: load only required locales
 * Need a refactoring to normalize preferredLanguages with locales names (pt vs pt-br, en vs en-gb, etc.)
 */
// import 'moment/locale/pt-br';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;
  rootPage = 'HomePage';
  pages: Array<{title: string, component: any, icon: string}>;
  categories: Array<Category>;
  authData$: Observable<Auth>;
  authUser: AuthUser = null;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public analyticsProvider: AnalyticsProvider,
    private translateService: TranslateService,
    private authService: AuthService,
    private authDataPersistenceService: AuthDataPersistenceService,
    private userProfileService: UserProfileService,
    private categoriesService: CategoriesService
  ) {
    this.authData$ = this.authDataPersistenceService.getAuthDataObserver();

    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage', icon: 'home' },
    ];
    console.log('Env is production ? ' + ENV.production);
  }

  ngOnInit() {
    this.listenAuthData();
    this.loadMenuCategories();
    this.authDataPersistenceService.getAuthDataObserver().subscribe(
      data => {
        if (data) {
          this.authUser = data.visitor;
        } else {
          this.authUser = null;
        }
      }
    );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.translateService.setDefaultLang('en');
      this.analyticsProvider.startTrackerWithId(ENV.analyticsTrackingId);
      this.nav.viewDidEnter.subscribe(
        (view) => {
          this.analyticsProvider.trackView(view.instance.constructor.name);
        }
      );
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  loadMenuCategories() {
    this.categoriesService.findAll()
    .then(
      data => {
        this.categories = data;
      }
    );
  }

  listenAuthData() {
    this.authData$.subscribe( authData => {
      if (!!authData) {
        this.userProfileService.fetchByEmail(authData.visitor.email).subscribe(
          userProfile => {
            if (userProfile) {
              if (userProfile.preferredLanguage) {
                this.translateService.use(userProfile.preferredLanguage);
                moment.locale(userProfile.preferredLanguage);
              }
            } else {
              /*
              If userProfile not exists create it
              */
              this.userProfileService.create(authData.visitor)
              .then(
                () => {
                console.log('user profile successfully created');
                },
                error => {
                  console.error(error);
                }
              );
            }
          }
        );
      } else {
        this.nav.setRoot('LoginPage');
      }
    });
  }

  logout() {
    this.authService.signOut();
  }

  pushDetailsPage(page: string, id: string) {
    if (id) {
      this.nav.push(page, {
        id: id,
        rootNavCtrl: this.nav
      });
    } else {
      console.log('missing id');
    }
  }

  openPage(pageComponent, push = true) {
    if (push) {
      this.nav.push(pageComponent);
    } else {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario

      this.nav.setRoot(pageComponent, {
        'id': 123
      });
    }
  }
}
