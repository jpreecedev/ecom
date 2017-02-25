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
                prevNextButtons: false,
                pageDots: false
            });
            new Flickity(document.querySelector('.carousel-nav'), {
                asNavFor: '.carousel-main',
                pageDots: false
            });
        });
    }

}
