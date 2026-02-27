[Skip to main content](https://tmapi.top/docs/ali/category-apis/get-category-items/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/category-apis/get-category-items/\#api-overview "Direct link to API Overview")

- Retrieve 1688 products by category ID

## Basic Information [​](https://tmapi.top/docs/ali/category-apis/get-category-items/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/category/items

## Request Parameter [​](https://tmapi.top/docs/ali/category-apis/get-category-items/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/category-apis/get-category-items/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| page | integer | Page number<br>Default value: 1 | false |
| cat\_id | integer | Category ID | **true** |
| super\_factory | boolean | Filter: Super factory | false |
| support\_dropshipping | boolean | Filter: Supports dropshipping | false |
| free\_shipping | boolean | Filter: Free shipping | false |

### Body [​](https://tmapi.top/docs/ali/category-apis/get-category-items/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/category-apis/get-category-items/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/category-apis/get-category-items/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/category/items?apiToken=xxxxxx&page=1&cat_id=1031910",\
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
  url: 'http://api.tmapi.top/1688/category/items',
  params: {apiToken: 'xxxxxx', page: 1, cat_id: 1031910}
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

url = "http://api.tmapi.top/1688/category/items"

querystring = {"apiToken":"xxxxxx","page":1,"cat_id":1031910}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/category/items?apiToken=xxxxxx&page=1&cat_id=1031910"))
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

	url := "http://api.tmapi.top/1688/category/items?apiToken=xxxxxx&page=1&cat_id=1031910"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/category-apis/get-category-items/\#response-example "Direct link to Response Example")

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

"page":

1

"page\_size":

2

"has\_next\_page":

true

"filters":{}

"items":\[\
\
{\
\
"item\_id":\
\
884674536008\
\
"product\_url":\
\
"https://detail.1688.com/offer/884674536008.html"\
\
"title":\
\
"2025夏季新款温柔碎花法式连衣裙女高级感广州十三行蓬蓬裙子女装"\
\
"img":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01n7ZpIr1zyfRRHlyvV\_!!2215924096783-0-cib.jpg"\
\
"price":\
\
""\
\
"price\_info":{\
\
"sale\_price":\
\
"4.59"\
\
"show\_price":\
\
"4.59"\
\
"origin\_price":\
\
"5.40"\
\
}\
\
"quantity\_begin":\
\
200\
\
"sales\_count":\
\
"180100"\
\
"sale\_info":{\
\
"sale\_quantity\_int":\
\
180100\
\
"buyer\_count":\
\
89750\
\
}\
\
"shop\_info":{\
\
"login\_id":\
\
"衣耘服装厂"\
\
"shop\_url":\
\
"https://yiyunfuzhuang888.1688.com"\
\
"company\_name":\
\
"广州衣耘服装厂"\
\
"is\_super\_factory":\
\
false\
\
"shop\_repurchase\_rate":\
\
"38.46"\
\
}\
\
}\
\
{\
\
"item\_id":\
\
769734131977\
\
"product\_url":\
\
"https://detail.1688.com/offer/769734131977.html"\
\
"title":\
\
"欧美跨境度假风蕾丝沙滩裙V领镂空开叉连体设计感连衣裙"\
\
"img":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01Zq7l8S2EzKFQjexo0\_!!1022268815-0-cib.jpg"\
\
"price":\
\
""\
\
"price\_info":{\
\
"sale\_price":\
\
"44.00"\
\
"show\_price":\
\
"44.00"\
\
"origin\_price":\
\
"44.00"\
\
}\
\
"quantity\_begin":\
\
3\
\
"sales\_count":\
\
"60627"\
\
"sale\_info":{\
\
"sale\_quantity\_int":\
\
60627\
\
"buyer\_count":\
\
60044\
\
}\
\
"shop\_info":{\
\
"login\_id":\
\
"xiangtongdz"\
\
"shop\_url":\
\
"https://xiangtongdz.1688.com"\
\
"company\_name":\
\
"广州市昀晟电子科技有限公司"\
\
"is\_super\_factory":\
\
false\
\
"shop\_repurchase\_rate":\
\
"18.18"\
\
}\
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
