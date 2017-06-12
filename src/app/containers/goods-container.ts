import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as layout from '../actions/layout';

import { Good } from '../models/good';

@Component({
  selector: 'bc-goods-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-goods-list
      [goods]="goods"
      (select)="onListSelect(good)"
    ></bc-goods-list>
    <bc-goods-detail
      [good]="good"
      (save)="onSave(good)"
    ></bc-goods-detail>
  `
})
export class GoodsContainerComponent {
  goods: Good[];
  good: Good = {id: 1, name: '1'};

  constructor() {
    this.goods = [
      {id: 1, name: '1'},
      {id: 2, name: '2'},
      {id: 3, name: '3'},
    ];
  }

  onSave(good: Good) {
    console.log('Item saved: ', good);
  }

  onListSelect(good: Good) {
    console.log('Item selected: ', good);
  }
}
