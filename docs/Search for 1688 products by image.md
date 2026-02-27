# Search for 1688 Products by Image

## API Overview

- Search for 1688 products by image URL
- Support sorting and filtering
- [See More](#response-example)

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/search/image`
- **Method:** GET

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| img_url | string | Image URL. **Only images from Alibaba-affiliated platforms can be identified.** Non-Ali image needs to be converted using [Image URL conversion API](https://tmapi.top/docs/ali/tool-apis/image-url-convert) first, and then use the converted image URL to call this API. | **true** |
| page | integer | Page number. Default value: 1 | false |
| page_size | integer | Number of items per page. Default value: 20. Max: 20. | false |
| sort | string | Optional values: `default`, `sales`, `price_up`, `price_down`. Default value: default | false |
| price_start | string | Filter: Minimum value of price range | false |
| price_end | string | Filter: Maximum value of price range | false |
| support_dropshipping | boolean | Filter: Supports dropshipping | false |
| is_factory | boolean | Filter: Is factory | false |
| verified_supplier | boolean | Filter: Verified supplier | false |
| free_shipping | boolean | Filter: Free shipping | false |
| new_arrival | boolean | Filter: New product | false |

## Security Auth

> Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/search/image?apiToken=xxxxxx&img_url=https%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01Lnbnos2LkORtHhOVp_%21%213367999730-0-cib.jpg&page=1&page_size=20&sort=default",
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
  url: 'http://api.tmapi.top/1688/search/image',
  params: {
    apiToken: 'xxxxxx',
    img_url: 'https://cbu01.alicdn.com/img/ibank/O1CN01Lnbnos2LkORtHhOVp_!!3367999730-0-cib.jpg',
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

url = "http://api.tmapi.top/1688/search/image"

querystring = {"apiToken":"xxxxxx","img_url":"https://cbu01.alicdn.com/img/ibank/O1CN01Lnbnos2LkORtHhOVp_!!3367999730-0-cib.jpg","page":1,"page_size":20,"sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/search/image?apiToken=xxxxxx&img_url=https%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01Lnbnos2LkORtHhOVp_%21%213367999730-0-cib.jpg&page=1&page_size=20&sort=default"))
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

	url := "http://api.tmapi.top/1688/search/image?apiToken=xxxxxx&img_url=https%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01Lnbnos2LkORtHhOVp_%21%213367999730-0-cib.jpg&page=1&page_size=20&sort=default"

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
    "total_count": 680,
    "keyword": "",
    "sort": "default",
    "cat_id": null,
    "filters": {},
    "items": [
      {
        "item_id": 983093623752,
        "product_url": "https://detail.1688.com/offer/983093623752.html",
        "title": "跨境外贸lulu男士同款运动长袖户外健身速干T恤弹力休闲上衣",
        "img": "https://cbu01.alicdn.com/img/ibank/O1CN01vGCPtN22CzDpG7RBW_!!2210992147085-0-cib.jpg",
        "category_path": ["1031887", "127890013", "18"],
        "price": "27.00",
        "price_info": {
          "sale_price": "27.00",
          "origin_price": "27.00"
        },
        "moq": 1,
        "quantity_prices": [],
        "sale_info": {
          "sale_quantity": "5160",
          "sale_quantity_int": 5160,
          "orders_count": 111
        },
        "delivery_info": {
          "area_from": ["广东", "东莞市"]
        },
        "item_repurchase_rate": "54%",
        "rating_star": null,
        "shop_info": {
          "login_id": "瑜佃工厂",
          "member_id": "b2b-2210992147085de3df",
          "company_name": "广东瑜佃供应链管理有限公司",
          "shop_url": "http://gdytgc.1688.com?tracelog=p4p",
          "biz_type": "生产加工",
          "is_factory": true,
          "is_super_factory": false,
          "location": ["广东", "东莞市"],
          "service_tags": null,
          "shop_years": 5,
          "factory_inspection": true,
          "score_info": {
            "composite_score": "4.5"
          }
        },
        "is_ad": true
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
