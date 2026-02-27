# Get 1688 Shop Categories

## API Overview

- Get all categories of 1688 shop
- [See More](#response-example)

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/shop/category`
- **Method:** GET

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
  CURLOPT_URL => "http://api.tmapi.top/1688/shop/category?apiToken=xxxxxx&shop_url=https%3A%2F%2Fxldjjg.1688.com%2F&member_id=b2b-2214704521180a4258",
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
  url: 'http://api.tmapi.top/1688/shop/category',
  params: {
    apiToken: 'xxxxxx',
    shop_url: 'https://xldjjg.1688.com/',
    member_id: 'b2b-2214704521180a4258'
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

url = "http://api.tmapi.top/1688/shop/category"

querystring = {"apiToken":"xxxxxx","shop_url":"https://xldjjg.1688.com/","member_id":"b2b-2214704521180a4258"}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/shop/category?apiToken=xxxxxx&shop_url=https%3A%2F%2Fxldjjg.1688.com%2F&member_id=b2b-2214704521180a4258"))
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

	url := "http://api.tmapi.top/1688/shop/category?apiToken=xxxxxx&shop_url=https%3A%2F%2Fxldjjg.1688.com%2F&member_id=b2b-2214704521180a4258"

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
    "member_id": "babyyy100",
    "is_custom": true,
    "list": [
      {
        "id": "165497439",
        "name": "店长推荐",
        "full_name": "店长推荐",
        "count": 4,
        "children": []
      },
      {
        "id": "4829184",
        "name": "新品上架",
        "full_name": "新品上架",
        "count": 20,
        "children": []
      },
      {
        "id": "172915179",
        "name": "训练裤/学习裤系列",
        "full_name": "训练裤/学习裤系列",
        "count": 7,
        "children": []
      },
      {
        "id": "13791802",
        "name": "阳光菊产品系列",
        "full_name": "阳光菊产品系列",
        "count": 93,
        "children": [
          { "id": "13791844", "name": "奶瓶", "full_name": "奶瓶", "count": 0, "children": [] },
          { "id": "13791845", "name": "收腹带", "full_name": "收腹带", "count": 18, "children": [] },
          { "id": "13791846", "name": "尿布/尿垫/尿裤", "full_name": "尿布/尿垫/尿裤", "count": 28, "children": [] }
        ]
      }
    ]
  }
}
```

### 417

Failed to retrieve data, please try again or contact customer service.

### 422

Parameter error

### 439

Subscription expired or insufficient balance.

### 499

Please try again or set your request timeout to 60 seconds.

### 500

Unexpected error, please contact customer service.

### 503

API request concurrency limit exceeded, please reduce concurrency.
