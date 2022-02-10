import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-vehicules-page',
  templateUrl: './vehicules-page.component.html',
  styleUrls: ['./vehicules-page.component.css']
})
export class VehiculesPageComponent implements OnInit {

  vehicules = [];
  
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getVehiculesList().toPromise().then((res:any[])=>{ 
      this.vehicules = res;
     })
  }

}
