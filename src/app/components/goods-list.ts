import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Good } from '../models/good';


@Component({
  selector: 'bc-goods-list',
  template: `
    <ul>
      <bc-goods-list-item *ngFor="let good of goods"
                          [good]="good"
                          [selected]="good.id === selectedGood.id"
                          (select)="select.emit($event)"
      ></bc-goods-list-item>
    </ul>
  `,
  styles: []
})
export class GoodsListComponent {
  @Input() goods: Good[];
  @Input() selectedGood: Good;
  @Output() select = new EventEmitter<Good>();
}
