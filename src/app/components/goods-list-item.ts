import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Good } from '../models/good';


@Component({
  selector: 'bc-goods-list-item',
  template: `
    <li (click)="select.emit(good)" [ngClass]="{'selected': selected}">{{good.name}}</li>
  `,
  styles: [
    '.selected { color: red }'
  ]
})
export class GoodsListItemComponent {
  @Input() good: Good;
  @Input() selected: boolean;
  @Output() select = new EventEmitter<Good>();
}
