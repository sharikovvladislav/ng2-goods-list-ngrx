import { OnInit, Input } from '@angular/core';

import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as goodsActions from '../actions/good';

import { Good } from '../models/good';

@Component({
  selector: 'bc-good-edit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-goods-detail
      [good]="good"
      (save)="onEdit($event)"
    ></bc-goods-detail>
  `
})
export class GoodEditContainerComponent {
  good: Good;
  @Input() set selectedGood (selectedGood: Good) {
    this.good = { ...selectedGood };
  };

  constructor(private store: Store<fromRoot.State>, private changeDetectorRef: ChangeDetectorRef) {
  }

  onEdit(good: Good) {
    console.log('Item edited: ', good);
    this.store.dispatch(new goodsActions.SaveGoodAction(good));
  }
}
