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
    <section
      class="flex-container"
    >
      <section class="list flex-item">
        <h1>Список</h1>
        <button (click)="onAddClick()">Add item to list</button>
        <bc-goods-list
          [goods]="goods"
          [selectedGood]="selectedGood"
          (select)="onListSelect($event)"
        ></bc-goods-list>
      </section>
      <section class="form flex-item">
        <h1>Форма</h1>
        <bc-good-edit
          *ngIf="!isCreateFormOpened"
          [selectedGood]="selectedGood"
        ></bc-good-edit>
        <bc-good-create
          *ngIf="isCreateFormOpened"
        ></bc-good-create>
      </section>
    </section>
  `,
  styles: [
    `.flex-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }`,
    `.flex-item {
      margin: auto;
    }`,
    `section {
      
    }`
  ]
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
      .subscribe(newIsOpened => {
        this.isCreateFormOpened = newIsOpened;
        this.changeDetectorRef.markForCheck();
      });
  }

  constructor(private store: Store<fromRoot.State>, private changeDetectorRef: ChangeDetectorRef) {
    this.goods$ = store.select(fromRoot.getGoodEntities);
    this.selectedGood$ = store.select(fromRoot.getGoodSelectedEntity);
    this.isCreateFormOpened$ = store.select(fromRoot.getIsCreateFormOpened);
  }

  onListSelect(good: Good) {
    this.store.dispatch(new goodsActions.SelectGoodAction(good));
  }

  onAddClick() {
    this.store.dispatch(new goodsActions.OpenCreateForm());
  }
}
