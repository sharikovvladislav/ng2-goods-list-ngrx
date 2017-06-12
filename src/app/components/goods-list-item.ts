import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Good } from '../models/good';


@Component({
  selector: 'bc-goods-list-item',
  template: `
    <span (click)="select.emit(good)">{{good.name}}</span>
  `,
  styles: []
})
export class GoodsListItemComponent {
  @Input() good: Good;
  @Output() select = new EventEmitter<Good>();
}
