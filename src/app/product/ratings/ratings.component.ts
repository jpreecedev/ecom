import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ProductRatings } from '../../app.interfaces';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent {

  @Input() ratings: ProductRatings;

}
