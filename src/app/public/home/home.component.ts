import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ProductOverview } from '../../app.interfaces';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductOverview[];

  constructor(private router: Router, private route: ActivatedRoute, titleService: Title) {
    titleService.setTitle('Home');
  }

  ngOnInit() {
    this.route.data.subscribe((data: { products: ProductOverview[] }) => {
      if (!data.products) {
        this.router.navigate(['/']);
        return;
      }
      this.products = data.products;
    });
  }

}
