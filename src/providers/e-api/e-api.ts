import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'

@Injectable()
export class EApiProvider {
  private tournamentsUrl  = 'https://elite-schedule-app-i2-4e829.firebaseio.com/tournaments.json';
  private baseUrl  = 'https://elite-schedule-app-i2-4e829.firebaseio.com';
  private currentTourney:any = {};
  private tourneyData = {}; 
  constructor(public http: Http) {
  
  }


  getTournaments(){
    return new Promise(resolve => {
      this.http.get(`${this.tournamentsUrl}`).subscribe(res => resolve(res.json()));
    });
  }


  getTournamentData(tourneyId, forceRefresh: boolean = false) : Observable<any>{
       if(!forceRefresh && this.tourneyData[tourneyId]){
         this.currentTourney = this.tourneyData[tourneyId];
         console.log('No need to make http call')
         return Observable.of(this.currentTourney);
       }

       console.log('About to make http call')
        return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
            .map(response => {
              this.currentTourney = response.json();
               return this.currentTourney;
            });
  }

  getCurrentTourney(){
    return this.currentTourney;
  }
  
  refreshCurrentTourney(){
    return this.getTournamentData(this.currentTourney.tournament.id, true);
  } 
}
