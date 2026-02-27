import type { SearchParams, SearchResponse, ImageConvertParams, ImageConvertResponse } from '../types/api';

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

export async function searchByImageUrl(params: SearchParams): Promise<SearchResponse> {
  const queryParams = new URLSearchParams();

  queryParams.append('img_url', params.img_url);
  queryParams.append('apiToken', params.apiToken);

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

  const response = await fetch(`${API_BASE_URL}/1688/search/image?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
