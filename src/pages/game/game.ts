import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EApiProvider } from '../../providers/e-api/e-api';
import { TeamHomePage } from '../team-home/team-home';
import { MapPage } from '../map/map';

declare var window:any;

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  public game:any = {}
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private eApi:EApiProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
    this.game = this.navParams.data;
    console.log('Game:',this.game);
    this.game.gameTime = Date.parse(this.game.time);
  }

  teamTapped(teamId){
    let tourneyData = this.eApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.navCtrl.push(TeamHomePage,team);
  }

  goToDirections(){ 
      let tourneyData = this.eApi.getCurrentTourney();
      let location = tourneyData.locations[this.game.locationId];
   //   window.location = `geo:${location.latitude},${location.longitude};u=35`
         location.latitude = 20.59625385;
         location.longitude = 78.8489499;
        window.location = `geo:${location.latitude},${location.longitude};u=35`
  }

  goToMap(){
    this.navCtrl.push(MapPage, this.game);
  }

  isWinner(score1, score2){
    return Number(score1) > Number(score2) ? 'primary' : 'danger';
  }
}
