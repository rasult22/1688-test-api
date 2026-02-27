[Skip to main content](https://tmapi.top/docs/ali/multi-language-apis/get-item-detail-by-url/#__docusaurus_skipToContent_fallback)

note

This API has been merged with [/1688/item\_detail\_by\_url API](https://tmapi.top/docs/ali/item-detail/get-item-detail-by-url). Please use that API to get multilingual product details.

## API Overview [​](https://tmapi.top/docs/ali/multi-language-apis/get-item-detail-by-url/\#api-overview "Direct link to API Overview")

- Get 1688 multilingual product details by product URL

## Basic Information [​](https://tmapi.top/docs/ali/multi-language-apis/get-item-detail-by-url/\#basic-information "Direct link to Basic Information")

API URL

POST

http://api.tmapi.top/1688/global/item\_detail\_by\_url

## Request Parameter [​](https://tmapi.top/docs/ali/multi-language-apis/get-item-detail-by-url/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/multi-language-apis/get-item-detail-by-url/\#query "Direct link to Query")

### Body [​](https://tmapi.top/docs/ali/multi-language-apis/get-item-detail-by-url/\#body "Direct link to Body")

> Content-Type: application/json

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| url | string | Product URL | **true** |
| language |  | Default value: en | false |

## Security Auth [​](https://tmapi.top/docs/ali/multi-language-apis/get-item-detail-by-url/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/multi-language-apis/get-item-detail-by-url/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/global/item_detail_by_url?apiToken=xxxxxx",\
  CURLOPT_RETURNTRANSFER => true,\
  CURLOPT_ENCODING => "",\
  CURLOPT_MAXREDIRS => 10,\
  CURLOPT_TIMEOUT => 30,\
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\
  CURLOPT_CUSTOMREQUEST => "POST",\
  CURLOPT_POSTFIELDS => json_encode([\
    'url' => 'https://detail.1688.com/offer/652702302959.html',\
    'language' => 'en'\
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
  url: 'http://api.tmapi.top/1688/global/item_detail_by_url',
  params: {apiToken: 'xxxxxx'},
  headers: {'Content-Type': 'application/json'},
  data: {url: 'https://detail.1688.com/offer/652702302959.html', language: 'en'}
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

url = "http://api.tmapi.top/1688/global/item_detail_by_url"

querystring = {"apiToken":"xxxxxx"}

payload = {
    "url": "https://detail.1688.com/offer/652702302959.html",
    "language": "en"
}

response = requests.post(url, json=payload, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/global/item_detail_by_url?apiToken=xxxxxx"))
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

	url := "http://api.tmapi.top/1688/global/item_detail_by_url?apiToken=xxxxxx"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/multi-language-apis/get-item-detail-by-url/\#response-example "Direct link to Response Example")

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

"item\_id":

695361338476

"product\_url":

"https://detail.1688.com/offer/695361338476.html"

"title":

"Xia Xin professional grade outdoor pull rod speaker high power high volume K song live square dance Bluetooth audio wholesale"

"category\_id":

122708008

"category\_name":

NULL

"root\_category\_id":

6

"currency":

"CNY"

"main\_imgs":\[\
\
"https://cbu01.alicdn.com/img/ibank/O1CN018RIjvB1wp6BjzXQJZ\_!!2098846356-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01uPPxsl1wp6C1qxx7J\_!!2098846356-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01GlTHa01wp6Bq7dwgT\_!!2098846356-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01dRSI4b1wp6BwQf8Rd\_!!2098846356-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01LvTmha1wp6CIhqnHx\_!!2098846356-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01Y5IsVy1wp6BwSrLoQ\_!!2098846356-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN013UcDM31wp6Bz86jpD\_!!2098846356-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01XU2W901wp6Boml4iH\_!!2098846356-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01elEE5y1wp6C12SGYw\_!!2098846356-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01Qdem7j1wp6C3mbR3K\_!!2098846356-0-cib.jpg"\
\
\]

"video\_url":

NULL

"detail\_url":

"https://itemcdn.tmall.com/1688offer/icoss2032842328deabec21bf13a610"

"offer\_unit":

"Piece(s)"

"product\_props":\[\
\
{\
\
"品牌":\
\
"夏新"\
\
}\
\
{\
\
"适用场景":\
\
"移动便携,K歌,直播,广场舞,广播系统,户外草坪,其他"\
\
}\
\
{\
\
"上市时间":\
\
"详见实物"\
\
}\
\
{\
\
"连接方式":\
\
"蓝牙连接"\
\
}\
\
{\
\
"频响范围":\
\
"20Hz-20KHz"\
\
}\
\
{\
\
"信噪比":\
\
"≥85dB"\
\
}\
\
\]

"sale\_count":

"0"

"price\_info":{

"price":

"248.00"

"price\_min":

"248.00"

"price\_max":

"388.00"

"origin\_price\_min":

"228.0"

"origin\_price\_max":

"708.0"

"discount\_price":

""

}

"tiered\_price\_info":{

"begin\_num":

1

"prices":\[\]

}

"mixed\_batch":{

"mix\_amount":

1

"mix\_begin":

0

"mix\_num":

1

}

"sale\_info":{

"sale\_quantity\_90days":

0

}

"is\_sold\_out":

false

"support\_drop\_shipping":

false

"support\_cross\_border":

false

"shop\_info":{

"shop\_name":

"金多盈华电子商务(东莞)有限公司"

"shop\_url":

"https://winport.m.1688.com/page/index.html?memberId=b2b-2098846356"

"seller\_login\_id":

"金多盈华贸易有限公司"

"seller\_user\_id":

"2098846356"

"seller\_member\_id":

"b2b-2098846356"

}

"delivery\_info":{

"location":

"广东省东莞市"

"location\_code":

"12687509"

"delivery\_fee":

1

"unit\_weight":

0

"template\_id":

"10915233"

}

"service\_tags":\[\
\
"7天无理由退货"\
\
"晚发必赔"\
\
\]

"sku\_props":\[\
\
{\
\
"prop\_name":\
\
"Color"\
\
"pid":\
\
"0"\
\
"values":\[\
\
{\
\
"name":\
\
"80W/8寸拉杆版双分频"\
\
"vid":\
\
"0"\
\
"imageUrl":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01elEE5y1wp6C12SGYw\_!!2098846356-0-cib.jpg"\
\
}\
\
{\
\
"name":\
\
"80W/8寸拉杆版双分频单麦克风"\
\
"vid":\
\
"1"\
\
"imageUrl":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01XU2W901wp6Boml4iH\_!!2098846356-0-cib.jpg"\
\
}\
\
{\
\
"name":\
\
"100W/10寸拉杆版双分频单麦克风"\
\
"vid":\
\
"2"\
\
"imageUrl":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01Qdem7j1wp6C3mbR3K\_!!2098846356-0-cib.jpg"\
\
}\
\
{\
\
"name":\
\
"60W/8寸声卡版双分频"\
\
"vid":\
\
"3"\
\
"imageUrl":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01Y5IsVy1wp6BwSrLoQ\_!!2098846356-0-cib.jpg"\
\
}\
\
{\
\
"name":\
\
"120W/10寸声卡版三分频双金属话筒"\
\
"vid":\
\
"4"\
\
"imageUrl":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN013UcDM31wp6Bz86jpD\_!!2098846356-0-cib.jpg"\
\
}\
\
\]\
\
}\
\
\]

"skus":\[\
\
{\
\
"skuid":\
\
"4936364425260"\
\
"specid":\
\
"48df1c8f09f1bfa97d55234bc9219b02"\
\
"sale\_price":\
\
"228.00"\
\
"origin\_price":\
\
"228.00"\
\
"stock":\
\
0\
\
"sale\_count":\
\
0\
\
"props\_ids":\
\
"0:3"\
\
"props\_names":\
\
"Color:60W/8寸声卡版双分频"\
\
}\
\
{\
\
"skuid":\
\
"4936364425262"\
\
"specid":\
\
"a32c993129011bef9bb6c6afb2bca989"\
\
"sale\_price":\
\
"299.00"\
\
"origin\_price":\
\
"299.00"\
\
"stock":\
\
5\
\
"sale\_count":\
\
0\
\
"props\_ids":\
\
"0:1"\
\
"props\_names":\
\
"Color:80W/8寸拉杆版双分频单麦克风"\
\
}\
\
{\
\
"skuid":\
\
"4936364425261"\
\
"specid":\
\
"038436256838b574ece0089edd01b128"\
\
"sale\_price":\
\
"248.00"\
\
"origin\_price":\
\
"248.00"\
\
"stock":\
\
5\
\
"sale\_count":\
\
0\
\
"props\_ids":\
\
"0:0"\
\
"props\_names":\
\
"Color:80W/8寸拉杆版双分频"\
\
}\
\
{\
\
"skuid":\
\
"4936364425263"\
\
"specid":\
\
"074099fa8933beb7c87979515e73878e"\
\
"sale\_price":\
\
"388.00"\
\
"origin\_price":\
\
"388.00"\
\
"stock":\
\
1\
\
"sale\_count":\
\
0\
\
"props\_ids":\
\
"0:2"\
\
"props\_names":\
\
"Color:100W/10寸拉杆版双分频单麦克风"\
\
}\
\
{\
\
"skuid":\
\
"4936364425264"\
\
"specid":\
\
"164be8d319604688bc3c4a836136cbbd"\
\
"sale\_price":\
\
"708.00"\
\
"origin\_price":\
\
"708.00"\
\
"stock":\
\
0\
\
"sale\_count":\
\
0\
\
"props\_ids":\
\
"0:4"\
\
"props\_names":\
\
"Color:120W/10寸声卡版三分频双金属话筒"\
\
}\
\
\]

"stock":

11

"promotions":\[\]

}

}

\# Failed to retrieve data, please try again or contact customer service.

\# Parameter error

\# Subscription expired or insufficient balance.

\# Please try again or set your request timeout to 60 seconds.

\# Unexpected error, please contact customer service.

\# API request concurrency limit exceeded, please reduce concurrency.
