import { Component, OnInit } from '@angular/core';
import { CacApiService } from '../service/cac-api.service';
import { User } from '../models/User';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { playlist } from '../models/spotifyPlaylist';
import { Songs } from '../models/Song';

@Component({
  selector: 'app-playlist-viewer',
  templateUrl: './playlist-viewer.component.html',
  styleUrls: ['./playlist-viewer.component.css']
})
export class PlaylistViewerComponent implements OnInit {

  constructor(private currentRoute: ActivatedRoute, private cacService: CacApiService) { }

  id = 0;
  User: User = {
    userID: 0,
    email: '',
    account: '',
    admin: false
  };
  playlist: Songs[] = [];
  ngOnInit(): void {
    this.currentRoute.params.subscribe(params => {
      this.id = params['id'];
      this.cacService.getUserById(this.id).then(result => {
        this.User = result;
      });
    });

      this.cacService.getUserPlaylists().then(result =>{
        console.log(result)
  });
  
}
}
