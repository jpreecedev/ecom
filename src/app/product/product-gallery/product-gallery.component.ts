import { Component, AfterViewInit, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';

interface ProductGallery extends ProductGalleryInfo {
  items: ProductGalleryItem[];
}

interface ProductGalleryItem extends ProductGalleryInfo { }

interface ProductGalleryInfo {
  imageUrlRegular: String;
  imageUrlLarge: String;
  title: String;
  alt: String;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent implements AfterViewInit {

  @Input() galleryData: ProductGallery;

  ngAfterViewInit() {
    $('.product-images .primary img').elevateZoom({
      zoomType: 'inner',
      cursor: 'crosshair',
      easing: true,
      zoomWindowFadeIn: 300,
      zoomWindowFadeOut: 300,
      gallery: 'gallery',
      galleryActiveClass: 'active'
    });
  }
}
