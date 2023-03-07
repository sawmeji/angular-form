import { Component, Input } from '@angular/core';

@Component({
  selector: 'widgets-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent {

  @Input()
  title?:string

  @Input()
  bottom?:string
}
