import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe-component/recipe-component.component';
import { RecipeList } from './recipe-component/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-component/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-component/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
<<<<<<< HEAD
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipe-component/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-component/recipe-edit/recipe-edit.component';

=======
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  {path: "recipe", component: RecipeComponent},
  {path: "list", component: ShoppingEditComponent}
]
>>>>>>> c4f5ef4d4ec804d24e8c138bbe7d51545cde8a97
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeList,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    PageNotFoundComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    AppRoutingModule
=======
    RouterModule.forRoot(appRoutes)
>>>>>>> c4f5ef4d4ec804d24e8c138bbe7d51545cde8a97
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
