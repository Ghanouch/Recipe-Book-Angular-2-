import { Injectable } from '@angular/core';
import {Recipe} from './recipe';
import {Gradient} from './gradient';

@Injectable()
export class RecipesService {

  private recipes: Recipe[]= [
    new Recipe('Schnitzel', 'Very tasty', 'https://mobile-cuisine.com/wp-content/uploads/2013/09/Wiener-Schnitzel-Fun-Facts.jpg', [
      new Gradient('Frit', '2'),
      new Gradient('Tomates', '4')
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
      new Gradient('Jdid', '2'),
      new Gradient('Carottes', '4')
    ])
  ];

  getRecipes(): Recipe[]
  {
    return this.recipes;
  }

}
