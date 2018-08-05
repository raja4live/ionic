import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http'
import { Injectable } from '@angular/core';


@Injectable()
export class EliteApiProvider {
  private baseUrl  = 'https://elite-schedule-app-i2-4e829.firebaseio.com/tournaments.json';
  constructor(public http: Http) {
   
  }

  getTournaments(){
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}`).subscribe(res => resolve(res.json()));
    });
  }

}
