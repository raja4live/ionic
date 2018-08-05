
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Events } from 'ionic-angular'

@Injectable()
export class UserSettingsProvider {

  constructor( private storage: Storage , private event: Events) {
    console.log('Hello UserSettingsProvider Provider');
  }


  favoriteTeam(team , tournamentId, tournamentName){
    let iteam = { team: team, tournamentId: tournamentId, tournamentName: tournamentName } 
      
     this.storage.set(team.id.toString(), JSON.stringify(iteam));
     this.event.publish('favorites:changed');

  }

  unfavoriteTeam(team){
      this.storage.remove(team.id.toString());
      this.event.publish('favorites:changed');
  }

  isFavoriteTeam(teamId: string) : Promise<boolean> {
        return  this.storage.get(teamId).then(value => value ? true : false);
  }

  getAllFavorites(){
    let results =  [];
    this.storage.forEach(data => {
      console.log('**Inside ForEach:**',data);
      results.push(JSON.parse(data))
    });
    return results;

  }
}
