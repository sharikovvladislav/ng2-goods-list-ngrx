import { OnInit } from '@angular/core';

import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as goodsActions from '../actions/good';

import { Good } from '../models/good';

@Component({
  selector: 'bc-goods-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-goods-list
      [goods]="goods"
      [selectedGood]="selectedGood"
      (select)="onListSelect($event)"
    ></bc-goods-list>
    <button (click)="onAddClick()">Add item</button>
    <bc-good-edit
      *ngIf="!isCreateFormOpened"
      [selectedGood]="selectedGood"
    ></bc-good-edit>
    <bc-good-create
      *ngIf="isCreateFormOpened"
    ></bc-good-create>
  `
})
export class GoodsContainerComponent implements OnInit {
  goods: Good[];
  selectedGood: Good;
  goods$: Observable<Good[]>;
  selectedGood$: Observable<Good>;
  isCreateFormOpened: boolean;
  isCreateFormOpened$: Observable<boolean>;

  ngOnInit() {
    this.store.dispatch(new goodsActions.LoadCollectionAction());

    this.goods$
      .subscribe(newGoods => {
        this.goods = [...newGoods];
        this.changeDetectorRef.markForCheck();
      });
    this.selectedGood$
      .subscribe(newSelectedGood => {
        this.selectedGood = { ...newSelectedGood };
        this.changeDetectorRef.markForCheck();
      });
    this.isCreateFormOpened$
      .subscribe(isOpened => this.isCreateFormOpened = isOpened);
  }

  constructor(private store: Store<fromRoot.State>, private changeDetectorRef: ChangeDetectorRef) {
    this.goods$ = store.select(fromRoot.getGoodEntities);
    this.selectedGood$ = store.select(fromRoot.getGoodSelectedEntity);
    this.isCreateFormOpened$ = store.select(fromRoot.getIsCreateFormOpened);
  }

  onSave(good: Good) {
    console.log('Item saved: ', good);
    this.store.dispatch(new goodsActions.SaveGoodAction(good));
  }

  onListSelect(good: Good) {
    console.log('Item selected: ', good);
    this.store.dispatch(new goodsActions.SelectGoodAction(good));
  }

  onAddClick() {
    this.store.dispatch(new goodsActions.OpenCreateForm());
  }
}
