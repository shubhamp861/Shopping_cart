import { Component, OnInit } from '@angular/core';
import { ShoppingcartserviceService } from '../../shoppingcartservice.service';
import { interval } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  total=5.68;
  shoppingCart = [];
  sub;
  constructor(private shoppingService:ShoppingcartserviceService,private routs:Router) {
   interval(100).subscribe(x=>this.Add())
  }

    Add(){
    let count = 0;
    this.shoppingCart = [];
    this.shoppingService.refreshShopingList.forEach(x=>{
    this.shoppingCart.push(x);
    count= count+(x.cartprice);});
    this.total=count;
 }
 cartCLear(){
   this.shoppingService.finalShoppingCart.next([]);
   this.total=0.0;
 }

 navigate(){
   this.routs.navigate(["/checkout",JSON.stringify(this.shoppingCart)]);
 }
}
