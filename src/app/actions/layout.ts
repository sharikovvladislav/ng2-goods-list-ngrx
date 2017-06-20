import { Action } from '@ngrx/store';

export const OPEN_SIDENAV =   '[Layout] Open Sidenav';
export const CLOSE_SIDENAV =  '[Layout] Close Sidenav';
export const SHOW_LOADER =  '[Layout] Show loader';
export const HIDE_LOADER =  '[Layout] Hide loader';


export class OpenSidenavAction implements Action {
  readonly type = OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  readonly type = CLOSE_SIDENAV;
}

export class ShowLoaderAction implements Action {
  readonly type = SHOW_LOADER;
}

export class HideLoaderAction implements Action {
  readonly type = HIDE_LOADER;
}


export type Actions
  = OpenSidenavAction
  | CloseSidenavAction
  | HideLoaderAction
  | ShowLoaderAction;
