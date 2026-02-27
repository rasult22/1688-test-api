[Skip to main content](https://tmapi.top/docs/ali/category-apis/get-category-info/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/category-apis/get-category-info/\#api-overview "Direct link to API Overview")

- Get category information/subcategories/category path by category ID
- Returns all first-level categories when category ID is not provided

## Basic Information [​](https://tmapi.top/docs/ali/category-apis/get-category-info/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/category/info

## Request Parameter [​](https://tmapi.top/docs/ali/category-apis/get-category-info/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/category-apis/get-category-info/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| cat\_id | integer | Category ID | false |

tip

If the category ID is not passed, all first-level categories will be returned by default

### Body [​](https://tmapi.top/docs/ali/category-apis/get-category-info/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/category-apis/get-category-info/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/category-apis/get-category-info/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/category/info?apiToken=xxxxxx",\
  CURLOPT_RETURNTRANSFER => true,\
  CURLOPT_ENCODING => "",\
  CURLOPT_MAXREDIRS => 10,\
  CURLOPT_TIMEOUT => 30,\
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\
  CURLOPT_CUSTOMREQUEST => "GET",\
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

```python
import requests

url = "http://api.tmapi.top/1688/category/info"

querystring = {"apiToken":"xxxxxx"}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/category/info?apiToken=xxxxxx"))
    .method("GET", HttpRequest.BodyPublishers.noBody())
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

	url := "http://api.tmapi.top/1688/category/info?apiToken=xxxxxx"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/category-apis/get-category-info/\#response-example "Direct link to Response Example")

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

"id":

"201149004"

"name":

"儿童饰品"

"name\_en":

"Children's Jewelry"

"level":

1

"children":\[\
\
{\
\
"id":\
\
"201545016"\
\
"name":\
\
"儿童脚饰"\
\
"name\_en":\
\
"Children's Anklets / Foot Jewelry"\
\
"level":\
\
2\
\
"has\_children":\
\
false\
\
}\
\
{\
\
"id":\
\
"201151506"\
\
"name":\
\
"儿童手饰"\
\
"name\_en":\
\
"Children's Bracelets / Rings"\
\
"level":\
\
2\
\
"has\_children":\
\
false\
\
}\
\
{\
\
"id":\
\
"201151804"\
\
"name":\
\
"儿童耳饰"\
\
"name\_en":\
\
"Children's Earrings"\
\
"level":\
\
2\
\
"has\_children":\
\
false\
\
}\
\
{\
\
"id":\
\
"201230202"\
\
"name":\
\
"儿童发饰"\
\
"name\_en":\
\
"Children's Hair Accessories"\
\
"level":\
\
2\
\
"has\_children":\
\
false\
\
}\
\
{\
\
"id":\
\
"201148002"\
\
"name":\
\
"儿童项饰"\
\
"name\_en":\
\
"Children's Necklaces"\
\
"level":\
\
2\
\
"has\_children":\
\
false\
\
}\
\
{\
\
"id":\
\
"201229606"\
\
"name":\
\
"其他儿童饰品及配件"\
\
"name\_en":\
\
"Other Children's Jewelry & Accessories"\
\
"level":\
\
2\
\
"has\_children":\
\
false\
\
}\
\
\]

"parent\_id":

"54"

"has\_children":

true

"path":\[\
\
{\
\
"id":\
\
"54"\
\
"name":\
\
"服饰配件、饰品"\
\
"name\_en":\
\
"Apparel Accessories & Jewelry"\
\
}\
\
{\
\
"id":\
\
"201149004"\
\
"name":\
\
"儿童饰品"\
\
"name\_en":\
\
"Children's Jewelry"\
\
}\
\
\]

}

}

\# Failed to retrieve data, please try again or contact customer service.

\# Parameter error

\# Subscription expired or insufficient balance.

\# Please try again or set your request timeout to 60 seconds.

\# Unexpected error, please contact customer service.

\# API request concurrency limit exceeded, please reduce concurrency.