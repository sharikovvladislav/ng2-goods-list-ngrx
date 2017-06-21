import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import {Injectable} from '@angular/core';
import {Effect, Actions, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import {of} from 'rxjs/observable/of';

import {GoodsService} from '../services/goods';
import * as good from '../actions/good';
import * as layout from '../actions/layout';


/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 * The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * Documentation on `toPayload` can be found here:
 * https://github.com/ngrx/effects/blob/master/docs/api.md#topayload
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class GoodEffects {

  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(good.LOAD_COLLECTION)
    .map(toPayload)
    .mergeMap((result: any) => [
      new layout.ShowLoaderAction(),
      new good.LoadCollectionStartAction()
    ]);

  @Effect()
  loadCollectionStart$: Observable<Action> = this.actions$
    .ofType(good.LOAD_COLLECTION_START)
    .map(toPayload)
    .switchMap(() => {
      return this.goodsService.getAllGoods()
        .mergeMap(goods => [
          new good.LoadCollectionSuccessAction(goods),
          new layout.HideLoaderAction()
        ])
        .catch(() => of(new good.LoadCollectionFailAction([])));
    });

  @Effect()
  saveGoodStart$: Observable<Action> = this.actions$
    .ofType(good.SAVE_GOOD_START)
    .map(toPayload)
    .switchMap(goodData => {
      return this.goodsService.updateGood(goodData.id, goodData)
        .mergeMap(() => [
          new good.SaveGoodSuccessAction(goodData),
          new layout.HideLoaderAction()
        ])
        .catch(() => of(new good.SaveGoodFailAction({})));
    });


  @Effect()
  saveGood$: Observable<Action> = this.actions$
    .ofType(good.SAVE_GOOD)
    .map(toPayload)
    .mergeMap(goodData => [
      new layout.ShowLoaderAction(),
      new good.SaveGoodStartAction(goodData)
    ]);


  @Effect()
  createGood$: Observable<Action> = this.actions$
    .ofType(good.CREATE_GOOD)
    .map(toPayload)
    .switchMap((goodData: any) => [
      new layout.ShowLoaderAction(),
      new good.CreateGoodStartAction(goodData)
    ]);

  @Effect()
  createGoodStart$: Observable<Action> = this.actions$
    .ofType(good.CREATE_GOOD_START)
    .map(toPayload)
    .switchMap(goodData => {
      return this.goodsService.createGood(goodData)
        .mergeMap((response: any) => [
          new good.LoadCollectionAction(),
          new good.CreateGoodSuccessAction(response.data),
          new layout.HideLoaderAction()
        ])
        .catch(() => of(new good.CreateGoodFailAction(null)));
    });

  constructor(private actions$: Actions, private goodsService: GoodsService) { }
}
