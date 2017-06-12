import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Good } from '../models/good';


@Component({
  selector: 'bc-goods-list',
  template: `
    <bc-goods-list-item *ngFor="let good of goods"
                        [good]="good"
                        (select)="select.emit(good)"
    ></bc-goods-list-item>
  `,
  styles: []
})
export class GoodsListComponent {
  @Input() goods: Good[];
  @Output() select = new EventEmitter<Good>();
}
