import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ProductReturns } from '../../app.interfaces';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})
export class ReturnsComponent {

  @Input() returns: ProductReturns;

}
