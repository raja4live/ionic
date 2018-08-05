import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StandingsPage } from '../standings/standings';
import { TeamDetailPage } from '../team-detail/team-detail';
import { myTeamsPage } from '../my-teams/my-teams';

/**
 * Generated class for the TeamHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {

  public team:any = {}; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
    console.log("Team:",this.navParams)
  }
  public teamDetailTab = TeamDetailPage;
  public standingsTab = StandingsPage
  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

  goHome(){
   // this.navCtrl.push(myTeamsPage); 
    this.navCtrl.popToRoot();
  }

}
