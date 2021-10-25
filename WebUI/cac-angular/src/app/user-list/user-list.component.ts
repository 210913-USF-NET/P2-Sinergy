import { Component, OnInit } from '@angular/core';
import { CacApiService } from '../service/cac-api.service';
import { User } from '../models/User';
declare var getToken: any;


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private cacService: CacApiService) { }

  Users: User[] = [];

  onClick(){
    
      new getToken();

    }

  ngOnInit(): void {
    this.cacService.getAllUsers().then(result =>{
      console.log(result)
      this.Users = result;
    });

    
  }
    

}


