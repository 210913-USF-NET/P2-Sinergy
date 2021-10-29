import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from '../models/Playlist';
import { Songs } from '../models/Song';
import { CacApiService } from '../service/cac-api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { song } from '../models/LastFM Models/LastFMSong'
import { playlistMaker } from '../models/LastFM Models/LastFMWeeklytrackchart';

declare function createNewPlaylist(playlistName: string)
declare function spotifySearch(search: string)
declare function addSongsToPlaylist(songs: string)
@Component({
  selector: 'app-playlist-maker',
  templateUrl: './playlist-maker.component.html',
  styleUrls: ['./playlist-maker.component.css']
})
export class PlaylistMakerComponent implements OnInit {

  playlist: Songs[];

  constructor(private currentRoute: ActivatedRoute, private cacService: CacApiService, private http: HttpClient, private router: Router) {  }

  artistAndSong: string;

  song: any;
  ngOnInit(): void {}

  newPlay: playlistMaker = new playlistMaker();



InfoSubmit() {
  
  let listName = this.newPlay.playlistName;
  let listLength = this.newPlay.listLength;
  let to = this.newPlay.to;
  let from = this.newPlay.from;
  let user = this.newPlay.user;

  to = ((new Date(to).getTime() / 1000).toFixed(0)).toString();
  from = ((new Date(from).getTime() / 1000).toFixed(0)).toString();
  console.log(listName);
  console.log(listLength);
  console.log(to);
  console.log(from);
  console.log(user);
  //let results = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=${user}&api_key=bd9a22a5a89705767018c3e16cd85172&from=${from}&to=${to}&format=json`)
  // console.log(results); 
  
  createNewPlaylist(listName);

  this.cacService.getTopTracks(user, from, to).then(result =>{
    this.song = result.weeklytrackchart.track;
    console.log(result)
    console.log(result.weeklytrackchart.track[4].artist['#text'])
    console.log(result.weeklytrackchart.track[4]['@attr'].rank)
    var songArray = new Array;
    for(var i = 0; i<parseInt(listLength); i++)
    {
      this.artistAndSong=result.weeklytrackchart.track[i].artist['#text']+ ' ' + result.weeklytrackchart.track[i].name;
      console.log(this.artistAndSong);
      songArray.push(this.artistAndSong);
    }


      songArray.forEach(song => 
          spotifySearch(song));
          console.log(sessionStorage.searchedSong)
          console.log("Request made with "+ sessionStorage.searchedSong+"at playlist uri" +sessionStorage.newPlaylist)
      
      console.log("Request made with "+ sessionStorage.searchedSong+"at playlist uri" +sessionStorage.newPlaylist)
      sessionStorage.removeItem('searchedSong');
      
    })
    addSongsToPlaylist(sessionStorage.searchedSong);

}
// let searchBtn = document.getElementByID('searchBtn').addEventListener('click',search());
}