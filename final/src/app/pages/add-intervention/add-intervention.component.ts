import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-intervention',
  templateUrl: './add-intervention.component.html',
  styleUrls: ['./add-intervention.component.css']
})
export class AddInterventionComponent implements OnInit {


  formData = new FormGroup({
    descriptino : new FormControl('',Validators.required)
  })
  id;

  constructor(private api:ApiService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

  submit(){
    this.api.addIntervention({
      vehicule : this.id,
      description: this.formData.value.descriptino
    }).toPromise().then((res)=>{
      this.router.navigateByUrl('/vehicules/details/'+this.id);
    })
  }
}
