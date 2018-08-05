import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';
//import { EliteApiProvider } from '../../providers/elite-api/elite-api';
import { EApiProvider } from '../../providers/e-api/e-api';
@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
  public tournaments:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eliteApi:EApiProvider,
    public loadingController:LoadingController
  )
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
    let loader = this.loadingController.create({
      content:'getting tournaments....'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data
         loader.dismiss();
      });
    });
  
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter TournamentsPage');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave TournamentsPage');
  }


  ionViewWillUnload() {
    console.log('ionViewWillUnload TournamentsPage');
  }
  itemTapped($event, tourney){
    this.navCtrl.push(TeamsPage,tourney);
  }
}
