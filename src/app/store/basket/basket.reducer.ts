import { Action, ActionReducer } from '@ngrx/store';
import { BASKET_ADD, BASKET_REMOVE } from './basket.actions';
import { Basket, BasketItem } from '../../app.interfaces';

const increment = (state: Basket = { items: [] }, index: number) => {
  return Object.assign({}, state, { items: [...state.items] });
};

export const BasketReducer: ActionReducer<Basket> = (state: Basket = { items: [] }, action: Action): Basket => {

  switch (action.type) {

    case BASKET_ADD:
      let index: number = state.items.findIndex((item: BasketItem) => action.payload.id === item.id);
      if (index > -1) {
        return increment(state, index);
      }
      return Object.assign({}, state, { items: [...state.items, action.payload] });

    case BASKET_REMOVE:
      return Object.assign({}, state, { items: state.items.filter((item: BasketItem) => action.payload.id !== item.id) });

    default:
      return state;
  }

};
