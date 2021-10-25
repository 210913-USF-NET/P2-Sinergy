import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/User';

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
}
