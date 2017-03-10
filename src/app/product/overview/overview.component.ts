import { Component, OnInit, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, Basket } from '../../store';
import { BASKET_ADD } from '../../store/basket/basket.actions';

interface ProductOption {
  value: string;
  description: string;
}

interface ProductOptions {
  title: string;
  options: ProductOption[];
}

interface ProductCategory {
  title: string;
  url: string;
}

interface ProductOverview {
  title: string;
  price: string;
  sku: string;
  description: string;
  options: ProductOptions;
  categories: ProductCategory[];
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  @Input() overview: ProductOverview;
  basket$: Observable<Basket>;

  constructor(public store: Store<AppState>) {
    this.basket$ = store.select('basket');
  }

  addToBasket() {
    this.store.dispatch({
      type: BASKET_ADD,
      payload: this.overview
    });
  }

}
