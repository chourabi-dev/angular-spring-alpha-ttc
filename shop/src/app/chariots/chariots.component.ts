import { Component, OnInit } from '@angular/core';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-chariots',
  templateUrl: './chariots.component.html',
  styleUrls: ['./chariots.component.css']
})
export class ChariotsComponent implements OnInit {

  panier:any[]=[];
  constructor(private panierS:PanierService) { }

  ngOnInit(): void {
    this.panier = this.panierS.panier;

    
  }

}
