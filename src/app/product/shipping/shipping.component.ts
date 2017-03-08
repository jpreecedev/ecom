import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

interface ProductGiftWrap {
  available: boolean;
  cost: number;
}

interface ProductShippingMethods {
  name: string;
  imageSrc: string;
}

interface ProductShipping {
  description: string;
  giftwrap: ProductGiftWrap;
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent {

  @Input() shipping: ProductShipping;

}
