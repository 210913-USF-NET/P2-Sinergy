import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LastFMService {

  LASTFMKEY = 'bd9a22a5a89705767018c3e16cd85172'

  constructor(private http: HttpClient) { }

  searchMusic(artistName: string, queryType: string) {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.${queryType}&artist=${artistName}&api_key=${this.LASTFMKEY}&format=json`);
  }
userTopTracks(user: string, start: string, end: string){
  return this.http.get('https://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user='+user+'&from='+start+'&to='+end+'&api_key='+this.LASTFMKEY+'&format=json');
}

}