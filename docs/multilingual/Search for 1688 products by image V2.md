# Search for 1688 Products by Image V2

## API Overview

- Search for 1688 products by image
- Supports more languages compared to V1
- Support sorting and filtering

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/global/search/image/v2`
- **Method:** GET

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| language | string | Optional values: `en`, `zh`, `ru`, `vi`, `ja`, `ko`. Default value: en | false |
| img_url | string | Image URL | **true** |
| page | integer | Page number. Default value: 1 | false |
| page_size | integer | Number of items per page. Default value: 20 | false |
| sort | string | Optional values: `default`, `sales`, `price_up`, `price_down`. Default value: default | false |
| price_start | string | Filter: Minimum value of price range | false |
| price_end | string | Filter: Maximum value of price range | false |
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
  CURLOPT_URL => "http://api.tmapi.top/1688/global/search/image/v2?apiToken=xxxxxx&language=en&img_url=%2Fsearch%2Fimgextra5%2F1589508648580602236.jpg&page=1&page_size=20&sort=default",
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
  url: 'http://api.tmapi.top/1688/global/search/image/v2',
  params: {
    apiToken: 'xxxxxx',
    language: 'en',
    img_url: '/search/imgextra5/1589508648580602236.jpg',
    page: 1,
    page_size: 20,
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

url = "http://api.tmapi.top/1688/global/search/image/v2"

querystring = {"apiToken":"xxxxxx","language":"en","img_url":"/search/imgextra5/1589508648580602236.jpg","page":1,"page_size":20,"sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/global/search/image/v2?apiToken=xxxxxx&language=en&img_url=%2Fsearch%2Fimgextra5%2F1589508648580602236.jpg&page=1&page_size=20&sort=default"))
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

	url := "http://api.tmapi.top/1688/global/search/image/v2?apiToken=xxxxxx&language=en&img_url=%2Fsearch%2Fimgextra5%2F1589508648580602236.jpg&page=1&page_size=20&sort=default"

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
    "page_size": 10,
    "total_count": 688,
    "keyword": "",
    "sort": "default",
    "cat_id": null,
    "filters": {
      "price_start": "2"
    },
    "items": [
      {
        "item_id": 908305897124,
        "product_url": "https://detail.1688.com/offer/908305897124.html",
        "title": "2024 New Yinxing Classmate Red Lotus Seed Glutinous Jianning Old Variety Red Lotus Seed Core White Lotus Seed 500g",
        "title_origin": "2024年新印兴同学红花莲子糯建宁老品种红花莲子通芯白莲子500g",
        "img": "https://cbu01.alicdn.com/O1CN01OfUGyD2ILFvHYpyMS_!!3264309269-0-cib.jpg",
        "category_path": ["130822002", "104"],
        "price": "60.00",
        "price_info": {
          "price": "60.00",
          "sale_price": "60.00",
          "origin_price": ""
        },
        "currency": "CNY",
        "moq": null,
        "sale_info": {
          "sale_quantity_90days": "0"
        },
        "delivery_info": {
          "area_from": ["福建", "三明市"],
          "free_shipping": false,
          "ship_in_48h": false
        },
        "shop_info": {
          "company_name": "三明市润德电子商务有限公司",
          "is_powerful_seller": false,
          "is_super_factory": false,
          "shop_years": 9,
          "score_info": {
            "composite_score": "4.0"
          }
        },
        "item_repurchase_rate": "0%",
        "low_refund_rate": false,
        "ship_in_48h": false,
        "one_piece_min_order": false
      }
    ],
    "has_next_page": true
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
