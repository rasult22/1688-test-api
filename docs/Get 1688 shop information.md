[Skip to main content](https://tmapi.top/docs/ali/shop/get-shop-information/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/shop/get-shop-information/\#api-overview "Direct link to API Overview")

- Get 1688 shop information by shop\_url or member\_id
- Includes company name, shop name, shop ratings, company address, contact information, etc.
- [See More](https://tmapi.top/docs/ali/shop/get-shop-information/#response-example)

## Basic Information [​](https://tmapi.top/docs/ali/shop/get-shop-information/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/shop/shop\_info

## Request Parameter [​](https://tmapi.top/docs/ali/shop/get-shop-information/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/shop/get-shop-information/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| shop\_url | string | Shop home page link | false |
| member\_id | string | Seller member ID | false |

tip

At least one of `shop_url` or `member_id` is required.

### Body [​](https://tmapi.top/docs/ali/shop/get-shop-information/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/shop/get-shop-information/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/shop/get-shop-information/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/shop/shop_info?apiToken=xxxxxx&shop_url=https%3A%2F%2Fshop1467738698115.1688.com&member_id=b2b-2211444284979bbec9",\
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
  url: 'http://api.tmapi.top/1688/shop/shop_info',
  params: {
    apiToken: 'xxxxxx',
    shop_url: 'https://shop1467738698115.1688.com',
    member_id: 'b2b-2211444284979bbec9'
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

url = "http://api.tmapi.top/1688/shop/shop_info"

querystring = {"apiToken":"xxxxxx","shop_url":"https://shop1467738698115.1688.com","member_id":"b2b-2211444284979bbec9"}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/shop/shop_info?apiToken=xxxxxx&shop_url=https%3A%2F%2Fshop1467738698115.1688.com&member_id=b2b-2211444284979bbec9"))
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

	url := "http://api.tmapi.top/1688/shop/shop_info?apiToken=xxxxxx&shop_url=https%3A%2F%2Fshop1467738698115.1688.com&member_id=b2b-2211444284979bbec9"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/shop/get-shop-information/\#response-example "Direct link to Response Example")

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

"b2b-2911575494fcf92"

"seller\_id":

2911575494

"company\_id":

36473948

"company\_name":

"深圳市XXXX有限公司"

"contact\_phone":

"18200673435"

"shop\_url":

"https://shop1467738698115.1688.com"

"shop\_logo":

"https://cbu01.alicdn.com/img/ibank/2017/917/597/7754795719\_544760956.jpg"

"shop\_name":

"深圳市XXXX有限公司"

"chat\_url":

"https://air.1688.com/app/ocms-fusion-components-1688/def\_cbu\_web\_im/index.html?touid=cnalichn%E8%AE%B8%E4%B8%96%E5%AE%811688&siteid=cnalichn&status=1"

"location\_str":

"中国 广东 深圳 龙华区民治街道新牛社区布龙路1010号智慧谷创新园422"

"is\_industry\_brand":

true

"is\_factory":

false

"is\_super\_factory":

false

"is\_flagship\_shop":

true

"is\_tp":

true

"tp\_year":

9

"favorite\_count":

730

"shop\_ratings":\[\
\
{\
\
"title":\
\
"退换体验"\
\
"type":\
\
"return\_exchange\_experience"\
\
"score":\
\
"4.7"\
\
}\
\
{\
\
"title":\
\
"品质体验"\
\
"type":\
\
"goods\_quality\_experience"\
\
"score":\
\
"5.0"\
\
}\
\
{\
\
"title":\
\
"物流时效"\
\
"type":\
\
"logistics"\
\
"score":\
\
"3.5"\
\
}\
\
{\
\
"title":\
\
"纠纷解决"\
\
"type":\
\
"dispute\_resolution"\
\
"score":\
\
"5.0"\
\
}\
\
{\
\
"title":\
\
"采购咨询"\
\
"type":\
\
"purchase\_consultation"\
\
"score":\
\
"5.0"\
\
}\
\
{\
\
"title":\
\
"综合服务"\
\
"type":\
\
"comprehensive"\
\
"score":\
\
"5.0"\
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
