# Image URL Conversion

## API Overview

- Convert image URL into a recognizable format for image search API
- [See More](#response-example)

## Basic Information

- **API URL:** `http://api.tmapi.top/1688/tools/image/convert_url`
- **Method:** POST

## Request Parameter

### Query

### Body

> Content-Type: application/json

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| url | string | Image URL to be converted | **true** |
| search_api_endpoint | string | API endpoint for image search, defaults to `/search/image`, supported endpoints: [/search/image](https://tmapi.top/docs/ali/search/search-items-by-image-url), [/global/search/image](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url), [/global/search/image/v2](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url-v2) | **false** |

> **Tip:** The converted result is typically in image path format and can be directly used as a parameter for image search API

## Security Auth

> **Tip:** Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example

### PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://api.tmapi.top/1688/tools/image/convert_url?apiToken=xxxxxx",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode([
    'url' => '',
    'search_api_endpoint' => '/search/image'
  ]),
  CURLOPT_HTTPHEADER => [
    "Content-Type: application/json"
  ],
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
  method: 'POST',
  url: 'http://api.tmapi.top/1688/tools/image/convert_url',
  params: {apiToken: 'xxxxxx'},
  headers: {'Content-Type': 'application/json'},
  data: {url: '', search_api_endpoint: '/search/image'}
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

url = "http://api.tmapi.top/1688/tools/image/convert_url"

querystring = {"apiToken":"xxxxxx"}

payload = {
    "url": "",
    "search_api_endpoint": "/search/image"
}

response = requests.post(url, json=payload, params=querystring)

print(response.json())
```

### Java

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/tools/image/convert_url?apiToken=xxxxxx"))
    .header("Content-Type", "application/json")
    .method("POST", HttpRequest.BodyPublishers.noBody())
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

	url := "http://api.tmapi.top/1688/tools/image/convert_url?apiToken=xxxxxx"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Content-Type", "application/json")

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
    "image_url": "/search/imgextra/1692942898123_q7ftzxs9.jpg"
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
