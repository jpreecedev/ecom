import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ProductDetail, ProductCategory } from '../../app.interfaces';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.scss']
})
export class FilterCategoryComponent {

  @Input() category: ProductCategory[];

}
