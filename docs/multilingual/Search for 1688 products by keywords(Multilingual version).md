# Search for 1688 Products by Keywords (Multilingual Version)

## API Overview

- Search for 1688 products by keywords
- Support multiple languages

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/global/search/items`
- **Method:** `GET`

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| page | integer | Page number. Default value: 1 | false |
| page_size | integer | Number of items per page. Default value: 20 | false |
| keyword | string | Search keywords | false |
| language | string | Optional values: `en`, `zh`, `ru`, `vi`, `ja`, `ko`. Default value: en | false |
| sort | string | Optional values: `default`, `sales`, `price_up`, `price_down`. Default value: default | false |
| price_start | string | Filter: Minimum value of price range | false |
| price_end | string | Filter: Maximum value of price range | false |
| cat_id | integer | Category ID | false |
| new_arrival | boolean | Filter: New product | false |
| support_dropshipping | boolean | Filter: Supports dropshipping | false |
| free_shipping | boolean | Filter: Free shipping | false |
| is_super_factory | boolean |  | false |

> **Tip:** At least one of `keyword` or `cat_ids` is required.

## Security Auth

> **Tip:** Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/global/search/items?apiToken=xxxxxx&page=1&page_size=20&keyword=%E9%A9%AC%E5%85%8B%E6%9D%AF&language=en&sort=default",
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
  url: 'http://api.tmapi.top/1688/global/search/items',
  params: {
    apiToken: 'xxxxxx',
    page: 1,
    page_size: 20,
    keyword: '马克杯',
    language: 'en',
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

url = "http://api.tmapi.top/1688/global/search/items"

querystring = {"apiToken":"xxxxxx","page":1,"page_size":20,"keyword":"马克杯","language":"en","sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/global/search/items?apiToken=xxxxxx&page=1&page_size=20&keyword=%E9%A9%AC%E5%85%8B%E6%9D%AF&language=en&sort=default"))
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

	url := "http://api.tmapi.top/1688/global/search/items?apiToken=xxxxxx&page=1&page_size=20&keyword=%E9%A9%AC%E5%85%8B%E6%9D%AF&language=en&sort=default"

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
    "sort": "price_up",
    "filters": {},
    "items": [
      {
        "item_id": "850588705676",
        "product_url": "https://detail.1688.com/offer/850588705676.html",
        "title": "Cross Border DuPont Paper Jelly Bag Tote Bag Large Capacity PVC Waterproof Tote Bag Commuter Mommy Shoulder Bag",
        "title_origin": "跨境杜邦纸果冻包 托特包 大容量PVC防水手提袋 通勤妈咪单肩包包",
        "img": "https://cbu01-overseas.1688.com/img/ibank/O1CN01gcU0Tq1f5tqLKLfHI_!!2216856833956-0-cib.jpg",
        "price": "35.0",
        "price_info": {
          "price": "35.0",
          "price_min": "35.0",
          "price_max": "35.0"
        },
        "currency": "CNY",
        "quantity_begin": "1",
        "sale_info": {
          "sale_quantity_90days": "2880"
        },
        "goods_score": "5.0",
        "shop_info": {
          "is_gold_manufacturer": false,
          "is_verified": false
        },
        "is_free_shipping": false,
        "is_new_item": false,
        "is_hot_item": false
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
