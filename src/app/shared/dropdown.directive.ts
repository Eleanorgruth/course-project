import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false
  //HostListener to listen to a click
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen

  }
}