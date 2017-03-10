import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Basket, AppState } from '../../app.interfaces';
import { BasketActions } from '../../store';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  basket$: Observable<Basket>;

  constructor(public store: Store<AppState>, titleService: Title) {
    this.basket$ = store.select('basket');
    titleService.setTitle('Basket');
  }

  removeFromBasket() {
    this.store.dispatch({
      type: BasketActions.remove,
      payload: { id: 'ABC123' }
    })
  }
}
