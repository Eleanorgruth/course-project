import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //@output allows this to be listened to outside of component(parent component)
  //@Output() featureSelected = new EventEmitter<string>()
  collapsed = true

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature)
  // }
}
