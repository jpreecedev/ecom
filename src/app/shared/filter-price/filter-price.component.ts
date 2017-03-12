import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.scss']
})
export class FilterPriceComponent implements AfterViewInit {

  ngAfterViewInit() {
    let slider = $('#slider');
    if (slider.length > 0) {
      slider.slider({
        range: true,
        min: 0,
        max: slider.data('max'),
        values: [0, slider.data('max')],
        step: slider.data('step'),
        animate: 200,
        slide: function (event, ui) {
          $('#slider-label').find('strong').html(slider.data('currency') + ui.values[0] + ' &ndash; ' + slider.data('currency') + ui.values[1]);
        },
        change: function (event, ui) {
          let products = $('.product-list').find('li').filter(function () {
            return ($(this).data('price') >= ui.values[0]) && $(this).data('price') <= ui.values[1] ? true : false;
          });
          let $product_list = $('.product-list.isotope');
          $product_list.isotope({
            filter: products
          });
        }
      });
    }
  }

}
