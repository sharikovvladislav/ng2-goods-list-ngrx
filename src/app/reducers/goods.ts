import { Good } from '../models/good';
import * as good from '../actions/good';


export interface State {
  entities: Good[];
  selectedEntity: Good;
  isCreateOpened: boolean;
}

export const initialState: State = {
  entities: [],
  selectedEntity: null,
  isCreateOpened: false
};

export function reducer(state = initialState, action: good.Actions): State {
  switch (action.type) {
    case good.LOAD_COLLECTION_SUCCESS: {
      const goods = action.payload;
      const selectedEntity = state.selectedEntity;

      return {
        entities: goods,
        selectedEntity: selectedEntity ? selectedEntity : goods[0],
        isCreateOpened: false
      };
    }

    case good.SELECT_GOOD: {
      const newSelected: Good = action.payload;

      return {
        ...state,
        selectedEntity: newSelected,
        isCreateOpened: false
      };
    }

    case good.SAVE_GOOD_SUCCESS: {
      const updatedGood: Good = action.payload;
      const currentGoods = state.entities;
      const newGoods = currentGoods.map(good => good.id === updatedGood.id ? updatedGood : good);

      return {
        entities: newGoods,
        selectedEntity: updatedGood,
        isCreateOpened: false
      };
    }

    case good.CREATE_GOOD_SUCCESS: {
      const newGood: Good = action.payload;
      const newGoods = [...state.entities, newGood];

      return {
        entities: newGoods,
        selectedEntity: newGood,
        isCreateOpened: false
      };
    }

    case good.OPEN_CREATE_FORM: {
      return {
        ...state,
        isCreateOpened: true
      };
    }

    case good.CLOSE_CREATE_FORM: {
      return {
        ...state,
        isCreateOpened: false
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
export const getSelectedEntity = (state: State) => state.selectedEntity;
export const getIsCreateFormOpened = (state: State) => state.isCreateOpened;
