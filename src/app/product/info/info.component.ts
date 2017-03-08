import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../store';
import { BASKET_ADD } from '../../store/basket/basket.actions';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  @Input() markup: string;
  basket$: Observable<{}>;

  constructor(public store: Store<AppState>) {
    this.basket$ = store.select('basket');


        this.store.dispatch({
      type: BASKET_ADD,
      payload: 'Hello!'
    });



  }

}
