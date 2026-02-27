[Skip to main content](https://tmapi.top/docs/ali/tool-apis/image-url-convert/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/tool-apis/image-url-convert/\#api-overview "Direct link to API Overview")

- Convert image URL into a recognizable format for image search API
- [See More](https://tmapi.top/docs/ali/tool-apis/image-url-convert/#response-example)

## Basic Information [​](https://tmapi.top/docs/ali/tool-apis/image-url-convert/\#basic-information "Direct link to Basic Information")

API URL

POST

http://api.tmapi.top/1688/tools/image/convert\_url

## Request Parameter [​](https://tmapi.top/docs/ali/tool-apis/image-url-convert/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/tool-apis/image-url-convert/\#query "Direct link to Query")

### Body [​](https://tmapi.top/docs/ali/tool-apis/image-url-convert/\#body "Direct link to Body")

> Content-Type: application/json

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| url | string | Image URL to be converted | **true** |
| search\_api\_endpoint | string | API endpoint for image search, defaults to \`/search/image\`, supported endpoints: [/search/image](https://tmapi.top/docs/ali/search/search-items-by-image-url), [/global/search/image](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url), [/global/search/image/v2](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url-v2) | **false** |

tip

The converted result is typically in image path format and can be directly used as a parameter for image search API

## Security Auth [​](https://tmapi.top/docs/ali/tool-apis/image-url-convert/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/tool-apis/image-url-convert/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/tools/image/convert_url?apiToken=xxxxxx",\
  CURLOPT_RETURNTRANSFER => true,\
  CURLOPT_ENCODING => "",\
  CURLOPT_MAXREDIRS => 10,\
  CURLOPT_TIMEOUT => 30,\
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\
  CURLOPT_CUSTOMREQUEST => "POST",\
  CURLOPT_POSTFIELDS => json_encode([\
    'url' => '',\
    'search_api_endpoint' => '/search/image'\
  ]),\
  CURLOPT_HTTPHEADER => [\
    "Content-Type: application/json"\
  ],\
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

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/tools/image/convert_url?apiToken=xxxxxx"))
    .header("Content-Type", "application/json")
    .method("POST", HttpRequest.BodyPublishers.noBody())
    .build();
HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());
```

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

## Response Example [​](https://tmapi.top/docs/ali/tool-apis/image-url-convert/\#response-example "Direct link to Response Example")

- 200
- 417
- 422
- 439
- 499
- 500
- 503

{

"code":

200

"msg":

"success"

"data":{

"image\_url":

"/search/imgextra/1692942898123\_q7ftzxs9.jpg"

}

}

\# Failed to retrieve data, please try again or contact customer service.

\# Parameter error

\# Subscription expired or insufficient balance.

\# Please try again or set your request timeout to 60 seconds.

\# Unexpected error, please contact customer service.

\# API request concurrency limit exceeded, please reduce concurrency.

Opens ChatThis icon Opens the chat window.

![Chat attention grabber](https://embed.tawk.to/_s/v4/assets/images/attention-grabbers/168-r-br.svg)