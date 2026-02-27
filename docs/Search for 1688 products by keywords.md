# Search for 1688 Products by Keywords

## API Overview

- Search for 1688 products by keywords
- Support sorting and filtering

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/search/items`
- **Method:** GET

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| page | integer | Page number. Default value: 1 | false |
| page_size | integer | Number of items per page. Default value: 20. Max: 20. | false |
| keyword | string | Search keywords | **true** |
| sort | string | Optional values: `default`, `sales`, `price_up`, `price_down`. Default value: default | false |
| moq | integer |  | false |
| price_start | string | Filter: Minimum value of price range | false |
| price_end | string | Filter: Maximum value of price range | false |
| new_arrival | boolean | Filter: New product | false |
| support_dropshipping | boolean | Filter: Supports dropshipping | false |
| free_shipping | boolean | Filter: Free shipping | false |
| is_super_factory | boolean |  | false |

## Security Auth

> Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/search/items?apiToken=xxxxxx&page=1&page_size=20&keyword=%E9%A9%AC%E5%85%8B%E6%9D%AF&sort=default",
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
  url: 'http://api.tmapi.top/1688/search/items',
  params: {apiToken: 'xxxxxx', page: 1, page_size: 20, keyword: '马克杯', sort: 'default'}
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

url = "http://api.tmapi.top/1688/search/items"

querystring = {"apiToken":"xxxxxx","page":1,"page_size":20,"keyword":"马克杯","sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/search/items?apiToken=xxxxxx&page=1&page_size=20&keyword=%E9%A9%AC%E5%85%8B%E6%9D%AF&sort=default"))
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

	url := "http://api.tmapi.top/1688/search/items?apiToken=xxxxxx&page=1&page_size=20&keyword=%E9%A9%AC%E5%85%8B%E6%9D%AF&sort=default"

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
    "page_size": 20,
    "total_count": 2000,
    "keyword": "男士T恤",
    "sort": "default",
    "cat_id": null,
    "filters": {},
    "items": [
      {
        "item_id": 973927556856,
        "product_url": "https://detail.1688.com/offer/973927556856.html",
        "title": "【高端系列】双面液氨丝光&80高支莱赛尔长袖T恤男士纯色高端上衣",
        "img": "https://cbu01.alicdn.com/img/ibank/O1CN01BJ7AAS1YRF4K6UTS4_!!2209657723055-0-cib.jpg",
        "category_path": ["315", "10165"],
        "price": "56",
        "price_info": {
          "sale_price": "56",
          "origin_price": null
        },
        "moq": 2,
        "quantity_prices": [
          {
            "begin_num": 2,
            "end_num": 199,
            "price": "56.00"
          },
          {
            "begin_num": 200,
            "end_num": 499,
            "price": "55.00"
          },
          {
            "begin_num": 500,
            "end_num": null,
            "price": "54.00"
          }
        ],
        "sale_info": {
          "sale_quantity": "已售300+件",
          "sale_quantity_int": 300,
          "orders_count": 271
        },
        "delivery_info": {
          "area_from": ["广东", "广州市"]
        },
        "item_repurchase_rate": "12%",
        "rating_star": "3.0",
        "shop_info": {
          "login_id": "广州淘圣男装有限公司",
          "member_id": "b2b-2209657723055e41d3",
          "company_name": "广州淘圣制衣有限公司",
          "shop_url": "http://shop5o52040l89801.1688.com",
          "biz_type": "生产加工",
          "is_factory": true,
          "is_super_factory": false,
          "location": ["广东", "广州市"],
          "service_tags": ["深度验厂"],
          "shop_years": 6,
          "factory_inspection": true,
          "score_info": {
            "composite_score": "4.0",
            "consultation_score": "4.0",
            "dispute_score": "4.0",
            "logistics_score": "4.0",
            "return_score": "3.33"
          }
        },
        "is_ad": false
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
