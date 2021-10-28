import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from '../models/Playlist';
import { Songs } from '../models/Song';
import { CacApiService } from '../service/cac-api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-maker',
  templateUrl: './playlist-maker.component.html',
  styleUrls: ['./playlist-maker.component.css']
})
export class PlaylistMakerComponent implements OnInit {

  playlist: Songs[];

  constructor(private currentRoute: ActivatedRoute, private cacService: CacApiService, private http: HttpClient, private router: Router) { 

    
  }

  ngOnInit(): void {
    this.getPlaylist();
  }

  getPlaylist(){
    this.http.get<any>('https://ws.audioscrobbler.com/2.0/?method=tag.getweeklychartlist&tag=rank&api_key=bd9a22a5a89705767018c3e16cd85172&format=json').subscribe(
      response => {this.playlist = response; console.log(response);}
    )
  }

  onClick(){
    this.router.navigate(['/playlist/:id']);
  }

}
