import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../models/User';
import { Playlist } from '../models/Playlist';
const PLAYLIST = "https://api.spotify.com/v1/me/playlists";
const PROFILE = "https://api.spotify.com/v1/me";

@Injectable({
  providedIn: 'root'
})
export class CacApiService {

  rootUrl: string = 'https://cacophony.azurewebsites.net/api/User';
  PlaylistUrl: string = 'https://cacophony.azurewebsites.net/api/Playlist';

  constructor(private http: HttpClient) { }

  getAllUsers(): Promise<User[]>
  {
    
    return this.http.get<User[]>(this.rootUrl).toPromise();
  }

  addUser(User: User): Promise<User>
  {
    return this.http.post<User>(this.rootUrl, User).toPromise();
  }

  addPlaylist(Playlist: Playlist): Promise<Playlist>
  {
    return this.http.post<Playlist>(this.PlaylistUrl, Playlist).toPromise();
  }

  getUserById(id: number): Promise<User>
  {
    return this.http.get<User>(this.rootUrl + "/" + id).toPromise();
  }

  getUserPlaylists(): Promise<any>
  {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.authCode,
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.get<any>(PLAYLIST, requestOptions).toPromise();
  }

  
  getSinglePlaylist(URI): Promise<any>
  {
    let url ='https://api.spotify.com/v1/playlists/'+URI+'/tracks';
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.authCode,
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.get<any>(url, requestOptions).toPromise();
  }


  getUserDetails(): Promise<any>
  {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.authCode,
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.get<any>(PROFILE, requestOptions).toPromise();
  }

  getTopTracks(username:string, from: string, to: string): Promise<any>
  {
    let url ='http://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user='+username+'&api_key=bd9a22a5a89705767018c3e16cd85172&from='+from+'&to='+to+'&format=json';
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.http.get<any>(url, requestOptions).toPromise();
  }
  
}




