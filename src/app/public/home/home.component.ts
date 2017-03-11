import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ProductDetail, ProductCategory, ProductOverview } from '../../app.interfaces';

export interface HomeData {
  products: ProductOverview[];
  categories: ProductCategory[];
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductOverview[];
  categories: ProductCategory[];

  constructor(private router: Router, private route: ActivatedRoute, titleService: Title) {
    titleService.setTitle('Home');
  }

  ngOnInit() {
    this.route.data.subscribe((data: { routeData: HomeData }) => {
      if (!data.routeData) {
        this.router.navigate(['/']);
        return;
      }
      this.products = data.routeData.products;
      this.categories = data.routeData.categories;
    });
  }

}
