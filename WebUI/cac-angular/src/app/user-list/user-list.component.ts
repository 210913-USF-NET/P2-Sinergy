import { Component, OnInit } from '@angular/core';
import { CacApiService } from '../Services/cac-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private cacService: CacApiService) { }

  users: [] = [];
  ngOnInit(): void {
    this.cacService.getAllUsers().then(result =>{
      console.log(result);
    })
  }

}
