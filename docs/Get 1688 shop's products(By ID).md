[Skip to main content](https://tmapi.top/docs/ali/shop/get-shop-items/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/shop/get-shop-items/\#api-overview "Direct link to API Overview")

- Get all products from 1688 shop by shop ID
- Support sorting and filtering
- [See More](https://tmapi.top/docs/ali/shop/get-shop-items/#response-example)

## Basic Information [​](https://tmapi.top/docs/ali/shop/get-shop-items/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/shop/items

## Request Parameter [​](https://tmapi.top/docs/ali/shop/get-shop-items/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/shop/get-shop-items/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| member\_id | string | Seller member ID | **true** |
| page | integer | Page number<br>Default value: 1 | false |
| page\_size | integer | Number of items per page<br>Default value: 20 | false |
| sort | string | Optional values: `default`,<br>`sales`,`price_up`,`price_down`,`time_up`,<br>`time_down`<br>Default value: default | false |
| shop\_cat\_id | string | Shop category ID | false |
| price\_start | string | Filter: Minimum value of price range | false |
| price\_end | string | Filter: Maximum value of price range | false |

### Body [​](https://tmapi.top/docs/ali/shop/get-shop-items/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/shop/get-shop-items/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/shop/get-shop-items/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/shop/items?apiToken=xxxxxx&member_id=jane727&page=1&page_size=20&sort=default",\
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
  url: 'http://api.tmapi.top/1688/shop/items',
  params: {
    apiToken: 'xxxxxx',
    member_id: 'jane727',
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

url = "http://api.tmapi.top/1688/shop/items"

querystring = {"apiToken":"xxxxxx","member_id":"jane727","page":1,"page_size":20,"sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/shop/items?apiToken=xxxxxx&member_id=jane727&page=1&page_size=20&sort=default"))
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

	url := "http://api.tmapi.top/1688/shop/items?apiToken=xxxxxx&member_id=jane727&page=1&page_size=20&sort=default"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/shop/get-shop-items/\#response-example "Direct link to Response Example")

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

"2465"

"shop\_cat\_id":

""

"keyword":

""

"price\_start":

""

"price\_end":

""

"sort":

"default"

"items":\[\
\
{\
\
"item\_id":\
\
"693334796781"\
\
"title":\
\
"欧美跨境饰品抽拉可调节蜡线choker项饰简约个性大爱心吊坠项链"\
\
"img":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01oEsmfk1E96nrFROVF\_!!988240308-0-cib.jpg"\
\
"main\_imgs":\[\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01oEsmfk1E96nrFROVF\_!!988240308-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01Ro1oLD1E96oGpFdKq\_!!988240308-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01ddJ26m1E96oJNrgr9\_!!988240308-0-cib.jpg"\
\
\]\
\
"video\_id":\
\
""\
\
"category\_path":\[\
\
"70763664"\
\
"178655228"\
\
"174572394"\
\
"15481365"\
\
"174572396"\
\
"178655226"\
\
"87574327"\
\
\]\
\
"category\_name":\
\
"项链"\
\
"price":\
\
"3.90"\
\
"price\_info":{\
\
"drop\_ship\_price":\
\
"7.90"\
\
"wholesale\_price":\
\
"3.90"\
\
"origin\_price":\
\
"3.9"\
\
"agent\_price":\
\
"3.9"\
\
}\
\
"quantity\_begin":\
\
"2"\
\
"new\_product":\
\
false\
\
"sale\_info":{\
\
"gmv\_30days":\
\
"17724.33"\
\
"gmv\_90days":\
\
"56251.1"\
\
"sale\_quantity\_30days":\
\
"3728"\
\
"sale\_quantity\_90days":\
\
"12942"\
\
"orders\_count\_30days":\
\
"222"\
\
}\
\
"primary\_rank\_score":\
\
"0"\
\
"type":\
\
"SALE"\
\
"unit":\
\
"PCS"\
\
"created\_time":\
\
"2022-11-28T11:26:00+0800"\
\
"status":\
\
"published"\
\
}\
\
{\
\
"item\_id":\
\
"669092103946"\
\
"title":\
\
"欧美跨境饰品夸张朋克多层链条叠戴项饰气质小众几何圆球个性项链"\
\
"img":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01IE4rlU1E96itGHZac\_!!988240308-0-cib.jpg"\
\
"main\_imgs":\[\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01IE4rlU1E96itGHZac\_!!988240308-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01p2LS2k1E96pwVKao3\_!!988240308-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01S06PAD1E96oT4tAKW\_!!988240308-0-cib.jpg"\
\
\]\
\
"video\_id":\
\
"347500941890"\
\
"category\_path":\[\
\
"70763664"\
\
"15481366"\
\
"15481365"\
\
"176712394"\
\
"87574327"\
\
"176712396"\
\
\]\
\
"category\_name":\
\
"项链"\
\
"price":\
\
"4.80"\
\
"price\_info":{\
\
"drop\_ship\_price":\
\
"4.80"\
\
"wholesale\_price":\
\
"4.80"\
\
"origin\_price":\
\
"4.8"\
\
"agent\_price":\
\
"4.8"\
\
}\
\
"quantity\_begin":\
\
"2"\
\
"new\_product":\
\
false\
\
"sale\_info":{\
\
"gmv\_30days":\
\
"16983.61"\
\
"gmv\_90days":\
\
"62355.08"\
\
"sale\_quantity\_30days":\
\
"2378"\
\
"sale\_quantity\_90days":\
\
"9206"\
\
"orders\_count\_30days":\
\
"166"\
\
}\
\
"primary\_rank\_score":\
\
"0"\
\
"type":\
\
"SALE"\
\
"unit":\
\
"条"\
\
"created\_time":\
\
"2022-02-14T08:21:00+0800"\
\
"status":\
\
"published"\
\
}\
\
{\
\
"item\_id":\
\
"709534091263"\
\
"title":\
\
"欧美跨境饰品甜酷休闲水钻沙滩leg chain 弹力带仿珍珠性感腿链女"\
\
"img":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01JZRIWr1E96ofBdLmZ\_!!988240308-0-cib.jpg"\
\
"main\_imgs":\[\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01JZRIWr1E96ofBdLmZ\_!!988240308-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN012krdgR1E96odt2jh0\_!!988240308-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01i0AjM91E96oUoYAMB\_!!988240308-0-cib.jpg"\
\
\]\
\
"video\_id":\
\
"402951614754"\
\
"category\_path":\[\
\
"87574327"\
\
"15481371"\
\
"178655229"\
\
"178655230"\
\
\]\
\
"category\_name":\
\
"脚饰"\
\
"price":\
\
"3.90"\
\
"price\_info":{\
\
"drop\_ship\_price":\
\
"7.90"\
\
"wholesale\_price":\
\
"3.90"\
\
"origin\_price":\
\
"3.9"\
\
"agent\_price":\
\
"3.9"\
\
}\
\
"quantity\_begin":\
\
"2"\
\
"new\_product":\
\
false\
\
"sale\_info":{\
\
"gmv\_30days":\
\
"14439.33"\
\
"gmv\_90days":\
\
"36875.57"\
\
"sale\_quantity\_30days":\
\
"2317"\
\
"sale\_quantity\_90days":\
\
"5986"\
\
"orders\_count\_30days":\
\
"298"\
\
}\
\
"primary\_rank\_score":\
\
"0"\
\
"type":\
\
"SALE"\
\
"unit":\
\
"PCS"\
\
"created\_time":\
\
"2023-03-23T16:36:00+0800"\
\
"status":\
\
"published"\
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

