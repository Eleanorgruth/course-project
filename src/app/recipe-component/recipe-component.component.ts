import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'recipe-component',
  templateUrl: './recipe-component.component.html',
  styleUrls: ['./recipe-component.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService,
      private router: Router) {}

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe
        }
      )
  }

  navigateToShoppingList(){
    this.router.navigate(["/list"])
  }
}