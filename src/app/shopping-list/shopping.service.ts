import { Injectable } from '@angular/core';
import {Gradient} from '../recipes/gradient';

@Injectable()
export class ShoppingService {

  private items: Gradient[] = [];

  constructor() { }

  getIngrediant()
  {
    return this.items;
  }

  addIngradiants(items: Gradient[])
  {
    Array.prototype.push.apply(this.items, items);
  }

}
