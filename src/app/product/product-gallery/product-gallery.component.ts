import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

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
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent {

  @Input() galleryData: ProductGallery;

}
