import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  formData = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    
  })
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.api.addNewClient(this.formData.value).toPromise().then((res)=>{
      this.router.navigateByUrl('/clients');
    })
  }
}
