# Get 1688 Product Shipping Fee

## API Overview

- Get shipping template based on province
- Get total shipping cost based on total quantity and weight

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/item/shipping`
- **Method:** GET

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| item_id | int | Product ID | **true** |
| province | str | Chinese province name, e.g., "广东","广东省","gd","Guangdong" | **true** |
| total_quantity | int | Total quantity of the product to be shipped | **false** |
| total_weight | float | Total weight of the product to be shipped (in kg). You can calculate it by the weight information in the product detail API. If there is no weight information, just ignore this parameter. | **false** |

## Security Auth

> Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/item/shipping?apiToken=xxxxxx&item_id=652702302959&province=&total_quantity=1",
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
  url: 'http://api.tmapi.top/1688/item/shipping',
  params: {apiToken: 'xxxxxx', item_id: 652702302959, province: '', total_quantity: 1}
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

url = "http://api.tmapi.top/1688/item/shipping"

querystring = {"apiToken":"xxxxxx","item_id":652702302959,"province":"","total_quantity":1}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/item/shipping?apiToken=xxxxxx&item_id=652702302959&province=&total_quantity=1"))
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

	url := "http://api.tmapi.top/1688/item/shipping?apiToken=xxxxxx&item_id=652702302959&province=&total_quantity=1"

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
    "shipping_to": "内蒙古",
    "unit": "kg",
    "first_unit": 1,
    "first_unit_fee": 9,
    "next_unit": 1,
    "next_unit_fee": 7,
    "total_quantity": 1,
    "total_weight": 2,
    "total_fee": 16
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
