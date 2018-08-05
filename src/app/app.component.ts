import { Component, ViewChild } from '@angular/core';
import { Events, Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { myTeamsPage } from '../pages/my-teams/my-teams';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { UserSettingsProvider } from '../providers/user-settings/user-settings';
import { EApiProvider } from '../providers/e-api/e-api';
import { TeamHomePage } from '../pages/team-home/team-home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  favoriteTeams: any[];
  rootPage: any = myTeamsPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    private event : Events,
    private userSettings:UserSettingsProvider,
     public platform: Platform,
      public statusBar: StatusBar,
       public splashScreen: SplashScreen,
      private loadingController: LoadingController,
      private eApi: EApiProvider
      
      ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.refreshFavorites();
      this.event.subscribe('favorites:changed', () => this.refreshFavorites());
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  refreshFavorites(){
    this.favoriteTeams = this.userSettings.getAllFavorites();
    //console.log('Inside App ',this.favoriteTeams);
  }

  goToHome(){
    this.nav.push(myTeamsPage);
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }

  goToTeam(favorite){
    let loader = this.loadingController.create({
      content: 'Getting Data',
      dismissOnPageChange: true
    });

    loader.present();
    //console.log('inside app',favorite.tournamentId);
    this.eApi.getTournamentData(favorite.tournamentId).subscribe(l => this.nav.push(TeamHomePage,favorite.team));
  }
}
