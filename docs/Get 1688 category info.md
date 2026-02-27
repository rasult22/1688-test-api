# Get 1688 Category Info

## API Overview

- Get category information/subcategories/category path by category ID
- Returns all first-level categories when category ID is not provided

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/category/info`
- **Method:** `GET`

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| cat_id | integer | Category ID | false |

> **Tip:** If the category ID is not passed, all first-level categories will be returned by default

### Body

No body parameters required.

## Security Auth

> **Tip:** Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/category/info?apiToken=xxxxxx",
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
  url: 'http://api.tmapi.top/1688/category/info',
  params: {apiToken: 'xxxxxx'}
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

url = "http://api.tmapi.top/1688/category/info"

querystring = {"apiToken":"xxxxxx"}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/category/info?apiToken=xxxxxx"))
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

	url := "http://api.tmapi.top/1688/category/info?apiToken=xxxxxx"

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
    "id": "201149004",
    "name": "儿童饰品",
    "name_en": "Children's Jewelry",
    "level": 1,
    "children": [
      {
        "id": "201545016",
        "name": "儿童脚饰",
        "name_en": "Children's Anklets / Foot Jewelry",
        "level": 2,
        "has_children": false
      },
      {
        "id": "201151506",
        "name": "儿童手饰",
        "name_en": "Children's Bracelets / Rings",
        "level": 2,
        "has_children": false
      },
      {
        "id": "201151804",
        "name": "儿童耳饰",
        "name_en": "Children's Earrings",
        "level": 2,
        "has_children": false
      },
      {
        "id": "201230202",
        "name": "儿童发饰",
        "name_en": "Children's Hair Accessories",
        "level": 2,
        "has_children": false
      },
      {
        "id": "201148002",
        "name": "儿童项饰",
        "name_en": "Children's Necklaces",
        "level": 2,
        "has_children": false
      },
      {
        "id": "201229606",
        "name": "其他儿童饰品及配件",
        "name_en": "Other Children's Jewelry & Accessories",
        "level": 2,
        "has_children": false
      }
    ],
    "parent_id": "54",
    "has_children": true,
    "path": [
      {
        "id": "54",
        "name": "服饰配件、饰品",
        "name_en": "Apparel Accessories & Jewelry"
      },
      {
        "id": "201149004",
        "name": "儿童饰品",
        "name_en": "Children's Jewelry"
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

### 500 - Server Error

Unexpected error, please contact customer service.

### 503 - Rate Limit

API request concurrency limit exceeded, please reduce concurrency.
