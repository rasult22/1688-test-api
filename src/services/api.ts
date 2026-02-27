import type {
  SearchParams,
  SearchResponse,
  ImageConvertParams,
  ImageConvertResponse,
  KeywordSearchParams,
  KeywordSearchResponse,
  ItemDetailParams,
  ItemDetailResponse,
  ShopInfoParams,
  ShopInfoResponse,
  ShopItemsParams,
  ShopItemsResponse,
  ItemRatingParams,
  ItemRatingResponse,
  SalesStatisticsParams,
  SalesStatisticsResponse,
  CategoryInfoParams,
  CategoryInfoResponse,
  CategoryItemsParams,
  CategoryItemsResponse,
  FactorySearchParams,
  FactorySearchResponse,
  ShippingCostParams,
  ShippingCostResponse
} from '../types/api';

const API_BASE_URL = '/api';

const ALIBABA_DOMAINS = [
  'alicdn.com',
  'alibaba.com',
  '1688.com',
  'aliexpress.com',
  'taobao.com',
  'tmall.com',
  'aliyuncs.com',
];

export function isAlibabaUrl(url: string): boolean {
  try {
    const hostname = new URL(url).hostname;
    return ALIBABA_DOMAINS.some(domain => hostname.endsWith(domain));
  } catch {
    return false;
  }
}

export async function convertImageUrl(params: ImageConvertParams): Promise<ImageConvertResponse> {
  const response = await fetch(`${API_BASE_URL}/1688/tools/image/convert_url?apiToken=${encodeURIComponent(params.apiToken)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url: params.url, search_api_endpoint: '/search/image' }),
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Image Search (Multilingual - default Russian)
export async function searchByImageUrl(params: SearchParams): Promise<SearchResponse> {
  const queryParams = new URLSearchParams();

  queryParams.append('img_url', params.img_url);
  queryParams.append('apiToken', params.apiToken);
  queryParams.append('language', params.language || 'ru'); // Default to Russian

  if (params.page) queryParams.append('page', String(params.page));
  if (params.page_size) queryParams.append('page_size', String(params.page_size));
  if (params.sort) queryParams.append('sort', params.sort);
  if (params.price_start) queryParams.append('price_start', params.price_start);
  if (params.price_end) queryParams.append('price_end', params.price_end);
  if (params.support_dropshipping !== undefined) queryParams.append('support_dropshipping', String(params.support_dropshipping));
  if (params.is_factory !== undefined) queryParams.append('is_factory', String(params.is_factory));
  if (params.verified_supplier !== undefined) queryParams.append('verified_supplier', String(params.verified_supplier));
  if (params.free_shipping !== undefined) queryParams.append('free_shipping', String(params.free_shipping));
  if (params.new_arrival !== undefined) queryParams.append('new_arrival', String(params.new_arrival));

  // Use multilingual API endpoint
  const response = await fetch(`${API_BASE_URL}/1688/global/search/image?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// 1. Keyword Search (Multilingual - default Russian)
export async function searchByKeyword(params: KeywordSearchParams): Promise<KeywordSearchResponse> {
  const queryParams = new URLSearchParams();

  queryParams.append('keyword', params.keyword);
  queryParams.append('apiToken', params.apiToken);
  queryParams.append('language', params.language || 'ru'); // Default to Russian

  if (params.page) queryParams.append('page', String(params.page));
  if (params.page_size) queryParams.append('page_size', String(params.page_size));
  if (params.sort) queryParams.append('sort', params.sort);
  if (params.moq) queryParams.append('moq', String(params.moq));
  if (params.price_start) queryParams.append('price_start', params.price_start);
  if (params.price_end) queryParams.append('price_end', params.price_end);
  if (params.new_arrival !== undefined) queryParams.append('new_arrival', String(params.new_arrival));
  if (params.support_dropshipping !== undefined) queryParams.append('support_dropshipping', String(params.support_dropshipping));
  if (params.free_shipping !== undefined) queryParams.append('free_shipping', String(params.free_shipping));
  if (params.is_super_factory !== undefined) queryParams.append('is_super_factory', String(params.is_super_factory));

  // Use multilingual API endpoint
  const response = await fetch(`${API_BASE_URL}/1688/global/search/items?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// 2. Item Detail (Multilingual - default Russian)
export async function getItemDetail(params: ItemDetailParams): Promise<ItemDetailResponse> {
  const queryParams = new URLSearchParams();

  queryParams.append('item_id', String(params.item_id));
  queryParams.append('apiToken', params.apiToken);
  queryParams.append('language', params.language || 'ru'); // Default to Russian

  if (params.scene) queryParams.append('scene', params.scene);
  if (params.optimize_title !== undefined) queryParams.append('optimize_title', String(params.optimize_title));

  const response = await fetch(`${API_BASE_URL}/1688/item_detail?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// 3. Shop Info
export async function getShopInfo(params: ShopInfoParams): Promise<ShopInfoResponse> {
  const queryParams = new URLSearchParams();

  queryParams.append('apiToken', params.apiToken);

  if (params.shop_url) queryParams.append('shop_url', params.shop_url);
  if (params.member_id) queryParams.append('member_id', params.member_id);

  const response = await fetch(`${API_BASE_URL}/1688/shop/shop_info?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// 4. Shop Items
export async function getShopItems(params: ShopItemsParams): Promise<ShopItemsResponse> {
  const queryParams = new URLSearchParams();

  queryParams.append('apiToken', params.apiToken);

  if (params.shop_url) queryParams.append('shop_url', params.shop_url);
  if (params.member_id) queryParams.append('member_id', params.member_id);
  if (params.page) queryParams.append('page', String(params.page));

  const response = await fetch(`${API_BASE_URL}/1688/shop/items?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// 5. Item Rating/Reviews
export async function getItemRating(params: ItemRatingParams): Promise<ItemRatingResponse> {
  const queryParams = new URLSearchParams();

  queryParams.append('item_id', String(params.item_id));
  queryParams.append('apiToken', params.apiToken);

  if (params.page) queryParams.append('page', String(params.page));
  if (params.sort_type) queryParams.append('sort_type', params.sort_type);

  const response = await fetch(`${API_BASE_URL}/1688/item/rating?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// 6. Sales Statistics
export async function getSalesStatistics(params: SalesStatisticsParams): Promise<SalesStatisticsResponse> {
  const queryParams = new URLSearchParams();

  queryParams.append('item_id', String(params.item_id));
  queryParams.append('apiToken', params.apiToken);

  if (params.spec_id) queryParams.append('spec_id', params.spec_id);

  const response = await fetch(`${API_BASE_URL}/1688/item/statistics/sales?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// 7. Category Info
export async function getCategoryInfo(params: CategoryInfoParams): Promise<CategoryInfoResponse> {
  const queryParams = new URLSearchParams();

  queryParams.append('apiToken', params.apiToken);

  if (params.cat_id) queryParams.append('cat_id', String(params.cat_id));

  const response = await fetch(`${API_BASE_URL}/1688/category/info?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// 8. Category Items
export async function getCategoryItems(params: CategoryItemsParams): Promise<CategoryItemsResponse> {
  const queryParams = new URLSearchParams();

  queryParams.append('cat_id', String(params.cat_id));
  queryParams.append('apiToken', params.apiToken);

  if (params.page) queryParams.append('page', String(params.page));
  if (params.super_factory !== undefined) queryParams.append('super_factory', String(params.super_factory));
  if (params.support_dropshipping !== undefined) queryParams.append('support_dropshipping', String(params.support_dropshipping));
  if (params.free_shipping !== undefined) queryParams.append('free_shipping', String(params.free_shipping));

  const response = await fetch(`${API_BASE_URL}/1688/category/items?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// 9. Factory Search
export async function searchFactories(params: FactorySearchParams): Promise<FactorySearchResponse> {
  const queryParams = new URLSearchParams();

  queryParams.append('keywords', params.keywords);
  queryParams.append('apiToken', params.apiToken);

  if (params.page) queryParams.append('page', String(params.page));
  if (params.page_size) queryParams.append('page_size', String(params.page_size));
  if (params.sort) queryParams.append('sort', params.sort);

  const response = await fetch(`${API_BASE_URL}/1688/search/factories?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// 10. Shipping Cost
export async function getShippingCost(params: ShippingCostParams): Promise<ShippingCostResponse> {
  const queryParams = new URLSearchParams();

  queryParams.append('item_id', String(params.item_id));
  queryParams.append('province', params.province);
  queryParams.append('apiToken', params.apiToken);

  if (params.total_quantity) queryParams.append('total_quantity', String(params.total_quantity));
  if (params.total_weight) queryParams.append('total_weight', String(params.total_weight));

  const response = await fetch(`${API_BASE_URL}/1688/item/shipping?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
