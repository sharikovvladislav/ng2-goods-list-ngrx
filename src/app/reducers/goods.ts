import { Good } from '../models/good';
import * as good from '../actions/good';


export interface State {
  entities: Good[];
}

export const initialState: State = {
  entities: [],
};

export function reducer(state = initialState, action: good.Actions): State {
  switch (action.type) {
    case good.LOAD_COLLECTION_SUCCESS: {
      const goods = action.payload;

      return { // new state
        entities: goods
      };
    }

    case good.SAVE_GOOD_SUCCESS: {
      const updatedGood: Good = action.payload;
      const currentGoods = state.entities;
      const newGoods = currentGoods.map(good => good.id === updatedGood.id ? updatedGood : good);

      return { // new state
        entities: newGoods
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;
