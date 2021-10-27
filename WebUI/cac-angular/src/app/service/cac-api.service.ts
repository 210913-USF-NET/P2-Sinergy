import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../models/User';
import { playlist } from '../models/spotifyPlaylist';
import { map, take } from 'rxjs/operators';
const PLAYLIST = "https://api.spotify.com/v1/me/playlists";

@Injectable({
  providedIn: 'root'
})
export class CacApiService {

  rootUrl: string = 'https://cacophony.azurewebsites.net/api/User';

  constructor(private http: HttpClient) { }

  getAllUsers(): Promise<User[]>
  {
    
    return this.http.get<User[]>(this.rootUrl).toPromise();
  }

  addUser(User: User): Promise<User>
  {
    return this.http.post<User>(this.rootUrl, User).toPromise();
  }

  getUserById(id: number): Promise<User>
  {
    return this.http.get<User>(this.rootUrl + "/" + id).toPromise();
  }

  getUserPlaylists(): Promise<playlist[]>
  {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.accessToken,
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.get<playlist[]>(PLAYLIST, requestOptions).toPromise();
  }
  
  // public getUserPlaylists(): void {
  //   let url = PLAYLIST
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Bearer ' + sessionStorage.accessToken
  //     }
  //   }).then(res => res.json()).then((resbody) => {
  //     this.populateTable(resbody);
  //     console.log(resbody);
  //   });
  // }


  //   public populateTable = function (playlist: playlist[]) {
  //   let table: HTMLTableElement | null = document.querySelector('table#playlist.playlists');
  //   if (table) {
  //     table.querySelectorAll('tr').forEach((elem) => elem.remove());
  //   }
  //   playlist.forEach((play) => {

  //     if (table) {
  //       let lastRowNum = table.tBodies[0].rows.length;
  //       let row: HTMLTableRowElement = table.insertRow(lastRowNum);
  //       let name: HTMLTableCellElement = row.insertCell(0);
  //       let id: HTMLTableCellElement = row.insertCell(1);
  //       let song: HTMLTableCellElement = row.insertCell(2);
  //       name.innerHTML = play.name;
  //       id.innerHTML = play.id;
  //       song.innerHTML = play.song;
  //     }
  //   })
  // }
}




