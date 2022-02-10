import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-details-vehicule',
  templateUrl: './details-vehicule.component.html',
  styleUrls: ['./details-vehicule.component.css']
})
export class DetailsVehiculeComponent implements OnInit {


  id;
  data = null;

  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.initData();
  }



  initData(){
    this.api.findVehiculeById(this.id).toPromise().then((data)=>{
      console.log(data);
      this.data = data;
      
    }).catch((err)=>{
      console.log(err);
      
    })
  }

}
