# Get 1688 Product Details - Multilingual (By ID)

> **Note:** This API has been merged with [/1688/item/detail API](https://tmapi.top/docs/ali/item-detail/get-item-detail-by-id). Please use that API to get multilingual product details.

## API Overview

- Get 1688 multilingual product details by product ID

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/global/item_detail`
- **Method:** GET

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| item_id | integer | Product ID | **true** |
| language | string | Optional values: `en`, `zh`, `ru`, `th`, `pt`, `es`, `tr`, `vi`, `ja`, `ko`. Default value: en | false |

## Security Auth

> **Tip:** Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/global/item_detail?apiToken=xxxxxx&item_id=652702302959&language=en",
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
  url: 'http://api.tmapi.top/1688/global/item_detail',
  params: {apiToken: 'xxxxxx', item_id: 652702302959, language: 'en'}
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

url = "http://api.tmapi.top/1688/global/item_detail"

querystring = {"apiToken":"xxxxxx","item_id":652702302959,"language":"en"}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/global/item_detail?apiToken=xxxxxx&item_id=652702302959&language=en"))
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

	url := "http://api.tmapi.top/1688/global/item_detail?apiToken=xxxxxx&item_id=652702302959&language=en"

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
    "item_id": 695361338476,
    "product_url": "https://detail.1688.com/offer/695361338476.html",
    "title": "Xia Xin professional grade outdoor pull rod speaker high power high volume K song live square dance Bluetooth audio wholesale",
    "category_id": 122708008,
    "category_name": null,
    "root_category_id": 6,
    "currency": "CNY",
    "main_imgs": [
      "https://cbu01.alicdn.com/img/ibank/O1CN018RIjvB1wp6BjzXQJZ_!!2098846356-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN01uPPxsl1wp6C1qxx7J_!!2098846356-0-cib.jpg"
    ],
    "video_url": null,
    "detail_url": "https://itemcdn.tmall.com/1688offer/icoss2032842328deabec21bf13a610",
    "offer_unit": "Piece(s)",
    "product_props": [
      {"品牌": "夏新"},
      {"适用场景": "移动便携,K歌,直播,广场舞,广播系统,户外草坪,其他"}
    ],
    "sale_count": "0",
    "price_info": {
      "price": "248.00",
      "price_min": "248.00",
      "price_max": "388.00",
      "origin_price_min": "228.0",
      "origin_price_max": "708.0",
      "discount_price": ""
    },
    "tiered_price_info": {
      "begin_num": 1,
      "prices": []
    },
    "mixed_batch": {
      "mix_amount": 1,
      "mix_begin": 0,
      "mix_num": 1
    },
    "sale_info": {
      "sale_quantity_90days": 0
    },
    "is_sold_out": false,
    "support_drop_shipping": false,
    "support_cross_border": false,
    "shop_info": {
      "shop_name": "金多盈华电子商务(东莞)有限公司",
      "shop_url": "https://winport.m.1688.com/page/index.html?memberId=b2b-2098846356",
      "seller_login_id": "金多盈华贸易有限公司",
      "seller_user_id": "2098846356",
      "seller_member_id": "b2b-2098846356"
    },
    "delivery_info": {
      "location": "广东省东莞市",
      "location_code": "12687509",
      "delivery_fee": 1,
      "unit_weight": 0,
      "template_id": "10915233"
    },
    "service_tags": [
      "7天无理由退货",
      "晚发必赔"
    ],
    "sku_props": [
      {
        "prop_name": "Color",
        "pid": "0",
        "values": [
          {
            "name": "80W/8寸拉杆版双分频",
            "vid": "0",
            "imageUrl": "https://cbu01.alicdn.com/img/ibank/O1CN01elEE5y1wp6C12SGYw_!!2098846356-0-cib.jpg"
          },
          {
            "name": "80W/8寸拉杆版双分频单麦克风",
            "vid": "1",
            "imageUrl": "https://cbu01.alicdn.com/img/ibank/O1CN01XU2W901wp6Boml4iH_!!2098846356-0-cib.jpg"
          }
        ]
      }
    ],
    "skus": [
      {
        "skuid": "4936364425260",
        "specid": "48df1c8f09f1bfa97d55234bc9219b02",
        "sale_price": "228.00",
        "origin_price": "228.00",
        "stock": 0,
        "sale_count": 0,
        "props_ids": "0:3",
        "props_names": "Color:60W/8寸声卡版双分频"
      },
      {
        "skuid": "4936364425262",
        "specid": "a32c993129011bef9bb6c6afb2bca989",
        "sale_price": "299.00",
        "origin_price": "299.00",
        "stock": 5,
        "sale_count": 0,
        "props_ids": "0:1",
        "props_names": "Color:80W/8寸拉杆版双分频单麦克风"
      }
    ],
    "stock": 11,
    "promotions": []
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
