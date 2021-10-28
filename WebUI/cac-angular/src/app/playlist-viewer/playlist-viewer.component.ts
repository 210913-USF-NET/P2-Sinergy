import { Component, OnInit } from '@angular/core';
import { CacApiService } from '../service/cac-api.service';
import { User } from '../models/User';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { playlist } from '../models/spotifyPlaylist';
import { Songs } from '../models/Song';
import { Playlist } from '../models/Playlist';
import { songs } from '../models/spotifySongs';
import { track } from '../models/playlistTrack';
import { artists } from '../models/spotifyArtist';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-playlist-viewer',
  templateUrl: './playlist-viewer.component.html',
  styleUrls: ['./playlist-viewer.component.css'],
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
  songs: songs[] = [];
  artist: artists[] = [];

  ngOnInit(): void {
    this.currentRoute.params.subscribe(params => {
      this.id = params['id'];
      this.cacService.getSinglePlaylist().then(result => {
        this.Songs = result;
      });
    });

      this.cacService.getSinglePlaylist().then(result =>{
        this.songs = result.items;
        console.log(result)
        console.log(this.songs[15].track.name)
        console.log(this.songs[15].track.artists[0].name)
        
  });
  
}
}
