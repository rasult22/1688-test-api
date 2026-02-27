# Get 1688 Shop Information

## API Overview

- Get 1688 shop information by shop_url or member_id
- Includes company name, shop name, shop ratings, company address, contact information, etc.
- [See More](#response-example)

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/shop/shop_info`
- **Method:** `GET`

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| shop_url | string | Shop home page link | false |
| member_id | string | Seller member ID | false |

> **Tip:** At least one of `shop_url` or `member_id` is required.

## Security Auth

> **Tip:** Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/shop/shop_info?apiToken=xxxxxx&shop_url=https%3A%2F%2Fshop1467738698115.1688.com&member_id=b2b-2211444284979bbec9",
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
  url: 'http://api.tmapi.top/1688/shop/shop_info',
  params: {
    apiToken: 'xxxxxx',
    shop_url: 'https://shop1467738698115.1688.com',
    member_id: 'b2b-2211444284979bbec9'
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

url = "http://api.tmapi.top/1688/shop/shop_info"

querystring = {"apiToken":"xxxxxx","shop_url":"https://shop1467738698115.1688.com","member_id":"b2b-2211444284979bbec9"}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/shop/shop_info?apiToken=xxxxxx&shop_url=https%3A%2F%2Fshop1467738698115.1688.com&member_id=b2b-2211444284979bbec9"))
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

	url := "http://api.tmapi.top/1688/shop/shop_info?apiToken=xxxxxx&shop_url=https%3A%2F%2Fshop1467738698115.1688.com&member_id=b2b-2211444284979bbec9"

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
    "member_id": "b2b-2911575494fcf92",
    "seller_id": 2911575494,
    "company_id": 36473948,
    "company_name": "深圳市XXXX有限公司",
    "contact_phone": "18200673435",
    "shop_url": "https://shop1467738698115.1688.com",
    "shop_logo": "https://cbu01.alicdn.com/img/ibank/2017/917/597/7754795719_544760956.jpg",
    "shop_name": "深圳市XXXX有限公司",
    "chat_url": "https://air.1688.com/app/ocms-fusion-components-1688/def_cbu_web_im/index.html?touid=cnalichn%E8%AE%B8%E4%B8%96%E5%AE%811688&siteid=cnalichn&status=1",
    "location_str": "中国 广东 深圳 龙华区民治街道新牛社区布龙路1010号智慧谷创新园422",
    "is_industry_brand": true,
    "is_factory": false,
    "is_super_factory": false,
    "is_flagship_shop": true,
    "is_tp": true,
    "tp_year": 9,
    "favorite_count": 730,
    "shop_ratings": [
      {
        "title": "退换体验",
        "type": "return_exchange_experience",
        "score": "4.7"
      },
      {
        "title": "品质体验",
        "type": "goods_quality_experience",
        "score": "5.0"
      },
      {
        "title": "物流时效",
        "type": "logistics",
        "score": "3.5"
      },
      {
        "title": "纠纷解决",
        "type": "dispute_resolution",
        "score": "5.0"
      },
      {
        "title": "采购咨询",
        "type": "purchase_consultation",
        "score": "5.0"
      },
      {
        "title": "综合服务",
        "type": "comprehensive",
        "score": "5.0"
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
