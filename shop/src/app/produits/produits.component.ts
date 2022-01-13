import { Component, OnInit } from '@angular/core';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits:any[]=[
    { title:"Samsung A71" , price:2000, photo:"https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/samsung-galaxy-a70-frandroid-2019-1.png?resize=580,580" },
    { title:"Sony playstation" , price:5000, photo:"https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/samsung-galaxy-a70-frandroid-2019-1.png?resize=580,580" },
    
  ]
  constructor(private panier:PanierService) { }

  ngOnInit(): void {
  }

  addToCart(p){
    this.panier.addToCart(p);
    
  }

}
