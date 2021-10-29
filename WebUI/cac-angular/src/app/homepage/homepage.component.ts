import { Component, OnInit } from '@angular/core';
import { CacApiService } from '../service/cac-api.service';
import { User } from '../models/User';
import { user } from '../models/spotifyUser';
import { Songs } from '../models/Song';
import { artists } from '../models/spotifyArtist';
import { songs } from '../models/spotifySongs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { playlist } from '../models/spotifyPlaylist';
const PROFILE = "https://api.spotify.com/v1/me";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private currentRoute: ActivatedRoute, private cacService: CacApiService, private router: Router) { }

  id = 0;
  User: User = {
    userID: 0,
    email: '',
    account: '',
    admin: false
  };
  user: user;
  playlists: playlist[] = [];
  Songs: Songs = {
    PlaylistID: 0,
    URL:'',
    SongsID: 0,
    InformationID: 0,
  };
  songs: songs[] = [];
  artist: artists[] = [];


  ngOnInit(): void {
    this.cacService.getSinglePlaylist("4vKsBR0At6QDqTApovWDtw").then(result =>{
      this.songs = result.items;
      this.artist = result.items.track;
    });
    this.cacService.getUserDetails().then(result => {
      console.log(result)
      console.log(result.display_name)
      this.user = result;
      this.cacService.addUser({email: this.user.email, account: this.user.id})
    });
  }
  goToPlaylist(playlistURI: string): void
  {
    //navigate by absolute path
    this.router.navigateByUrl(`playlist/${playlistURI}`);
  }
  goToMoreCharts(playlistURI: string): void
  {
    //navigate by absolute path
    this.router.navigateByUrl(`more-charts/${playlistURI}`);
  }
}
