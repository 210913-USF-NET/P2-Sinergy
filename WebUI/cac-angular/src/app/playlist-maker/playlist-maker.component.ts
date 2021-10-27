import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from '../models/Playlist';
import { CacApiService } from '../service/cac-api.service';

@Component({
  selector: 'app-playlist-maker',
  templateUrl: './playlist-maker.component.html',
  styleUrls: ['./playlist-maker.component.css']
})
export class PlaylistMakerComponent implements OnInit {

  constructor(private currentRoute: ActivatedRoute, private cacService: CacApiService) { }

  id = 0;
  Playlist: Playlist ={
    PlaylistID: 0,
    UserID: 0,
    user: '',
    SongCount: 0,
    Timeframe: 0
  };

  ngOnInit(): void {
  }

}
