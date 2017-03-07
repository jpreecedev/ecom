import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  @Input() overview: ProductOverview;

  constructor() {
  }

}
