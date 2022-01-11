import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent implements OnInit {


  
  articles:any[] = [
    { title:"custom title 1", content:"custom content" , likes: 18 },
    { title:"custom title 1", content:"custom content" , likes: 5 },
    { title:"custom title 1", content:"custom content" , likes: 9 },
    
    
  ];



  callFromChild(){
    console.log("call from child");
    
  }


  
  constructor() { }

  ngOnInit(): void {
  }


}
