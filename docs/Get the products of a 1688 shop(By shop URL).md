[Skip to main content](https://tmapi.top/docs/ali/shop/get-shop-items-v2/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/shop/get-shop-items-v2/\#api-overview "Direct link to API Overview")

- Get all products from 1688 shop by shop URL
- Support sorting
- [See More](https://tmapi.top/docs/ali/shop/get-shop-items-v2/#response-example)

## Basic Information [​](https://tmapi.top/docs/ali/shop/get-shop-items-v2/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/shop/items/v2

## Request Parameter [​](https://tmapi.top/docs/ali/shop/get-shop-items-v2/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/shop/get-shop-items-v2/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| shop\_url | string | Shop home page link | **true** |
| page | integer | Page number<br>Default value: 1 | false |
| page\_size | integer | Number of items per page<br>Default value: 20 | false |
| sort | string | Optional values: `default`,<br>`sales`,`price_up`,`price_down`,`time_up`,<br>`time_down`<br>Default value: default | false |
| cat | string | Category ID | false |
| cat\_type | string | Optional values: `0`,`1` | false |

### Body [​](https://tmapi.top/docs/ali/shop/get-shop-items-v2/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/shop/get-shop-items-v2/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/shop/get-shop-items-v2/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/shop/items/v2?apiToken=xxxxxx&shop_url=https%3A%2F%2Fxldjjg.1688.com%2F&page=1&page_size=20&sort=default",\
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
  url: 'http://api.tmapi.top/1688/shop/items/v2',
  params: {
    apiToken: 'xxxxxx',
    shop_url: 'https://xldjjg.1688.com/',
    page: 1,
    page_size: 20,
    sort: 'default'
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

url = "http://api.tmapi.top/1688/shop/items/v2"

querystring = {"apiToken":"xxxxxx","shop_url":"https://xldjjg.1688.com/","page":1,"page_size":20,"sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/shop/items/v2?apiToken=xxxxxx&shop_url=https%3A%2F%2Fxldjjg.1688.com%2F&page=1&page_size=20&sort=default"))
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

	url := "http://api.tmapi.top/1688/shop/items/v2?apiToken=xxxxxx&shop_url=https%3A%2F%2Fxldjjg.1688.com%2F&page=1&page_size=20&sort=default"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/shop/get-shop-items-v2/\#response-example "Direct link to Response Example")

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

3

"total\_count":

162

"cat\_id":

""

"sort":

"default"

"items":\[\
\
{\
\
"item\_id":\
\
"765000043412"\
\
"title":\
\
"左手理发牙剪 CNC牙剪打薄剪 左手剪刀专业理发美发牙剪 理发店"\
\
"img":\
\
"https:////cbu01.alicdn.com/img/ibank/O1CN01LwXIfD1F0EqsmPKl9\_!!1000960424-0-cib.jpg"\
\
"category\_path":\[\]\
\
"category\_name":\
\
""\
\
"price":\
\
"298.00"\
\
"quantity":\
\
NULL\
\
"sale\_info":{\
\
"sale\_quantity":\
\
1\
\
"sale\_amount":\
\
0\
\
}\
\
}\
\
{\
\
"item\_id":\
\
"609958065284"\
\
"title":\
\
"彩色双尾宠物美容剪刀6.5寸狗狗修毛剪宠物小弯剪直剪精修剪工厂"\
\
"img":\
\
"https:////cbu01.alicdn.com/img/ibank/2020/070/565/15608565070\_756644553.jpg"\
\
"category\_path":\[\]\
\
"category\_name":\
\
""\
\
"price":\
\
"155.00"\
\
"quantity":\
\
NULL\
\
"sale\_info":{\
\
"sale\_quantity":\
\
7\
\
"sale\_amount":\
\
0\
\
}\
\
}\
\
{\
\
"item\_id":\
\
"662615039902"\
\
"title":\
\
"6寸 平剪无痕牙剪专业发型师用美发剪刀理发店剪发套装 厂家直销"\
\
"img":\
\
"https:////cbu01.alicdn.com/img/ibank/O1CN01LCVGxy1F0EelJM1c6\_!!1000960424-0-cib.jpg"\
\
"category\_path":\[\]\
\
"category\_name":\
\
""\
\
"price":\
\
"105.00"\
\
"quantity":\
\
NULL\
\
"sale\_info":{\
\
"sale\_quantity":\
\
58\
\
"sale\_amount":\
\
0\
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