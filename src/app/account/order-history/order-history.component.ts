import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-order-history',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent {

  constructor(titleService: Title) {
    titleService.setTitle('Order History');
  }

}
