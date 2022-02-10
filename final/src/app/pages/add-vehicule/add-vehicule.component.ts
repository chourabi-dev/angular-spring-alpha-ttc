import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.css']
})
export class AddVehiculeComponent implements OnInit {




  
  formData = new FormGroup({
    mark: new FormControl('',Validators.required),
    model: new FormControl('',Validators.required),
    puissance: new FormControl('',Validators.required),
    matricule: new FormControl('',Validators.required),
    color: new FormControl('',Validators.required)
    
  })
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.api.addNewVehicule(this.formData.value).toPromise().then((res)=>{
      this.router.navigateByUrl('/vehicules');
    })
  }
	
 

}
