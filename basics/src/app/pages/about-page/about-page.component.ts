import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.redirect();
  }


  redirect(){
    setTimeout(() => {
      this.router.navigateByUrl('/articles');
    }, 3000);
  }

}
