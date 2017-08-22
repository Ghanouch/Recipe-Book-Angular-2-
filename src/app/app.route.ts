import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {CHILD_RECIPE_ROUTE} from './recipes/recipe.route';
export const routes = [
    { path: '' , redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes' , component: RecipesComponent, children: CHILD_RECIPE_ROUTE},
    { path: 'shoopingList', component: ShoppingListComponent},
];
