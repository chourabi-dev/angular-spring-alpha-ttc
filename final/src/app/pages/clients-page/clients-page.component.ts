import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css']
})
export class ClientsPageComponent implements OnInit {

  clients:any[] = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.initData();
  }

  initData(){
    this.api.getClientsList().toPromise().then((res:any[])=>{
      
      
      this.clients = res;
    }).catch((err)=>{
      console.log(err);
      
    })
  }

}
