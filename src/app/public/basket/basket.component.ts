import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import { Basket, BasketItem, AppState } from '../../app.interfaces';
import { BasketActions } from '../../store';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnDestroy {

  basket: Basket;
  private subscription: Subscription;

  constructor(public store: Store<AppState>, titleService: Title) {
    this.subscription = store.select('basket')
      .subscribe((basket: Basket) => {
        this.basket = basket;
      });
    titleService.setTitle('Basket');
  }

  removeFromBasket(basketItem: BasketItem) {
    this.store.dispatch({
      type: BasketActions.remove,
      payload: { id: basketItem.id }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
