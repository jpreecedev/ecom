import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-checkout-start',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  constructor(titleService: Title) {
    titleService.setTitle('Checkout');
  }
}
