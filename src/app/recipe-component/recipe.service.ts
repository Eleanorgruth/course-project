import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      "pizza",
      "pizza description",
      "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?size=626&ext=jpg&ga=GA1.1.1510911396.1682543127&semt=robertav1_2_sidr",
      [
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 10),
      ]),
    new Recipe(
      "pasta",
      "pasta description",
      "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?size=626&ext=jpg&ga=GA1.1.1510911396.1682543127&semt=robertav1_2_sidr",
      [
        new Ingredient('Pasta', 4),
        new Ingredient('Sauce', 14)
      ]),
   ]

   constructor(private slService: ShoppingListService){}
   getRecipes() {
    return this.recipes.slice()
   }

   addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
   }
}