# Get 1688 Product Review List

## API Overview

- Get 1688 product review list
- Includes review content/time/rating/SKU, etc.

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/item/rating`
- **Method:** GET

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| item_id | integer | Product ID | **true** |
| page | integer | Page number. Default value: 1 | false |
| sort_type | string | Optional values: `default`, `latest`. Default value: default | false |

## Security Auth

> Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/item/rating?apiToken=xxxxxx&item_id=652702302959&page=1&sort_type=default",
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
  url: 'http://api.tmapi.top/1688/item/rating',
  params: {apiToken: 'xxxxxx', item_id: 652702302959, page: 1, sort_type: 'default'}
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

url = "http://api.tmapi.top/1688/item/rating"

querystring = {"apiToken":"xxxxxx","item_id":652702302959,"page":1,"sort_type":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/item/rating?apiToken=xxxxxx&item_id=652702302959&page=1&sort_type=default"))
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

	url := "http://api.tmapi.top/1688/item/rating?apiToken=xxxxxx&item_id=652702302959&page=1&sort_type=default"

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
    "item_id": 634161824877,
    "page": 1,
    "page_size": 10,
    "sort_type": "default",
    "list": [
      {
        "id": 33545064566,
        "feedback": "该用户觉得商品非常赞，给出了五星好评",
        "feedback_date": "2024-06-26T01:17:51.000+00:00",
        "rate_star": 5,
        "sku_map": "颜色:白色;尺码:XL|颜色:白色;尺码:XXL|颜色:白色;尺码:XXXL",
        "user_nick": "t**3"
      },
      {
        "id": 28660705669,
        "feedback": "不错",
        "feedback_date": "2023-09-04T03:16:29.000+00:00",
        "rate_star": 5,
        "sku_map": "颜色:黑色;尺码:XXXL",
        "user_nick": "t**8"
      },
      {
        "id": 28536007399,
        "feedback": "不错",
        "feedback_date": "2023-08-25T02:49:58.000+00:00",
        "rate_star": 5,
        "sku_map": "颜色:红色;尺码:L|颜色:黑色;尺码:L",
        "user_nick": "t**8"
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
