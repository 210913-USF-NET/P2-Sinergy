import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from '../models/Playlist';
import { Songs } from '../models/Song';
import { CacApiService } from '../service/cac-api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { song } from '../models/LastFM Models/LastFMSong'

@Component({
  selector: 'app-playlist-maker',
  templateUrl: './playlist-maker.component.html',
  styleUrls: ['./playlist-maker.component.css']
})
export class PlaylistMakerComponent implements OnInit {

  playlist: Songs[];

  constructor(private currentRoute: ActivatedRoute, private cacService: CacApiService, private http: HttpClient, private router: Router) {  }

    
 
  song: song[] = [];
  ngOnInit(): void {
    
    this.cacService.getTopTracks('Rhormus', '0', '2635456994').then(result =>{
      this.song = result.track;
      console.log(result)
      console.log(this.song[4].artist.text)
    })
  
}

}
