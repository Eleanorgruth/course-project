import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-component',
  templateUrl: './recipe-component.component.html',
  styleUrls: ['./recipe-component.component.css']
})
export class RecipeComponent {
  selectedRecipe: Recipe;

  // onRecipeDetail(recipe){
  //   this.currentRecipeDetail = recipe
  // }
}