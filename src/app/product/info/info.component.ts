import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  @Input() markup: string;

}
