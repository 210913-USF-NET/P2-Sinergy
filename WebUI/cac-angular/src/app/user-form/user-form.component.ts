import { Component, OnInit } from '@angular/core';
import { CacApiService } from '../service/cac-api.service';
import { User } from '../models/User';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private currentRoute: ActivatedRoute, private cacService: CacApiService) { }

id = 0;
User: User = {
  userID: 0,
  email: '',
  account: '',
  admin: false
};  


  ngOnInit(): void {
    this.currentRoute.params.subscribe(params => {
      this.id = params['id'];
      this.cacService.getUserById(this.id).then(result => {
        this.User = result;
      });
    });

    
  }
    
}

