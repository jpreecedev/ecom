import { Action, ActionReducer } from '@ngrx/store';
import { BASKET_ADD } from './basket.actions';

export interface BasketItem {

}

export interface Basket {
    items: BasketItem[];
}

export const BasketReducer: ActionReducer<Basket> = (state: Basket = { items: [] }, action: Action): Basket => {

    switch (action.type) {
        case BASKET_ADD:
            return Object.assign({}, state, { items: [...state.items, action.payload] });
        default:
            return state;
    }

};
