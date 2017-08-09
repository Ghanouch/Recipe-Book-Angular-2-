import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingService} from "../../shopping-list/shopping.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;


  constructor(private sls: ShoppingService) { }

  ngOnInit() {
  }

  onAddToSh()
  {
    this.sls.addIngradiants(this.selectedRecipe.gradiens);
  }


}
