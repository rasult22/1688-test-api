# Get 1688 Product Description Pictures

## API Overview

- Get 1688 product description images by product ID

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/item_desc`
- **Method:** GET

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| item_id | integer | Product ID | **true** |

## Security Auth

> Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/item_desc?apiToken=xxxxxx&item_id=652702302959",
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
  url: 'http://api.tmapi.top/1688/item_desc',
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

url = "http://api.tmapi.top/1688/item_desc"

querystring = {"apiToken":"xxxxxx","item_id":652702302959}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/item_desc?apiToken=xxxxxx&item_id=652702302959"))
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

	url := "http://api.tmapi.top/1688/item_desc?apiToken=xxxxxx&item_id=652702302959"

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
    "item_id": 622619146604,
    "detail_imgs": [
      "https://cbu01.alicdn.com/img/ibank/2020/452/402/17709204254_1283248032.jpg",
      "https://cbu01.alicdn.com/img/ibank/2020/901/478/17766874109_1283248032.jpg",
      "https://cbu01.alicdn.com/img/ibank/2020/672/568/17766865276_1283248032.jpg"
    ],
    "detail_html": "<img src=\"https://cbu01.alicdn.com/img/ibank/2020/452/402/17709204254_1283248032.jpg\"/><img src=\"https://cbu01.alicdn.com/img/ibank/2020/901/478/17766874109_1283248032.jpg\"/><img src=\"https://cbu01.alicdn.com/img/ibank/2020/672/568/17766865276_1283248032.jpg\"/>"
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
