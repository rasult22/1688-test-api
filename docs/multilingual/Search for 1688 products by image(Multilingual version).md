# Search for 1688 Products by Image (Multilingual Version)

## API Overview

- Search for 1688 products by image
- Support multiple languages

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/global/search/image`
- **Method:** GET

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| img_url | string | Image URL. **Only images from Alibaba-affiliated platforms can be identified.** Non-Ali image needs to be converted using [Image URL conversion API](https://tmapi.top/docs/ali/tool-apis/image-url-convert) first, and then use the converted image URL to call this API. | **true** |
| page | integer | Page number. Default value: 1 | false |
| page_size | integer | Number of items per page. Default value: 20. Max: 20. | false |
| language | string | Optional values: `en`, `zh`, `ru`, `th`, `pt`, `es`, `tr`, `vi`, `ja`, `ko`. Default value: en | false |
| sort | string | Optional values: `default`, `sales`, `price_up`, `price_down`. Default value: default | false |
| support_dropshipping | boolean | Filter: Supports dropshipping | false |
| is_factory | boolean | Filter: Is factory | false |
| verified_supplier | boolean | Filter: Verified supplier | false |
| free_shipping | boolean | Filter: Free shipping | false |
| new_arrival | boolean | Filter: New product | false |

## Security Auth

> **Tip:** Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/global/search/image?apiToken=xxxxxx&img_url=https%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01Lnbnos2LkORtHhOVp_%21%213367999730-0-cib.jpg&page=1&page_size=20&language=en&sort=default",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
```

### JavaScript

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'http://api.tmapi.top/1688/global/search/image',
  params: {
    apiToken: 'xxxxxx',
    img_url: 'https://cbu01.alicdn.com/img/ibank/O1CN01Lnbnos2LkORtHhOVp_!!3367999730-0-cib.jpg',
    page: 1,
    page_size: 20,
    language: 'en',
    sort: 'default'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

### Python

```python
import requests

url = "http://api.tmapi.top/1688/global/search/image"

querystring = {"apiToken":"xxxxxx","img_url":"https://cbu01.alicdn.com/img/ibank/O1CN01Lnbnos2LkORtHhOVp_!!3367999730-0-cib.jpg","page":1,"page_size":20,"language":"en","sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/global/search/image?apiToken=xxxxxx&img_url=https%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01Lnbnos2LkORtHhOVp_%21%213367999730-0-cib.jpg&page=1&page_size=20&language=en&sort=default"))
    .method("GET", HttpRequest.BodyPublishers.noBody())
    .build();
HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());
```

### Go

```go
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "http://api.tmapi.top/1688/global/search/image?apiToken=xxxxxx&img_url=https%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01Lnbnos2LkORtHhOVp_%21%213367999730-0-cib.jpg&page=1&page_size=20&language=en&sort=default"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example

### 200

```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "page": 1,
    "page_size": 2,
    "total_count": 666,
    "sort": "default",
    "filters": {},
    "items": [
      {
        "item_id": 865835426638,
        "product_url": "https://detail.1688.com/offer/865835426638.html",
        "title": "Applicable to Huawei Folding Novaflip Bell N3 Bracelet Mix Phone Case P50pocket2 Protective Case Vflip",
        "title_origin": "适用华为折叠Novaflip铃铛N3手绳Mix手机壳P50Pocket2保护套VFlip",
        "img": "https://cbu01.alicdn.com/O1CN01MJvUUV26UATGC9C8o_!!2407317664-0-cib.jpg",
        "category_path": ["1042207", "50911", "7"],
        "price": "19.00",
        "price_info": {
          "drop_ship_price": "19.00",
          "wholesale_price": "19.00",
          "origin_price": "19.00"
        },
        "brand": "yot",
        "title_tags": ["1688严选"],
        "quantity_begin": 1,
        "quantity_prices": [
          {
            "begin_num": "1",
            "end_num": "",
            "price": "19.00"
          }
        ],
        "sale_info": {
          "gmv_fuzzy": "50+",
          "gmv_30days": 0,
          "gmv_30days_cb": 0,
          "sale_quantity": 27,
          "sale_quantity_month": 3,
          "sale_quantity_90days": 12,
          "sale_quantity_360days": 27,
          "orders_count": 13
        },
        "type": "normal",
        "delivery_info": {
          "area_from": ["Guangdong", "Futian District, Shenzhen"],
          "weight": 0,
          "suttle_weight": 0,
          "free_postage": false
        },
        "item_repurchase_rate": "0.0",
        "goods_score": 2,
        "image_dsm_score": 0,
        "primary_rank_score": 0,
        "super_new_product": false,
        "shop_info": {
          "login_id": null,
          "member_id": "b2b-2407317664",
          "company_name": "xxxxxx",
          "shop_url": "http://880755.1688.com",
          "biz_type": "生产加工",
          "is_factory": true,
          "is_super_factory": false,
          "is_gold_supplier": false,
          "location": ["Guangdong", "Futian District, Shenzhen"],
          "service_tags": ["7×24H响应", "先采后付"],
          "tp_member": true,
          "tp_year": 11,
          "factory_inspection": false,
          "shop_repurchase_rate": "11.2%"
        }
      }
    ]
  }
}
```

### 417

Failed to retrieve data, please try again or contact customer service.

### 422

Parameter error.

### 439

Subscription expired or insufficient balance.

### 499

Please try again or set your request timeout to 60 seconds.

### 500

Unexpected error, please contact customer service.

### 503

API request concurrency limit exceeded, please reduce concurrency.
