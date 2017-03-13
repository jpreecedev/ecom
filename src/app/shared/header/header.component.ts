import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import { AppState, Basket } from '../../app.interfaces';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  basket: Basket;
  private subscription: Subscription;

  constructor(public store: Store<AppState>) {
    this.subscription = store.select('basket')
      .subscribe((basket: Basket) => {
        this.basket = basket;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
