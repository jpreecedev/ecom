import { Component, Input, ViewEncapsulation } from '@angular/core';

interface ProductRatings {
  title: string;
  message: string;
  reviewerName: string;
  date: string;
  score: number;
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent {

  @Input() ratings: ProductRatings;

}
