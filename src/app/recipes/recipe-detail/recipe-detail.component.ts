import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipe';
import {ShoppingService} from '../../shopping-list/shopping.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipesService} from '../recipes.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }

  selectedRecipe: Recipe;
  private recipeId= 0;
  private subsciption: Subscription;

  constructor(private sls: ShoppingService, private route: Router, private activatedRoute: ActivatedRoute, private srs: RecipesService) { }

  ngOnInit() {
    this.subsciption = this.activatedRoute.params.subscribe(
      (param: any) =>
      {
        this.recipeId = param['id'];
        this.selectedRecipe = this.srs.getRecipe(this.recipeId);
      }
     );
  }

  onAddToSh()
  {
    this.sls.addIngradiants(this.selectedRecipe.gradiens);
  }

  onEdit()
  {
    this.route.navigate(['/recipes', this.recipeId, 'edit']);
  }


  onDelete()
  {
    this.srs.delete(this.recipeId);
    this.route.navigate(['/recipes']);
  }


}
