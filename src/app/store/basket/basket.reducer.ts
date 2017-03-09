import { Action, ActionReducer } from '@ngrx/store';
import { BASKET_ADD } from './basket.actions';
import { Basket } from '../index';

export const BasketReducer: ActionReducer<Basket> = (state: Basket = { items: [] }, action: Action): Basket => {

    switch (action.type) {
        case BASKET_ADD:
            return Object.assign({}, state, { items: [...state.items, action.payload] });
        default:
            return state;
    }

};
