import { Component, OnInit } from '@angular/core';
import { CacApiService } from '../service/cac-api.service';
import { User } from '../models/User';
import { user } from '../models/spotifyUser'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { playlist } from '../models/spotifyPlaylist';
const PROFILE = "https://api.spotify.com/v1/me";


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private currentRoute: ActivatedRoute, private cacService: CacApiService) { }

  id = 0;
  User: User = {
    userID: 0,
    email: '',
    account: '',
    admin: false
  };
  users: user[] = [];
  playlists: playlist[] = [];
  ngOnInit(): void {
    this.currentRoute.params.subscribe(params => {
      this.id = params['id'];
      this.cacService.getUserById(this.id).then(result => {
        this.User = result;
      });
    });

      this.cacService.getUserPlaylists().then(result =>{
        console.log(result)
        this.playlists = result.items;
  });
  
  this.cacService.getUserDetails().then(result =>{
    console.log(result)
    this.users = result.Object;
});
  
}
}

