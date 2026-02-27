export interface SearchParams {
  img_url: string;
  apiToken: string;
  page?: number;
  page_size?: number;
  sort?: 'default' | 'sales' | 'price_up' | 'price_down';
  price_start?: string;
  price_end?: string;
  support_dropshipping?: boolean;
  is_factory?: boolean;
  verified_supplier?: boolean;
  free_shipping?: boolean;
  new_arrival?: boolean;
}

export interface ShopInfo {
  login_id: string;
  member_id: string;
  company_name: string;
  shop_url: string;
  biz_type: string;
  is_factory: boolean;
  is_super_factory: boolean;
  location: string[];
  shop_years: number;
  factory_inspection: boolean;
  score_info: {
    composite_score: string;
  };
}

export interface ProductItem {
  item_id: number;
  title: string;
  img: string;
  price: string;
  price_info: {
    sale_price: string;
    origin_price: string;
  };
  moq: number;
  product_url: string;
  sale_info: {
    sale_quantity: string;
    sale_quantity_int: number;
    orders_count: number;
  };
  delivery_info: {
    area_from: string[];
  };
  item_repurchase_rate: string;
  shop_info: ShopInfo;
  is_ad: boolean;
}

export interface SearchResponse {
  code: number;
  msg: string;
  data: {
    items: ProductItem[];
    total_count: number;
    page: number;
    page_size: number;
    has_next_page: boolean;
  };
}

export interface ImageConvertParams {
  url: string;
  apiToken: string;
}

export interface ImageConvertResponse {
  code: number;
  msg: string;
  data: {
    image_url: string;
  };
}
