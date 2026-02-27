// Language type for multilingual APIs
export type SupportedLanguage = 'en' | 'zh' | 'ru' | 'vi' | 'ja' | 'ko' | 'th' | 'pt' | 'es' | 'tr';

export interface SearchParams {
  img_url: string;
  apiToken: string;
  language?: SupportedLanguage; // Default: 'ru'
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
  login_id?: string;
  member_id?: string;
  company_name: string;
  shop_url?: string;
  biz_type?: string;
  is_factory?: boolean;
  is_super_factory?: boolean;
  is_powerful_seller?: boolean;
  location?: string[];
  shop_years?: number;
  factory_inspection?: boolean;
  score_info?: {
    composite_score: string;
  };
}

export interface ProductItem {
  item_id: number;
  title: string;
  title_origin?: string;
  img: string;
  price: string;
  price_info: {
    price?: string;
    sale_price: string;
    origin_price: string;
  };
  moq: number | string;
  quantity_begin?: number | string;
  product_url: string;
  sale_info: {
    sale_quantity?: string;
    sale_quantity_int?: number;
    sale_quantity_90days?: string;
    orders_count?: number;
  };
  delivery_info: {
    area_from: string[];
    free_shipping?: boolean;
    ship_in_48h?: boolean;
  };
  item_repurchase_rate?: string;
  low_refund_rate?: boolean;
  ship_in_48h?: boolean;
  one_piece_min_order?: boolean;
  shop_info: ShopInfo;
  is_ad?: boolean;
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

// 1. Keyword Search (Multilingual)
export interface KeywordSearchParams {
  keyword: string;
  apiToken: string;
  language?: SupportedLanguage; // Default: 'ru'
  page?: number;
  page_size?: number;
  sort?: 'default' | 'sales' | 'price_up' | 'price_down';
  moq?: number;
  price_start?: string;
  price_end?: string;
  new_arrival?: boolean;
  support_dropshipping?: boolean;
  free_shipping?: boolean;
  is_super_factory?: boolean;
}

export interface KeywordSearchResponse {
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

// 2. Item Detail (Multilingual)
export interface ItemDetailParams {
  item_id: number | string;
  apiToken: string;
  scene?: 'pc' | 'mobile';
  optimize_title?: boolean;
  language?: SupportedLanguage; // Default: 'ru'
}

export interface ItemDetailResponse {
  code: number;
  msg: string;
  data: {
    item_id: number;
    title: string;
    optimized_title?: string;
    images: string[];
    video_url?: string;
    price: string;
    price_info: {
      sale_price: string;
      origin_price: string;
      price_range?: string;
    };
    moq: number;
    stock: number;
    sku_info: Array<{
      sku_id: string;
      properties: Record<string, string>;
      price: string;
      stock: number;
      moq: number;
    }>;
    sale_info: {
      sale_quantity: string;
      sale_quantity_int: number;
      orders_count: number;
    };
    delivery_info: {
      area_from: string[];
      delivery_time?: string;
    };
    description: string;
    shop_info: ShopInfo;
    item_url: string;
  };
}

// 3. Shop Info
export interface ShopInfoParams {
  apiToken: string;
  shop_url?: string;
  member_id?: string;
}

export interface ShopInfoResponse {
  code: number;
  msg: string;
  data: ShopInfo;
}

// 4. Shop Items
export interface ShopItemsParams {
  apiToken: string;
  shop_url?: string;
  member_id?: string;
  page?: number;
}

export interface ShopItemsResponse {
  code: number;
  msg: string;
  data: {
    items: ProductItem[];
    total_count: number;
    page: number;
    has_next_page: boolean;
  };
}

// 5. Item Rating/Reviews
export interface ItemRatingParams {
  item_id: number | string;
  apiToken: string;
  page?: number;
  sort_type?: 'default' | 'time' | 'useful';
}

export interface ItemRatingResponse {
  code: number;
  msg: string;
  data: {
    reviews: Array<{
      review_id: string;
      buyer_name: string;
      content: string;
      rating: number;
      images?: string[];
      create_time: string;
      sku_info?: string;
    }>;
    total_count: number;
    page: number;
    has_next_page: boolean;
    rating_summary: {
      average_rating: number;
      total_reviews: number;
      rating_distribution: Record<string, number>;
    };
  };
}

// 6. Sales Statistics
export interface SalesStatisticsParams {
  item_id: number | string;
  apiToken: string;
  spec_id?: string;
}

export interface SalesStatisticsResponse {
  code: number;
  msg: string;
  data: {
    item_id: number;
    total_sales: number;
    monthly_sales: number;
    sales_trend: Array<{
      date: string;
      sales: number;
    }>;
  };
}

// 7. Category Info
export interface CategoryInfoParams {
  apiToken: string;
  cat_id?: number | string;
}

export interface Category {
  id: string;
  name: string;
  name_en?: string;
  level: number;
  has_children: boolean;
  parent_id?: string;
  image_url?: string;
  children?: Category[];
  path?: Array<{ id: string; name: string; name_en?: string }>;
}

export interface CategoryInfoResponse {
  code: number;
  msg: string;
  data: Category | Category[];
}

// 8. Category Items
export interface CategoryItemsParams {
  cat_id: number | string;
  apiToken: string;
  page?: number;
  super_factory?: boolean;
  support_dropshipping?: boolean;
  free_shipping?: boolean;
}

export interface CategoryItemsResponse {
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

// 9. Factory Search
export interface FactorySearchParams {
  keywords: string;
  apiToken: string;
  page?: number;
  page_size?: number;
  sort?: 'default' | 'repurchase_rate';
}

export interface Factory {
  member_id: string;
  login_id: string;
  company_name: string;
  shop_url: string;
  location: string[];
  shop_years: number;
  is_factory: boolean;
  is_super_factory: boolean;
  factory_inspection: boolean;
  main_products?: string[];
  service_tags?: string[];
  repurchase_rate?: string;
  response_rate?: string;
  score_info?: {
    composite_score: string;
  };
}

export interface FactorySearchResponse {
  code: number;
  msg: string;
  data: {
    items: Factory[];
    total_count: number;
    page: number;
    page_size: number;
    has_next_page: boolean;
  };
}

// Product Detail (extended for detail view)
export interface ProductDetailData {
  item_id: number;
  title: string;
  images: string[];
  video_url?: string;
  price: string;
  price_info: {
    sale_price: string;
    origin_price: string;
    price_range?: string;
  };
  moq: number;
  stock: number;
  sku_info: Array<{
    sku_id: string;
    properties: Record<string, string>;
    price: string;
    stock: number;
    moq: number;
  }>;
  sale_info: {
    sale_quantity: string;
    sale_quantity_int: number;
    orders_count: number;
  };
  delivery_info: {
    area_from: string[];
    delivery_time?: string;
  };
  description: string;
  shop_info: ShopInfo;
  item_url: string;
}

// Product Review
export interface ProductReview {
  review_id: string;
  buyer_name: string;
  content: string;
  rating: number;
  images?: string[];
  create_time: string;
  sku_info?: string;
}

// Sales Statistics Data
export interface SalesStatisticsData {
  item_id: number;
  total_sales: number;
  monthly_sales: number;
  total_orders?: number;
  average_order_value?: number;
  repurchase_rate?: string;
  sales_trend: Array<{
    date: string;
    sales: number;
  }>;
  top_skus?: Array<{
    sku_id: string;
    name: string;
    sales: number;
  }>;
}

// 10. Shipping Cost
export interface ShippingCostParams {
  item_id: number | string;
  province: string;
  apiToken: string;
  total_quantity?: number;
  total_weight?: number;
}

export interface ShippingCostResponse {
  code: number;
  msg: string;
  data: {
    shipping_cost: string;
    shipping_method: string;
    delivery_time?: string;
    free_shipping: boolean;
  };
}
