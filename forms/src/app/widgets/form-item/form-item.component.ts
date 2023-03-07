import { Component, Input } from '@angular/core';

@Component({
  selector: 'widgets-form-item',
  templateUrl: './form-item.component.html',
  styles: [
  ]
})
export class FormItemComponent {

  @Input()
  label?:string

}
