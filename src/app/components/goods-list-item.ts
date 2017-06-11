import { Component, Input } from '@angular/core';

import { Good } from '../models/good';


@Component({
  selector: 'bc-goods-list-item',
  template: `
    <span>{{good.name}}</span>
  `,
  styles: []
})
export class GoodsListItemComponent {
  @Input() good: Good;
}
