import { Component, OnInit } from '@angular/core';
import * as Flickity from 'flickity';

@Component({
    selector: 'app-single-product-gallery',
    templateUrl: './single-product-gallery.component.html',
    styleUrls: ['./single-product-gallery.component.scss']
})
export class SingleProductGalleryComponent implements OnInit {

    ngOnInit() {
        setTimeout(() => {
            new Flickity(document.querySelector('.carousel-main'), {
                wrapAround: true,
                pageDots: false,
                prevNextButtons: false
            });
            new Flickity(document.querySelector('.carousel-nav'), {
                wrapAround: true,
                pageDots: false,
                prevNextButtons: false,
                asNavFor: '.carousel-main'
            });
        });
    }

}
