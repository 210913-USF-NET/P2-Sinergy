import { Component, OnInit } from '@angular/core';
import { CacApiService } from '../service/cac-api.service';
import { User } from '../models/User';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private cacService: CacApiService, private router: Router) { }

  Users: User[] = [];

  ngOnInit(): void {
    this.cacService.getAllUsers().then(result =>{
      console.log(result)
      this.Users = result;
    });
}
    goToUser(UserId: number): void
  {
    //navigate by absolute path
    this.router.navigateByUrl(`users/${UserId}`);
  }
  
}


