# Get 1688 Shop's Products (By ID)

## API Overview

- Get all products from 1688 shop by shop ID
- Support sorting and filtering
- [See More](#response-example)

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/shop/items`
- **Method:** GET

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| member_id | string | Seller member ID | **true** |
| page | integer | Page number. Default value: 1 | false |
| page_size | integer | Number of items per page. Default value: 20 | false |
| sort | string | Optional values: `default`, `sales`, `price_up`, `price_down`, `time_up`, `time_down`. Default value: default | false |
| shop_cat_id | string | Shop category ID | false |
| price_start | string | Filter: Minimum value of price range | false |
| price_end | string | Filter: Maximum value of price range | false |

## Security Auth

> Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/shop/items?apiToken=xxxxxx&member_id=jane727&page=1&page_size=20&sort=default",
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
  url: 'http://api.tmapi.top/1688/shop/items',
  params: {
    apiToken: 'xxxxxx',
    member_id: 'jane727',
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

url = "http://api.tmapi.top/1688/shop/items"

querystring = {"apiToken":"xxxxxx","member_id":"jane727","page":1,"page_size":20,"sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/shop/items?apiToken=xxxxxx&member_id=jane727&page=1&page_size=20&sort=default"))
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

	url := "http://api.tmapi.top/1688/shop/items?apiToken=xxxxxx&member_id=jane727&page=1&page_size=20&sort=default"

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
    "page_size": 3,
    "total_count": "2465",
    "shop_cat_id": "",
    "keyword": "",
    "price_start": "",
    "price_end": "",
    "sort": "default",
    "items": [
      {
        "item_id": "693334796781",
        "title": "欧美跨境饰品抽拉可调节蜡线choker项饰简约个性大爱心吊坠项链",
        "img": "https://cbu01.alicdn.com/img/ibank/O1CN01oEsmfk1E96nrFROVF_!!988240308-0-cib.jpg",
        "main_imgs": [
          "https://cbu01.alicdn.com/img/ibank/O1CN01oEsmfk1E96nrFROVF_!!988240308-0-cib.jpg",
          "https://cbu01.alicdn.com/img/ibank/O1CN01Ro1oLD1E96oGpFdKq_!!988240308-0-cib.jpg",
          "https://cbu01.alicdn.com/img/ibank/O1CN01ddJ26m1E96oJNrgr9_!!988240308-0-cib.jpg"
        ],
        "video_id": "",
        "category_path": [
          "70763664",
          "178655228",
          "174572394",
          "15481365",
          "174572396",
          "178655226",
          "87574327"
        ],
        "category_name": "项链",
        "price": "3.90",
        "price_info": {
          "drop_ship_price": "7.90",
          "wholesale_price": "3.90",
          "origin_price": "3.9",
          "agent_price": "3.9"
        },
        "quantity_begin": "2",
        "new_product": false,
        "sale_info": {
          "gmv_30days": "17724.33",
          "gmv_90days": "56251.1",
          "sale_quantity_30days": "3728",
          "sale_quantity_90days": "12942",
          "orders_count_30days": "222"
        },
        "primary_rank_score": "0",
        "type": "SALE",
        "unit": "PCS",
        "created_time": "2022-11-28T11:26:00+0800",
        "status": "published"
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
