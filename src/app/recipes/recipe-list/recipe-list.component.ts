import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeDetailComponent} from '../recipe-detail/recipe-detail.component';
import {RecipesService} from "../recipes.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'

})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]= [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe: Recipe= new Recipe('Dammen', 'Demn Desc', 'http://vignette3.wikia.nocookie.net/half-life/images/6/6d/Male_bot_dummy.jpg/revision/latest?cb=20110513185603&path-prefix=en',[]);
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe)
  {
     this.recipeSelected.emit(recipe);
  }

}
