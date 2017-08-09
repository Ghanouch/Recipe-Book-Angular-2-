import { Component, OnInit } from '@angular/core';
import {Gradient} from "../recipes/gradient";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'

})
export class ShoppingListComponent implements OnInit {

  items: Gradient[] = [];
  constructor() { }

  ngOnInit() {
  }

}
