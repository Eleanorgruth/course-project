import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { RecipeComponent } from "./recipe-component/recipe-component.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RecipeStartComponent } from "./recipe-component/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipe-component/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-component/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  {path: "", redirectTo: '/recipe', pathMatch: "full"},
  {path: "recipe", component: RecipeComponent, children: [
    {path: "", component: RecipeStartComponent },
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent},

  ]},
  {path: "list", component: ShoppingEditComponent},
  {path: "not-found", component: PageNotFoundComponent},
  {path: "**", redirectTo: '/not-found'}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}