import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users:any[] = [];


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.initData();
  }

  initData(){
    this.api.getUsersList().toPromise().then((res:any[])=>{

      console.log(res);
      this.users = res;
      
    }).catch((err)=>{})
  }

}
