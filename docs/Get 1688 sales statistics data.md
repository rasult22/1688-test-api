# Get 1688 Sales Statistics Data

## API Overview

- Get product historical sales trend
- Get product historical price trend

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/item/statistics/sales`
- **Method:** GET

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| item_id | integer | Product ID | **true** |
| spec_id | string | sku spec id | false |

## Security Auth

> Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/item/statistics/sales?apiToken=xxxxxx&item_id=652702302959",
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
  url: 'http://api.tmapi.top/1688/item/statistics/sales',
  params: {apiToken: 'xxxxxx', item_id: 652702302959}
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

url = "http://api.tmapi.top/1688/item/statistics/sales"

querystring = {"apiToken":"xxxxxx","item_id":652702302959}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/item/statistics/sales?apiToken=xxxxxx&item_id=652702302959"))
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

	url := "http://api.tmapi.top/1688/item/statistics/sales?apiToken=xxxxxx&item_id=652702302959"

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
    "publish_time": "2024-06-27 09:22:26",
    "sales_quantity_30days": 3985,
    "sales_quantity_total": "1.5万+",
    "order_quantity_total": "3500+",
    "sales_trend": [
      {
        "date": "2025-06-24",
        "sales_quantity": 136,
        "order_quantity": 12
      },
      {
        "date": "2025-06-25",
        "sales_quantity": 157,
        "order_quantity": 35
      },
      {
        "date": "2025-06-26",
        "sales_quantity": 351,
        "order_quantity": 56
      }
    ],
    "price_trend": [
      {
        "date": "2025-06-24",
        "price_min": "11.0",
        "price_max": "11.0"
      },
      {
        "date": "2025-06-25",
        "price_min": "11.0",
        "price_max": "11.0"
      },
      {
        "date": "2025-06-26",
        "price_min": "11.0",
        "price_max": "11.0"
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
