import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';
import { EApiProvider } from '../../providers/e-api/e-api';
import { TeamHomePage } from '../team-home/team-home';
import { UserSettingsProvider } from '../../providers/user-settings/user-settings';

@Component({
    selector:'page-my-teams',
    templateUrl:'my-teams.html'
})

export class myTeamsPage{
    constructor(
        private nav: NavController,
        private loadingController: LoadingController,
        private eAPi: EApiProvider,
        private userSettings: UserSettingsProvider
    ){}

   favorites = [];
    //    {
    //     team:{id:6182,name:'HC Elite 7th',coach:'Dinesh'},
    //     tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
    //     tournamentName: 'March Madness tournaments'
    //    },
    //    {
    //     team:{id:805,name:'HC Elite',coach:'Aman'},
    //     tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
    //     tournamentName: 'Holyday hoops challenge'
    //    }
    // ];
   
   
   
    goToTournaments(){
        this.nav.push(TournamentsPage);
    }


    favoriteTapped($evnt, favorite){
         let loader = this.loadingController.create({
             content:'Getting data....',
             dismissOnPageChange:true
         });

         loader.present();
         this.eAPi.getTournamentData(favorite.tournamentId)
                  .subscribe(t => this.nav.push(TeamHomePage,favorite.team));
                      
    }

    ionViewDidEnter(){
        this.favorites = this.userSettings.getAllFavorites();
    }
}