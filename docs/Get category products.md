# Get Category Products

## API Overview

- Retrieve 1688 products by category ID

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/category/items`
- **Method:** `GET`

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| page | integer | Page number. Default value: 1 | false |
| cat_id | integer | Category ID | **true** |
| super_factory | boolean | Filter: Super factory | false |
| support_dropshipping | boolean | Filter: Supports dropshipping | false |
| free_shipping | boolean | Filter: Free shipping | false |

## Security Auth

> **Tip:** Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/category/items?apiToken=xxxxxx&page=1&cat_id=1031910",
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
  url: 'http://api.tmapi.top/1688/category/items',
  params: {apiToken: 'xxxxxx', page: 1, cat_id: 1031910}
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

url = "http://api.tmapi.top/1688/category/items"

querystring = {"apiToken":"xxxxxx","page":1,"cat_id":1031910}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/category/items?apiToken=xxxxxx&page=1&cat_id=1031910"))
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

	url := "http://api.tmapi.top/1688/category/items?apiToken=xxxxxx&page=1&cat_id=1031910"

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
    "has_next_page": true,
    "filters": {},
    "items": [
      {
        "item_id": 884674536008,
        "product_url": "https://detail.1688.com/offer/884674536008.html",
        "title": "2025夏季新款温柔碎花法式连衣裙女高级感广州十三行蓬蓬裙子女装",
        "img": "https://cbu01.alicdn.com/img/ibank/O1CN01n7ZpIr1zyfRRHlyvV_!!2215924096783-0-cib.jpg",
        "price": "",
        "price_info": {
          "sale_price": "4.59",
          "show_price": "4.59",
          "origin_price": "5.40"
        },
        "quantity_begin": 200,
        "sales_count": "180100",
        "sale_info": {
          "sale_quantity_int": 180100,
          "buyer_count": 89750
        },
        "shop_info": {
          "login_id": "衣耘服装厂",
          "shop_url": "https://yiyunfuzhuang888.1688.com",
          "company_name": "广州衣耘服装厂",
          "is_super_factory": false,
          "shop_repurchase_rate": "38.46"
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
