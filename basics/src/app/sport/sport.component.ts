import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {



  // list get database
  list:any[]=[
    {  id:15 , title:"welcome to FIFA2022" },
    {  id:16 , title:"World Cup" },
     
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
