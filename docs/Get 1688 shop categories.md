[Skip to main content](https://tmapi.top/docs/ali/shop/get-shop-categories/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/shop/get-shop-categories/\#api-overview "Direct link to API Overview")

- Get all categories of 1688 shop
- [See More](https://tmapi.top/docs/ali/shop/get-shop-categories/#response-example)

## Basic Information [​](https://tmapi.top/docs/ali/shop/get-shop-categories/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/shop/category

## Request Parameter [​](https://tmapi.top/docs/ali/shop/get-shop-categories/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/shop/get-shop-categories/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| shop\_url | string | Shop home page link | false |
| member\_id | string | Seller member ID | false |

tip

At least one of `shop_url` or `member_id` is required.

### Body [​](https://tmapi.top/docs/ali/shop/get-shop-categories/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/shop/get-shop-categories/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/shop/get-shop-categories/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/shop/category?apiToken=xxxxxx&shop_url=https%3A%2F%2Fxldjjg.1688.com%2F&member_id=b2b-2214704521180a4258",\
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
  url: 'http://api.tmapi.top/1688/shop/category',
  params: {
    apiToken: 'xxxxxx',
    shop_url: 'https://xldjjg.1688.com/',
    member_id: 'b2b-2214704521180a4258'
  }
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

url = "http://api.tmapi.top/1688/shop/category"

querystring = {"apiToken":"xxxxxx","shop_url":"https://xldjjg.1688.com/","member_id":"b2b-2214704521180a4258"}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/shop/category?apiToken=xxxxxx&shop_url=https%3A%2F%2Fxldjjg.1688.com%2F&member_id=b2b-2214704521180a4258"))
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

	url := "http://api.tmapi.top/1688/shop/category?apiToken=xxxxxx&shop_url=https%3A%2F%2Fxldjjg.1688.com%2F&member_id=b2b-2214704521180a4258"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/shop/get-shop-categories/\#response-example "Direct link to Response Example")

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

"member\_id":

"babyyy100"

"is\_custom":

true

"list":\[\
\
{\
\
"id":\
\
"165497439"\
\
"name":\
\
"店长推荐"\
\
"full\_name":\
\
"店长推荐"\
\
"count":\
\
4\
\
"children":\[\]\
\
}\
\
{\
\
"id":\
\
"4829184"\
\
"name":\
\
"新品上架"\
\
"full\_name":\
\
"新品上架"\
\
"count":\
\
20\
\
"children":\[\]\
\
}\
\
{\
\
"id":\
\
"172915179"\
\
"name":\
\
"训练裤/学习裤系列"\
\
"full\_name":\
\
"训练裤/学习裤系列"\
\
"count":\
\
7\
\
"children":\[\]\
\
}\
\
{\
\
"id":\
\
"13791802"\
\
"name":\
\
"阳光菊产品系列"\
\
"full\_name":\
\
"阳光菊产品系列"\
\
"count":\
\
93\
\
"children":\[\
\
{\
\
"id":\
\
"13791844"\
\
"name":\
\
"奶瓶"\
\
"full\_name":\
\
"奶瓶"\
\
"count":\
\
0\
\
"children":\[\]\
\
}\
\
{\
\
"id":\
\
"13791845"\
\
"name":\
\
"收腹带"\
\
"full\_name":\
\
"收腹带"\
\
"count":\
\
18\
\
"children":\[\]\
\
}\
\
{\
\
"id":\
\
"13791846"\
\
"name":\
\
"尿布/尿垫/尿裤"\
\
"full\_name":\
\
"尿布/尿垫/尿裤"\
\
"count":\
\
28\
\
"children":\[\]\
\
}\
\
\]\
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
