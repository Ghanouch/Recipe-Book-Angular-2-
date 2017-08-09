import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeDetailComponent} from '../recipe-detail/recipe-detail.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'

})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]= [
    new Recipe('Schnitzel', 'Very tasty', 'https://mobile-cuisine.com/wp-content/uploads/2013/09/Wiener-Schnitzel-Fun-Facts.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe: Recipe= new Recipe('Dammen', 'Demn Desc', 'http://vignette3.wikia.nocookie.net/half-life/images/6/6d/Male_bot_dummy.jpg/revision/latest?cb=20110513185603&path-prefix=en',[]);
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe)
  {
     this.recipeSelected.emit(recipe);
  }

}
