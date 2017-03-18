import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { combineReducers, ActionReducer, Action, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { compose } from '@ngrx/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import { AppState } from '../app.interfaces';

import { BASKET_ADD, BASKET_REMOVE, BASKET_DECREMENT_QUANTITY, BASKET_INCREMENT_QUANTITY, BASKET_SET_QUANTITY } from './basket/basket.actions';
import { BasketReducer } from './basket/basket.reducer';
import { BasketItemReducer } from './basket/basket-item.reducer';

export const BasketActions = {
  add: BASKET_ADD,
  remove: BASKET_REMOVE,
  setQuantity: BASKET_SET_QUANTITY,
  increment: BASKET_INCREMENT_QUANTITY,
  decrement: BASKET_DECREMENT_QUANTITY
};

const reducers = {
  basket: BasketReducer,
  basketItem: BasketItemReducer
};

const productionReducer: ActionReducer<AppState> = combineReducers(reducers);
const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: AppState, action: Action) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

@NgModule()
export class DummyModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonModule
    };
  }
}

export const store: ModuleWithProviders = StoreModule.provideStore(reducer);
export const instrumentation: ModuleWithProviders = (!environment.production) ? StoreDevtoolsModule.instrumentOnlyWithExtension() : DummyModule.forRoot();

export const effects: ModuleWithProviders[] = [];
