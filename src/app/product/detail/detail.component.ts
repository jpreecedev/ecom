import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductDetail } from '../../app.interfaces';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public productDetail: ProductDetail;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { productDetail: ProductDetail }) => {
      if (!data.productDetail) {
        this.router.navigate(['/']);
        return;
      }
      this.productDetail = data.productDetail;
    });
  }

}
