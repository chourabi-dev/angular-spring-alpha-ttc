import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panier:any[] =[]

  constructor() { }


  addToCart(data){
    this.panier.push(data)
  }
}
