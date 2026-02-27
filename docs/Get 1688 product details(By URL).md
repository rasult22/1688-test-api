# Get 1688 Product Details (By URL)

## API Overview

- Get 1688 product details by product URL
- Includes title, images, shop, SKU, price, inventory and other information
- Support multilingual output

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/item_detail_by_url`
- **Method:** `POST`

## Request Parameter

### Query

### Body

Content-Type: `application/json`

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| url | string | Product URL | **true** |
| scene |  | price type | false |
| optimize_title | boolean | Filter out non-core words from the title. This is more friendly to the translator. Only Chinese titles are supported for optimization. | false |
| language |  | Default value: zh | false |

## Security Auth

> **Tip:** Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/item_detail_by_url?apiToken=xxxxxx",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode([
    'url' => 'https://detail.1688.com/offer/652702302959.html',
    'language' => 'zh'
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
  url: 'http://api.tmapi.top/1688/item_detail_by_url',
  params: {apiToken: 'xxxxxx'},
  headers: {'Content-Type': 'application/json'},
  data: {url: 'https://detail.1688.com/offer/652702302959.html', language: 'zh'}
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

url = "http://api.tmapi.top/1688/item_detail_by_url"

querystring = {"apiToken":"xxxxxx"}

payload = {
    "url": "https://detail.1688.com/offer/652702302959.html",
    "language": "zh"
}

response = requests.post(url, json=payload, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/item_detail_by_url?apiToken=xxxxxx"))
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

	url := "http://api.tmapi.top/1688/item_detail_by_url?apiToken=xxxxxx"

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

### 200 - Success

```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "item_id": 859086919394,
    "product_url": "https://detail.1688.com/offer/859086919394.html",
    "title": "跨境速卖通女式长款睡衣家居服豹纹款开衫法式浴袍长袖秋冬睡袍",
    "category_id": 1037924,
    "root_category_id": 312,
    "currency": "CNY",
    "offer_unit": "件",
    "product_props": [
      { "产品类别": "睡衣" },
      { "面料名称": "网纱" },
      { "款式": "开衫" },
      { "主面料成分": "聚酯纤维（涤纶）" }
    ],
    "main_imgs": [
      "https://cbu01.alicdn.com/img/ibank/O1CN01gEiAAA1tfzhab0NhS_!!2214636595930-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN01zbvscc1tfzgUMxRU9_!!2214636595930-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN01U64N8h1tfzgajTOqp_!!2214636595930-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN01OWDvGr1tfzgZTutIr_!!2214636595930-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN01pc1OQP1tfzgaYrxTZ_!!2214636595930-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN01zTDmhr1tfzgairTNV_!!2214636595930-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN01sYHVBG1tfzgatNoUe_!!2214636595930-0-cib.jpg",
      "https://cbu01.alicdn.com/img/ibank/O1CN01RA4Ktf1tfzgcrZotc_!!2214636595930-0-cib.jpg"
    ],
    "video_url": "https://cloud.video.taobao.com/play/u/2214636595930/p/2/e/6/t/1/506402967489.mp4",
    "detail_url": "https://itemcdn.tmall.com/1688offer/icoss598189538ad1d6828b1d4e2a8",
    "sale_count": "175",
    "sale_info": {
      "sale_quantity_90days": 175
    },
    "price_info": {
      "price": "25.90",
      "price_min": "25.90",
      "price_max": "29.89",
      "origin_price_min": null,
      "origin_price_max": null,
      "discount_price": ""
    },
    "tiered_price_info": {
      "begin_num": 1,
      "prices": [
        { "beginAmount": "1", "price": "29.89" },
        { "beginAmount": "100", "price": "27.60" },
        { "beginAmount": "300", "price": "25.90" }
      ]
    },
    "mixed_batch": {
      "mix_amount": 10000,
      "mix_begin": 0,
      "mix_num": 1000,
      "shop_mix_num": 2147483647
    },
    "shop_info": {
      "shop_name": "灌云县伊山镇春霞服装厂",
      "shop_url": "https://winport.m.1688.com/page/index.html?memberId=b2b-22146365959302bc20",
      "seller_login_id": "灌云县伊山镇春霞服装厂",
      "seller_user_id": "2214636595930",
      "seller_member_id": "b2b-22146365959302bc20"
    },
    "delivery_info": {
      "location": "江苏省连云港市",
      "location_code": "34323526",
      "delivery_fee": 4,
      "unit_weight": 0,
      "template_id": "16519567"
    },
    "service_tags": [
      "7天无理由退货",
      "晚发必赔"
    ],
    "sku_price_scale": "25.90-29.89",
    "sku_price_scale_original": "null",
    "sku_price_range": {
      "begin_num": 1,
      "stock": 44732,
      "sku_param": [
        { "beginAmount": "1", "price": "29.89" },
        { "beginAmount": "100", "price": "27.60" },
        { "beginAmount": "300", "price": "25.90" }
      ],
      "mix_param": {
        "mixNum": 1000,
        "mixAmount": 10000,
        "shopMixNum": 2147483647,
        "mixBegin": 0,
        "supportMix": true
      }
    },
    "sku_props": [
      {
        "pid": "0",
        "prop_name": "颜色",
        "values": [
          { "vid": "0", "name": "黄色豹纹", "imageUrl": "https://cbu01.alicdn.com/img/ibank/O1CN01RA4Ktf1tfzgcrZotc_!!2214636595930-0-cib.jpg" },
          { "vid": "1", "name": "白色豹纹", "imageUrl": "https://cbu01.alicdn.com/img/ibank/O1CN01zTDmhr1tfzgairTNV_!!2214636595930-0-cib.jpg" },
          { "vid": "2", "name": "肤色豹纹", "imageUrl": "https://cbu01.alicdn.com/img/ibank/O1CN01sYHVBG1tfzgatNoUe_!!2214636595930-0-cib.jpg" }
        ]
      },
      {
        "pid": "1",
        "prop_name": "尺码",
        "values": [
          { "vid": "0", "name": "S", "imageUrl": "" },
          { "vid": "1", "name": "M", "imageUrl": "" },
          { "vid": "2", "name": "L", "imageUrl": "" }
        ]
      }
    ],
    "skus": [
      {
        "skuid": "5674557541674",
        "specid": "6f5320c016c03d575ad1034b79869a28",
        "sale_price": "29.89",
        "origin_price": null,
        "stock": 4975,
        "props_ids": "0:1;1:2",
        "props_names": "颜色:白色豹纹;尺码:L",
        "sale_count": 0,
        "package_info": {
          "weight": 0.12,
          "length": 0,
          "width": 0,
          "height": 0,
          "volume": 0
        }
      },
      {
        "skuid": "5674557541667",
        "specid": "bdcae134f48c5b5edfdffb3e79612418",
        "sale_price": "29.89",
        "origin_price": null,
        "stock": 4996,
        "props_ids": "0:2;1:0",
        "props_names": "颜色:肤色豹纹;尺码:S",
        "sale_count": 0,
        "package_info": {
          "weight": 0.12,
          "length": 0,
          "width": 0,
          "height": 0,
          "volume": 0
        }
      }
    ],
    "is_sold_out": false,
    "stock": 44732,
    "promotions": []
  }
}
```

### 417 - Failed to Retrieve Data

Failed to retrieve data, please try again or contact customer service.

### 422 - Parameter Error

Parameter error.

### 439 - Subscription Expired

Subscription expired or insufficient balance.

### 499 - Request Timeout

Please try again or set your request timeout to 60 seconds.

### 500 - Unexpected Error

Unexpected error, please contact customer service.

### 503 - Concurrency Limit

API request concurrency limit exceeded, please reduce concurrency.
