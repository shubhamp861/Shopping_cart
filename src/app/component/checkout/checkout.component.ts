import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartList=[];

  constructor(private routes:ActivatedRoute) { 
      this.routes.params.subscribe(val=>{
        this.cartList = JSON.parse(val.productList);})}

  ngOnInit() {
  }

}
