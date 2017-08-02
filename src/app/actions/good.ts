import { Action } from '@ngrx/store';
import { Good } from '../models/good';

export const LOAD_COLLECTION          = '[Good] Load collection';
export const LOAD_COLLECTION_START    = '[Good] Load collection start';
export const LOAD_COLLECTION_SUCCESS  = '[Good] Load collection complete';
export const LOAD_COLLECTION_FAIL     = '[Good] Load collection fail';
export const SAVE_GOOD                = '[Good] Save good';
export const SAVE_GOOD_START          = '[Good] Save good start';
export const SAVE_GOOD_SUCCESS        = '[Good] Save good complete';
export const SAVE_GOOD_FAIL           = '[Good] Save good fail';
export const SELECT_GOOD              = '[Good] Select';
export const CREATE_GOOD              = '[Good] Create good';
export const CREATE_GOOD_START        = '[Good] Create good start';
export const CREATE_GOOD_SUCCESS      = '[Good] Create good success';
export const CREATE_GOOD_FAIL         = '[Good] Create good fail';
export const OPEN_CREATE_FORM         = '[Good] Open create form';
export const CLOSE_CREATE_FORM         = '[Good] Close create form';


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class LoadCollectionAction implements Action {
  readonly type = LOAD_COLLECTION;
}

export class LoadCollectionSuccessAction implements Action {
  readonly type = LOAD_COLLECTION_SUCCESS;

  constructor(public payload: Good[]) { }
}

export class LoadCollectionStartAction implements Action {
  readonly type = LOAD_COLLECTION_START;
}

export class LoadCollectionFailAction implements Action {
  readonly type = LOAD_COLLECTION_FAIL;

  constructor(public payload: any) { }
}

export class SaveGoodAction implements Action {
  readonly type = SAVE_GOOD;

  constructor(public payload: Good) { }
}

export class SaveGoodStartAction implements Action {
  readonly type = SAVE_GOOD_START;

  constructor(public payload: Good) { }
}

export class SaveGoodSuccessAction implements Action {
  readonly type = SAVE_GOOD_SUCCESS;

  constructor(public payload: Good) { }
}

export class SaveGoodFailAction implements Action {
  readonly type = SAVE_GOOD_FAIL;

  constructor(public payload: any) { }
}

export class SelectGoodAction implements Action {
  readonly type = SELECT_GOOD;

  constructor(public payload: Good) { }
}

export class CreateGoodAction implements Action {
  readonly type = CREATE_GOOD;

  constructor(public payload: Good) { }
}

export class CreateGoodStartAction implements Action {
  readonly type = CREATE_GOOD_START;

  constructor(public payload: Good) { }
}

export class CreateGoodFailAction implements Action {
  readonly type = CREATE_GOOD_FAIL;

  constructor(public payload: Good) { }
}

export class CreateGoodSuccessAction implements Action {
  readonly type = CREATE_GOOD_SUCCESS;

  constructor(public payload: Good) { }
}

export class OpenCreateForm implements Action {
  readonly type = OPEN_CREATE_FORM;

  constructor() { }
}

export class CloseCreateForm implements Action {
  readonly type = CLOSE_CREATE_FORM;

  constructor() { }
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadCollectionAction
  | LoadCollectionSuccessAction
  | LoadCollectionStartAction
  | LoadCollectionFailAction
  | SaveGoodAction
  | SaveGoodStartAction
  | SaveGoodSuccessAction
  | SaveGoodFailAction
  | SelectGoodAction
  | CreateGoodAction
  | CreateGoodStartAction
  | CreateGoodSuccessAction
  | CreateGoodFailAction
  | OpenCreateForm
  | CloseCreateForm;
// export type Actions
//   = SearchAction
//   | SearchCompleteAction
//   | LoadAction
//   | SelectAction;
