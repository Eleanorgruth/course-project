import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeList implements OnInit {
 recipes: Recipe[]

 constructor(private receipeService: RecipeService) {
  this.recipes = receipeService.getRecipes()
 }

 ngOnInit() {

 }

}
