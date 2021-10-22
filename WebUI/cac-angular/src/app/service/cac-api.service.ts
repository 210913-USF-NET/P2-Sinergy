import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CacApiService {

  rootUrl: string = 'https://cacophony.azurewebsites.net/api/User';

  constructor(private http: HttpClient) { }

  getAllUsers(): Promise<[]>
  {
    return this.http.get<[]>(this.rootUrl).toPromise();
  }
}
