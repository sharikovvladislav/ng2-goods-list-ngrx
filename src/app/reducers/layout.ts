import * as layout from '../actions/layout';


export interface State {
  showSidenav: boolean;
  showLoader: boolean;
}

const initialState: State = {
  showSidenav: false,
  showLoader: false
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.CLOSE_SIDENAV:
      return {
        ...state,
        showSidenav: false
      };

    case layout.OPEN_SIDENAV:
      return {
        ...state,
        showSidenav: true
      };

    case layout.SHOW_LOADER:
      return {
        ...state,
        showLoader: true
      };

    case layout.HIDE_LOADER:
      return {
        ...state,
        showLoader: false
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
export const getShowLoader = (state: State) => state.showLoader;
