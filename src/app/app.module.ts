import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from '../app/shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from '../app/shopping-list/shopping-list-add.component';
import { DropDownDirective } from './recipes/drop-down.directive';
import {RecipesService} from './recipes/recipes.service';
import {ShoppingService} from './shopping-list/shopping.service';
import {RouterModule} from '@angular/router';
import {routes} from './app.route';
import { StartRecipeComponent } from './recipes/start-recipe.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropDownDirective,
    StartRecipeComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
    ],
  providers: [RecipesService, ShoppingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
