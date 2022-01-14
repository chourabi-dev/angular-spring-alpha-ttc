import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    
  })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  connect(){
    const username = this.authForm.value.username;
    const password = this.authForm.value.password;

    if (username === 'admin' && password === 'admin') {
      // generate a new token !!
      const token = new Date().getTime()+"_token";

      localStorage.setItem('my-token',token);

      // redirect home !!
      this.router.navigateByUrl('/');


    }else{
      alert("wrong username or password !!");
    }
    
  }
 
}
