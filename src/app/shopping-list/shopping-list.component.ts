import { Component, OnInit } from '@angular/core';
import {Gradient} from "../recipes/gradient";
import {ShoppingService} from "./shopping.service";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'

})
export class ShoppingListComponent implements OnInit {

  items: Gradient[] = [];
  constructor(private shopingService: ShoppingService) { }

  ngOnInit() {
    this.items = this.shopingService.getIngrediant();
  }






}
