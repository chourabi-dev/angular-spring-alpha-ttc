import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  id:string=null;

  // get the id from the url
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route);
    this.id = this.route.snapshot.params.ninja;

  }


  // initDATA() -> call server 

}
