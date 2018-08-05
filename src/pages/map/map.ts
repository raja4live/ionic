import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EApiProvider } from '../../providers/e-api/e-api';

declare var window:any;
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  public map : any = {};
  constructor(private eApi:EApiProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    let games =  this.navParams.data;   
    let tourneyData = this.eApi.getCurrentTourney();
    console.log("T DATA:",tourneyData);
    let location = tourneyData.locations[games.locationId];
    console.log("Location:",location);
    this.map = {
      lat: 20.59625385,
      lng: 78.8489499,
      zoom: 12,
      markerLabel: games.location
    }
    console.log("MAP:",this.map)
  }

  goToDirections(){
    window.location = `geo:${this.map.lat},${this.map.lng};u=35`;
  }

}
