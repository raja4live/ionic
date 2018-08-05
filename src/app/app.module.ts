import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { HttpModule } from '@angular/http' 
import { MyApp } from './app.component';
import { AgmCoreModule } from '@agm/core'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { myTeamsPage } from '../pages/my-teams/my-teams';
import { GamePage } from '../pages/game/game';
import { TeamsPage } from '../pages/teams/teams';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { StandingsPage } from '../pages/standings/standings';
import { TeamHomePage } from '../pages/team-home/team-home';
import { EliteApiProvider } from '../providers/elite-api/elite-api';
import { EliteApisProvider } from '../providers/elite-apis/elite-apis';
import { EApiProvider } from '../providers/e-api/e-api';
import { UserSettingsProvider } from '../providers/user-settings/user-settings';
import { MapPage } from '../pages/map/map';

@NgModule({
  declarations: [
    MyApp,
    myTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    StandingsPage,
    TeamHomePage,
    MapPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAwRVCZ73pMV3fPrgNyDCSXVFD74IIoO6Y'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    myTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    StandingsPage,
    TeamHomePage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApiProvider,
    EliteApiProvider,
    EliteApiProvider,
    EliteApisProvider,
    EliteApisProvider,
    EliteApisProvider,
    EApiProvider,
    UserSettingsProvider
  ]
})
export class AppModule {}
