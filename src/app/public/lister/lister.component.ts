import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ProductOverview, ProductCategory } from '../../app.interfaces';

interface ListerData {
  products: ProductOverview[];
  category: ProductCategory;
}

@Component({
  encapsulation: ViewEncapsulation.None,
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.scss']
})
export class ListerComponent implements OnInit {

  products: ProductOverview[];
  category: ProductCategory;

  constructor(private router: Router, private route: ActivatedRoute, titleService: Title) {
    titleService.setTitle('Product Lister');
  }

  ngOnInit() {
    this.route.data.subscribe((data: { routeData: ListerData }) => {
      if (!data.routeData) {
        this.router.navigate(['/']);
        return;
      }
      this.products = data.routeData.products;
      this.category = data.routeData.category;
    });
  }
}
