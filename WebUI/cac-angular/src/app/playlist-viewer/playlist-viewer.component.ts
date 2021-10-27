import { Component, OnInit } from '@angular/core';
import { CacApiService } from '../service/cac-api.service';
import { User } from '../models/User';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { playlist } from '../models/spotifyPlaylist';
import { Songs } from '../models/Song';
import { Playlist } from '../models/Playlist';

@Component({
  selector: 'app-playlist-viewer',
  templateUrl: './playlist-viewer.component.html',
  styleUrls: ['./playlist-viewer.component.css']
})
export class PlaylistViewerComponent implements OnInit {

  constructor(private currentRoute: ActivatedRoute, private cacService: CacApiService) { }

  id = '37i9dQZF1DZ06evO1F4G5T';
  Songs: Songs = {
    PlaylistID: 0,
    URL:'',
    SongsID: 0,
    InformationID: 0,
  };
  song: Songs[] = [];
  ngOnInit(): void {
    this.currentRoute.params.subscribe(params => {
      this.id = params['id'];
      this.cacService.getSinglePlaylist(this.id).then(result => {
        this.Songs = result;
      });
    });

      this.cacService.getSinglePlaylist(this.id).then(result =>{
        console.log(result)
  });
  
}
}
