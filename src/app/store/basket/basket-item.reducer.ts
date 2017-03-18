import { Action, ActionReducer } from '@ngrx/store';
import { BASKET_INCREMENT_QUANTITY, BASKET_DECREMENT_QUANTITY, BASKET_SET_QUANTITY } from './basket.actions';
import { BasketItem } from '../../app.interfaces';

export const BasketItemReducer: ActionReducer<BasketItem> = (state: BasketItem, action: Action): BasketItem => {
    debugger;

  switch (action.type) {

    case BASKET_SET_QUANTITY:
      return Object.assign({}, state, { quantity: action.payload });

    case BASKET_INCREMENT_QUANTITY:
      return Object.assign({}, state, { quantity: state.quantity + 1 });

    case BASKET_DECREMENT_QUANTITY:
      return Object.assign({}, state, { quantity: state.quantity - 1 });

    default:
      return state;
  }

};
