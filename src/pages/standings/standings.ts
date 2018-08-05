import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EApiProvider } from '../../providers/e-api/e-api';
import _ from 'lodash';


@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {
  public allStandings: any[];
  public standings:any[];
  public team:any; 
  public divisionFilter = 'division';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eApi: EApiProvider 
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StandingsPage');

    this.team = this.navParams.data;
    let tourneyData = this.eApi.getCurrentTourney();
    this.standings = tourneyData.standings; 

    this.allStandings = tourneyData.standings
    // this.allStandings = 
    //    _.chain(this.standings)
    //    .groupBy('division')
    //    .toPairs()
    //    .map(item => _.zipObject(['divisionName', 'divisionStanding'],item))
    //    .value();
      this.filterDivision();
       console.log('standing', this.standings);
       console.log('division standing' , this.allStandings);
  }

  getHeader(record, recordIndex,records){
    if(recordIndex === 0 || record.division !== records[recordIndex -1].division){
      return record.division;
    }
    else{
      return null;
    }
  }
  
  filterDivision(){
    if(this.divisionFilter === 'all'){
      this.standings = this.allStandings;
    }
    else{
      this.standings = _.filter(this.allStandings, s => s.division === this.team.division); 
    }
  }
}
