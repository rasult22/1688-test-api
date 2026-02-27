# Get Category Products V2

## API Overview

- Retrieve 1688 products by category ID
- Support multilingual output
- Support sorting and filtering

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/category/items/v2`
- **Method:** GET

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| language | string | Optional values: `en`, `zh`, `ru`, `vi`, `ja`, `ko`. Default value: en | false |
| cat_id | integer | Category ID | **true** |
| page | integer | Page number. Default value: 1 | false |
| page_size | integer | Number of items per page. Default value: 20 | false |
| sort | string | Optional values: `default`, `sales`, `price_up`, `price_down`. Default value: default | false |
| price_start | string | Filter: Minimum value of price range | false |
| price_end | string | Filter: Maximum value of price range | false |
| new_arrival | boolean | Filter: New product | false |
| support_dropshipping | boolean | Filter: Supports dropshipping | false |
| free_shipping | boolean | Filter: Free shipping | false |
| is_super_factory | boolean |  | false |

## Security Auth

> **Tip:** Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/category/items/v2?apiToken=xxxxxx&language=en&cat_id=&page=1&page_size=20&sort=default",
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
  url: 'http://api.tmapi.top/1688/category/items/v2',
  params: {
    apiToken: 'xxxxxx',
    language: 'en',
    cat_id: '',
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

url = "http://api.tmapi.top/1688/category/items/v2"

querystring = {"apiToken":"xxxxxx","language":"en","cat_id":"","page":1,"page_size":20,"sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/category/items/v2?apiToken=xxxxxx&language=en&cat_id=&page=1&page_size=20&sort=default"))
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

	url := "http://api.tmapi.top/1688/category/items/v2?apiToken=xxxxxx&language=en&cat_id=&page=1&page_size=20&sort=default"

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
    "keyword": "",
    "sort": "default",
    "cat_id": 1031922,
    "filters": {},
    "items": [
      {
        "item_id": 991188728585,
        "product_url": "https://detail.1688.com/offer/991188728585.html",
        "title": "2817桃心太阳镜爱心太阳眼镜果冻色无框心型连体眼镜炫目色彩眼镜",
        "img": "https://cbu01.alicdn.com/img/ibank/O1CN01l1LMMu23dNfRuPnh4_!!2219960167278-0-cib.jpg",
        "category_path": ["54", "80"],
        "price": "0.60",
        "price_info": {
          "price": "0.60",
          "sale_price": "0.60",
          "origin_price": ""
        },
        "currency": "CNY",
        "moq": "1",
        "quantity_begin": "1",
        "sale_info": {
          "sale_quantity_90days": "100000+"
        },
        "delivery_info": {
          "area_from": ["浙江", "台州市"],
          "free_shipping": false,
          "ship_in_48h": false
        },
        "shop_info": {
          "company_name": "台州市路桥喜字电子商务商行",
          "is_powerful_seller": false,
          "is_super_factory": false,
          "shop_years": 1,
          "score_info": {
            "composite_score": "4.0"
          }
        },
        "item_repurchase_rate": "60%",
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
