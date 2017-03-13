import { Component, OnInit, OnDestroy, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import { BASKET_ADD } from '../../store/basket/basket.actions';
import { AppState, Basket, ProductOverview } from '../../app.interfaces';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnDestroy {

  @Input() overview: ProductOverview;
  basket: Basket;

  private subscription: Subscription;

  constructor(public store: Store<AppState>) {
    this.subscription = store.select('basket')
      .subscribe((basket: Basket) => {
        this.basket = basket;
      });
  }

  addToBasket() {
    this.store.dispatch({
      type: BASKET_ADD,
      payload: this.overview
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
