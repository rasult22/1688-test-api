# Search for 1688 Factories by Keywords

## API Overview

- Search for 1688 factories by keywords
- Support sorting and filtering
- [See More](#response-example)

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/search/factories`
- **Method:** GET

## Request Parameter

### Query

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| page | integer | Page number. Default value: 1 | false |
| page_size | integer | Number of items per page. Default value: 20 | false |
| keywords | string | Search keywords | **true** |
| sort | string | Optional values: `default`, `repurchase_rate`. Default value: default | false |

## Security Auth

> Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/search/factories?apiToken=xxxxxx&page=1&page_size=20&keywords=%E7%8E%A9%E5%85%B7%E5%8E%82&sort=default",
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
  url: 'http://api.tmapi.top/1688/search/factories',
  params: {apiToken: 'xxxxxx', page: 1, page_size: 20, keywords: '玩具厂', sort: 'default'}
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

url = "http://api.tmapi.top/1688/search/factories"

querystring = {"apiToken":"xxxxxx","page":1,"page_size":20,"keywords":"玩具厂","sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/search/factories?apiToken=xxxxxx&page=1&page_size=20&keywords=%E7%8E%A9%E5%85%B7%E5%8E%82&sort=default"))
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

	url := "http://api.tmapi.top/1688/search/factories?apiToken=xxxxxx&page=1&page_size=20&keywords=%E7%8E%A9%E5%85%B7%E5%8E%82&sort=default"

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
    "page": 2,
    "page_size": 3,
    "total_count": 2000,
    "keywords": "玩具厂",
    "sort": "default",
    "items": [
      {
        "login_id": "嘉玩玩具厂",
        "member_id": "b2b-2208087470531de12c",
        "userid": "b2b-2208087470531de12c",
        "company_name": "汕头市澄海区嘉玩玩具厂",
        "factory_url": "https://sale.1688.com/factory/card.html?__existtitle__=1&__removesafearea__=1&memberId=b2b-2208087470531de12c&aHdkaW5n_isCentral=true&aHdkaW5n_isGrayed=false&aHdkaW5n_isUseGray=true&tracelog=p4p&_p_isad=1&cbu_ad_adgroup_id=1012175526&cbu_ad_sessionid=8abf6de67a4f84a1ae99f562f3f5162e",
        "factory_level": null,
        "factory_area_size": "1000",
        "location": {
          "city": "汕头"
        },
        "service_tags": [
          "AA诚信等级",
          "塑料/塑胶",
          "注塑",
          "清加工",
          "汕头玩具"
        ],
        "product_tags": "泡泡玩具;玩具枪",
        "invoice_available": false,
        "tp_member": true,
        "tp_year": 4,
        "is_factory": true,
        "super_factory": false,
        "shop_repurchase_rate": "0.3",
        "response_rate": "0.44"
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
