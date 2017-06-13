import { OnInit } from '@angular/core';

import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as goodsActions from '../actions/good';

import { Good } from '../models/good';

@Component({
  selector: 'bc-goods-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-goods-list
      [goods]="goods$ | async"
      (select)="onListSelect(good)"
    ></bc-goods-list>
    <bc-goods-detail
      [good]="good"
      (save)="onSave(good)"
    ></bc-goods-detail>
  `
})
export class GoodsContainerComponent implements OnInit {
  goods: Good[];
  good: Good = {id: 1, name: '1'};

  goods$: Observable<Good[]>;

  ngOnInit() {
    this.store.dispatch(new goodsActions.LoadCollectionAction());
  }

  constructor(private store: Store<fromRoot.State>) {
    this.goods = [
      {id: 1, name: '1'},
      {id: 2, name: '2'},
      {id: 3, name: '3'},
    ];
    this.goods$ = store.select(fromRoot.getGoodEntities);
  }

  onSave(good: Good) {
    console.log('Item saved: ', good);
    this.store.dispatch(new goodsActions.SaveGoodAction(good));
  }

  onListSelect(good: Good) {
    console.log('Item selected: ', good);
  }
}
