import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recent-purchases',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './recent-purchases.component.html',
  styleUrls: ['./recent-purchases.component.scss']
})
export class RecentPurchasesComponent {
  constructor(titleService: Title) {
    titleService.setTitle('Recent Purchases');
  }
}
