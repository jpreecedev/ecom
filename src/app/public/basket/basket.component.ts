import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-basket',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  constructor(titleService: Title) {
    titleService.setTitle('Basket');
  }
}
