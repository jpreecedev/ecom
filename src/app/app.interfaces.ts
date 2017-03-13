export interface ProductDetail {
  overview: ProductOverview;
  info: ProductInfo;
  gallery: ProductGallery;
  shipping: ProductShipping;
  returns: ProductReturns;
  ratings: ProductRatings;
}

export interface ProductInfo {
  markup: string;
}

export interface ProductOption {
  value: string;
  description: string;
}

export interface ProductOptions {
  title: string;
  options: ProductOption[];
}

export interface ProductCategory {
  title: string;
  url: string;
  subCategories: ProductCategory[];
}

export interface ProductOverview {
  title: string;
  price: string;
  sku: string;
  description: string;
  url: string;
  options: ProductOptions;
  category: ProductCategory;
}

export interface ProductGallery extends ProductGalleryInfo {
  items: ProductGalleryItem[];
}

export interface ProductGalleryItem extends ProductGalleryInfo { }

export interface ProductGalleryInfo {
  imageUrlRegular: String;
  imageUrlLarge: String;
  title: String;
  alt: String;
}

export interface ProductRatings {
  title: string;
  message: string;
  reviewerName: string;
  date: string;
  score: number;
}

export interface ProductReturns {
  policy: string;
}


export interface ProductGiftWrap {
  available: boolean;
  cost: number;
}

export interface ProductShippingMethods {
  name: string;
  imageSrc: string;
}

export interface ProductShipping {
  description: string;
  giftwrap: ProductGiftWrap;
}

export interface IJwtBody {
  aud: string;
  exp: number;
  iss: string;
  nbf: number;
  role: string | string[];
  sub: string;
  unique_name: string;
}

export interface IJwt {
  access_token: string;
  expires_in: number;
}

export interface AppState {
  basket: Basket;
}

export interface MegaMenu {
  shop: ProductCategory[];
}

export interface BasketItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  size: string;
  color: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  total: number;
}

export interface Basket {
  items: BasketItem[];
}
