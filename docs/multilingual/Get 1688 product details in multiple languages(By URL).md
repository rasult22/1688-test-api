# Get 1688 Product Details in Multiple Languages (By URL)

> **Note:** This API has been merged with [/1688/item_detail_by_url API](https://tmapi.top/docs/ali/item-detail/get-item-detail-by-url). Please use that API to get multilingual product details.

## API Overview

- Get 1688 multilingual product details by product URL

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/global/item_detail_by_url`
- **Method:** POST

## Request Parameter

### Body

> Content-Type: application/json

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| url | string | Product URL | **true** |
| language | string | Default value: en | false |

## Security Auth

> **Tip:** Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/global/item_detail_by_url?apiToken=xxxxxx",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode([
    'url' => 'https://detail.1688.com/offer/652702302959.html',
    'language' => 'en'
  ]),
  CURLOPT_HTTPHEADER => [
    "Content-Type: application/json"
  ],
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
  method: 'POST',
  url: 'http://api.tmapi.top/1688/global/item_detail_by_url',
  params: {apiToken: 'xxxxxx'},
  headers: {'Content-Type': 'application/json'},
  data: {url: 'https://detail.1688.com/offer/652702302959.html', language: 'en'}
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

url = "http://api.tmapi.top/1688/global/item_detail_by_url"

querystring = {"apiToken":"xxxxxx"}

payload = {
    "url": "https://detail.1688.com/offer/652702302959.html",
    "language": "en"
}

response = requests.post(url, json=payload, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/global/item_detail_by_url?apiToken=xxxxxx"))
    .header("Content-Type", "application/json")
    .method("POST", HttpRequest.BodyPublishers.noBody())
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

	url := "http://api.tmapi.top/1688/global/item_detail_by_url?apiToken=xxxxxx"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Content-Type", "application/json")

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
      "https://cbu01.alicdn.com/img/ibank/O1CN01uPPxsl1wp6C1qxx7J_!!2098846356-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN01GlTHa01wp6Bq7dwgT_!!2098846356-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN01dRSI4b1wp6BwQf8Rd_!!2098846356-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN01LvTmha1wp6CIhqnHx_!!2098846356-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN01Y5IsVy1wp6BwSrLoQ_!!2098846356-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN013UcDM31wp6Bz86jpD_!!2098846356-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN01XU2W901wp6Boml4iH_!!2098846356-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN01elEE5y1wp6C12SGYw_!!2098846356-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN01Qdem7j1wp6C3mbR3K_!!2098846356-0-cib.jpg"
    ],
    "video_url": null,
    "detail_url": "https://itemcdn.tmall.com/1688offer/icoss2032842328deabec21bf13a610",
    "offer_unit": "Piece(s)",
    "product_props": [
      {"品牌": "夏新"},
      {"适用场景": "移动便携,K歌,直播,广场舞,广播系统,户外草坪,其他"},
      {"上市时间": "详见实物"},
      {"连接方式": "蓝牙连接"},
      {"频响范围": "20Hz-20KHz"},
      {"信噪比": "≥85dB"}
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
    "service_tags": ["7天无理由退货", "晚发必赔"],
    "sku_props": [
      {
        "prop_name": "Color",
        "pid": "0",
        "values": [
          {"name": "80W/8寸拉杆版双分频", "vid": "0", "imageUrl": "https://cbu01.alicdn.com/img/ibank/O1CN01elEE5y1wp6C12SGYw_!!2098846356-0-cib.jpg"},
          {"name": "80W/8寸拉杆版双分频单麦克风", "vid": "1", "imageUrl": "https://cbu01.alicdn.com/img/ibank/O1CN01XU2W901wp6Boml4iH_!!2098846356-0-cib.jpg"},
          {"name": "100W/10寸拉杆版双分频单麦克风", "vid": "2", "imageUrl": "https://cbu01.alicdn.com/img/ibank/O1CN01Qdem7j1wp6C3mbR3K_!!2098846356-0-cib.jpg"},
          {"name": "60W/8寸声卡版双分频", "vid": "3", "imageUrl": "https://cbu01.alicdn.com/img/ibank/O1CN01Y5IsVy1wp6BwSrLoQ_!!2098846356-0-cib.jpg"},
          {"name": "120W/10寸声卡版三分频双金属话筒", "vid": "4", "imageUrl": "https://cbu01.alicdn.com/img/ibank/O1CN013UcDM31wp6Bz86jpD_!!2098846356-0-cib.jpg"}
        ]
      }
    ],
    "skus": [
      {"skuid": "4936364425260", "specid": "48df1c8f09f1bfa97d55234bc9219b02", "sale_price": "228.00", "origin_price": "228.00", "stock": 0, "sale_count": 0, "props_ids": "0:3", "props_names": "Color:60W/8寸声卡版双分频"},
      {"skuid": "4936364425262", "specid": "a32c993129011bef9bb6c6afb2bca989", "sale_price": "299.00", "origin_price": "299.00", "stock": 5, "sale_count": 0, "props_ids": "0:1", "props_names": "Color:80W/8寸拉杆版双分频单麦克风"},
      {"skuid": "4936364425261", "specid": "038436256838b574ece0089edd01b128", "sale_price": "248.00", "origin_price": "248.00", "stock": 5, "sale_count": 0, "props_ids": "0:0", "props_names": "Color:80W/8寸拉杆版双分频"},
      {"skuid": "4936364425263", "specid": "074099fa8933beb7c87979515e73878e", "sale_price": "388.00", "origin_price": "388.00", "stock": 1, "sale_count": 0, "props_ids": "0:2", "props_names": "Color:100W/10寸拉杆版双分频单麦克风"},
      {"skuid": "4936364425264", "specid": "164be8d319604688bc3c4a836136cbbd", "sale_price": "708.00", "origin_price": "708.00", "stock": 0, "sale_count": 0, "props_ids": "0:4", "props_names": "Color:120W/10寸声卡版三分频双金属话筒"}
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
