import { Component, Input, ViewEncapsulation } from '@angular/core';

interface ProductReturns {
  policy: string;
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})
export class ReturnsComponent {

  @Input() returns: ProductReturns;

}
