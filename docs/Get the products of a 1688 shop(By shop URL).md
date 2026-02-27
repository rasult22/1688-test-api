# Get the Products of a 1688 Shop (By Shop URL)

## API Overview

- Get all products from 1688 shop by shop URL
- Support sorting
- [See More](#response-example)

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/shop/items/v2`
- **Method:** GET

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| shop_url | string | Shop home page link | **true** |
| page | integer | Page number<br>Default value: 1 | false |
| page_size | integer | Number of items per page<br>Default value: 20 | false |
| sort | string | Optional values: `default`, `sales`, `price_up`, `price_down`, `time_up`, `time_down`<br>Default value: default | false |
| cat | string | Category ID | false |
| cat_type | string | Optional values: `0`, `1` | false |

## Security Auth

> **Tip:** Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/shop/items/v2?apiToken=xxxxxx&shop_url=https%3A%2F%2Fxldjjg.1688.com%2F&page=1&page_size=20&sort=default",
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
  url: 'http://api.tmapi.top/1688/shop/items/v2',
  params: {
    apiToken: 'xxxxxx',
    shop_url: 'https://xldjjg.1688.com/',
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

url = "http://api.tmapi.top/1688/shop/items/v2"

querystring = {"apiToken":"xxxxxx","shop_url":"https://xldjjg.1688.com/","page":1,"page_size":20,"sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/shop/items/v2?apiToken=xxxxxx&shop_url=https%3A%2F%2Fxldjjg.1688.com%2F&page=1&page_size=20&sort=default"))
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

	url := "http://api.tmapi.top/1688/shop/items/v2?apiToken=xxxxxx&shop_url=https%3A%2F%2Fxldjjg.1688.com%2F&page=1&page_size=20&sort=default"

	req, _ := http.NewRequest("GET", url, nil)

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
    "page": 1,
    "page_size": 3,
    "total_count": 162,
    "cat_id": "",
    "sort": "default",
    "items": [
      {
        "item_id": "765000043412",
        "title": "左手理发牙剪 CNC牙剪打薄剪 左手剪刀专业理发美发牙剪 理发店",
        "img": "https://cbu01.alicdn.com/img/ibank/O1CN01LwXIfD1F0EqsmPKl9_!!1000960424-0-cib.jpg",
        "category_path": [],
        "category_name": "",
        "price": "298.00",
        "quantity": null,
        "sale_info": {
          "sale_quantity": 1,
          "sale_amount": 0
        }
      }
    ]
  }
}
```

### 417 - Failed

Failed to retrieve data, please try again or contact customer service.

### 422 - Parameter Error

Parameter error.

### 439 - Subscription Expired

Subscription expired or insufficient balance.

### 499 - Timeout

Please try again or set your request timeout to 60 seconds.

### 500 - Unexpected Error

Unexpected error, please contact customer service.

### 503 - Concurrency Limit

API request concurrency limit exceeded, please reduce concurrency.
