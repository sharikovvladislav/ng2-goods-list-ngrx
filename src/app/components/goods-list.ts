import { Component, Input } from '@angular/core';

import { Good } from '../models/good';


@Component({
  selector: 'bc-goods-list',
  template: `
    <bc-goods-list-item *ngFor="let good of goods" [good]="good"></bc-goods-list-item>
  `,
  styles: []
})
export class GoodsListComponent {
  @Input() goods: Good[];
}
