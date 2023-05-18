import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef

  constructor(private slService: ShoppingListService) {}

  addToList() {
    const ingName = this.nameInput.nativeElement.value
    const ingAmout = this.amountInput.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmout)
    this.slService.addIngredient(newIngredient)
  }
}
