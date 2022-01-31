import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartserviceService {
  finalShoppingCart = new Subject<{id: number,
  name: string,
  path: string,
  type: string,
  price: number,
  isAdd: boolean,
  qty: number}[]
  >();

  refreshShopingList = [];

  constructor() { 
    this.finalShoppingCart.subscribe(val=>{
      this.refreshShopingList = val;
    })
  }
}
