import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeList implements OnInit {
 recipes: Recipe[]

 constructor(
  private receipeService: RecipeService,
  private router: Router,
  private route: ActivatedRoute) {
  this.recipes = receipeService.getRecipes()
 }

 ngOnInit() {
  
 }

 onNewRecipe() {
  this.router.navigate(['new'], {relativeTo: this.route})
 }

}
