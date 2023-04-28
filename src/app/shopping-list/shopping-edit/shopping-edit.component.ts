import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() listItemCreated = new EventEmitter<Ingredient>()

  @ViewChild('amountInput', {static: false}) amountInput: ElementRef
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef

  addToList() {
    const ingName = this.nameInput.nativeElement.value
    const ingAmout = this.amountInput.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmout)
    this.listItemCreated.emit(newIngredient)
    // console.log(listDetail)
    //this.listItemCreated.emit(listDetail)
    // ingredients.push(listDetail)
  }
}
