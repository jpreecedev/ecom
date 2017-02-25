import { Component, OnInit } from '@angular/core';
import * as Flickity from 'flickity';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

    ngOnInit() {
        setTimeout(() => {
            new Flickity('.carousel', {
                wrapAround: true,
                autoPlay: 5000,
                pageDots: false,
                prevNextButtons: false
            });
        });
    }

}
