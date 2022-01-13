import { Component, OnInit } from '@angular/core';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  data:any[]=[];

  constructor(private panier:PanierService) { }

  ngOnInit(): void {
    this.data = this.panier.panier;
  }

}
