[Skip to main content](https://tmapi.top/docs/ali/item-detail/get-item-detail-by-url/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/item-detail/get-item-detail-by-url/\#api-overview "Direct link to API Overview")

- Get 1688 product details by product URL
- Includes title, images, shop, SKU, price, inventory and other information
- Support multilingual output

## Basic Information [​](https://tmapi.top/docs/ali/item-detail/get-item-detail-by-url/\#basic-information "Direct link to Basic Information")

API URL

POST

http://api.tmapi.top/1688/item\_detail\_by\_url

## Request Parameter [​](https://tmapi.top/docs/ali/item-detail/get-item-detail-by-url/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/item-detail/get-item-detail-by-url/\#query "Direct link to Query")

### Body [​](https://tmapi.top/docs/ali/item-detail/get-item-detail-by-url/\#body "Direct link to Body")

> Content-Type: application/json

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| url | string | Product URL | **true** |
| scene |  | price type | false |
| optimize\_title | boolean | Filter out non-core words from the title. This is more friendly to the translator. Only Chinese titles are supported for optimization. | false |
| language |  | Default value: zh | false |

## Security Auth [​](https://tmapi.top/docs/ali/item-detail/get-item-detail-by-url/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/item-detail/get-item-detail-by-url/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/item_detail_by_url?apiToken=xxxxxx",\
  CURLOPT_RETURNTRANSFER => true,\
  CURLOPT_ENCODING => "",\
  CURLOPT_MAXREDIRS => 10,\
  CURLOPT_TIMEOUT => 30,\
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\
  CURLOPT_CUSTOMREQUEST => "POST",\
  CURLOPT_POSTFIELDS => json_encode([\
    'url' => 'https://detail.1688.com/offer/652702302959.html',\
    'language' => 'zh'\
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
  url: 'http://api.tmapi.top/1688/item_detail_by_url',
  params: {apiToken: 'xxxxxx'},
  headers: {'Content-Type': 'application/json'},
  data: {url: 'https://detail.1688.com/offer/652702302959.html', language: 'zh'}
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

url = "http://api.tmapi.top/1688/item_detail_by_url"

querystring = {"apiToken":"xxxxxx"}

payload = {
    "url": "https://detail.1688.com/offer/652702302959.html",
    "language": "zh"
}

response = requests.post(url, json=payload, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/item_detail_by_url?apiToken=xxxxxx"))
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

	url := "http://api.tmapi.top/1688/item_detail_by_url?apiToken=xxxxxx"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/item-detail/get-item-detail-by-url/\#response-example "Direct link to Response Example")

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

859086919394

"product\_url":

"https://detail.1688.com/offer/859086919394.html"

"title":

"跨境速卖通女式长款睡衣家居服豹纹款开衫法式浴袍长袖秋冬睡袍"

"category\_id":

1037924

"root\_category\_id":

312

"currency":

"CNY"

"offer\_unit":

"件"

"product\_props":\[\
\
{\
\
"产品类别":\
\
"睡衣"\
\
}\
\
{\
\
"面料名称":\
\
"网纱"\
\
}\
\
{\
\
"款式":\
\
"开衫"\
\
}\
\
{\
\
"主面料成分":\
\
"聚酯纤维（涤纶）"\
\
}\
\
{\
\
"厚薄":\
\
"中等"\
\
}\
\
{\
\
"面料厚薄（克重）":\
\
"适中(141-160克/平米)"\
\
}\
\
{\
\
"领型":\
\
"V字领"\
\
}\
\
{\
\
"袖长":\
\
"九分袖"\
\
}\
\
{\
\
"功能":\
\
"休闲,透气,情趣,居家,舒适"\
\
}\
\
{\
\
"上市时间":\
\
"2024年冬季"\
\
}\
\
{\
\
"适合季节":\
\
"夏季,冬季,春季,秋季,四季通用"\
\
}\
\
{\
\
"适用人群类别":\
\
"青年女性"\
\
}\
\
{\
\
"适用场景":\
\
"户外,居家"\
\
}\
\
{\
\
"颜色":\
\
"黄色豹纹,白色豹纹,肤色豹纹"\
\
}\
\
{\
\
"尺码":\
\
"S,M,L"\
\
}\
\
{\
\
"品牌":\
\
"其他"\
\
}\
\
{\
\
"产地":\
\
"灌云"\
\
}\
\
{\
\
"货号":\
\
"Y5106"\
\
}\
\
{\
\
"是否跨境出口专供货源":\
\
"是"\
\
}\
\
{\
\
"主面料成分含量":\
\
"30%（含）-50%（不含）"\
\
}\
\
{\
\
"风格":\
\
"欧美风"\
\
}\
\
\]

"main\_imgs":\[\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01gEiAAA1tfzhab0NhS\_!!2214636595930-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01zbvscc1tfzgUMxRU9\_!!2214636595930-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01U64N8h1tfzgajTOqp\_!!2214636595930-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01OWDvGr1tfzgZTutIr\_!!2214636595930-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01pc1OQP1tfzgaYrxTZ\_!!2214636595930-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01zTDmhr1tfzgairTNV\_!!2214636595930-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01sYHVBG1tfzgatNoUe\_!!2214636595930-0-cib.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01RA4Ktf1tfzgcrZotc\_!!2214636595930-0-cib.jpg"\
\
\]

"video\_url":

"https://cloud.video.taobao.com/play/u/2214636595930/p/2/e/6/t/1/506402967489.mp4"

"detail\_url":

"https://itemcdn.tmall.com/1688offer/icoss598189538ad1d6828b1d4e2a8"

"sale\_count":

"175"

"sale\_info":{

"sale\_quantity\_90days":

175

}

"price\_info":{

"price":

"25.90"

"price\_min":

"25.90"

"price\_max":

"29.89"

"origin\_price\_min":

NULL

"origin\_price\_max":

NULL

"discount\_price":

""

}

"tiered\_price\_info":{

"begin\_num":

1

"prices":\[\
\
{\
\
"beginAmount":\
\
"1"\
\
"price":\
\
"29.89"\
\
}\
\
{\
\
"beginAmount":\
\
"100"\
\
"price":\
\
"27.60"\
\
}\
\
{\
\
"beginAmount":\
\
"300"\
\
"price":\
\
"25.90"\
\
}\
\
\]

}

"mixed\_batch":{

"mix\_amount":

10000

"mix\_begin":

0

"mix\_num":

1000

"shop\_mix\_num":

2147483647

}

"shop\_info":{

"shop\_name":

"灌云县伊山镇春霞服装厂"

"shop\_url":

"https://winport.m.1688.com/page/index.html?memberId=b2b-22146365959302bc20"

"seller\_login\_id":

"灌云县伊山镇春霞服装厂"

"seller\_user\_id":

"2214636595930"

"seller\_member\_id":

"b2b-22146365959302bc20"

}

"delivery\_info":{

"location":

"江苏省连云港市"

"location\_code":

"34323526"

"delivery\_fee":

4

"unit\_weight":

0

"template\_id":

"16519567"

}

"service\_tags":\[\
\
"7天无理由退货"\
\
"晚发必赔"\
\
\]

"sku\_price\_scale":

"25.90-29.89"

"sku\_price\_scale\_original":

"null"

"sku\_price\_range":{

"begin\_num":

1

"stock":

44732

"sku\_param":\[\
\
{\
\
"beginAmount":\
\
"1"\
\
"price":\
\
"29.89"\
\
}\
\
{\
\
"beginAmount":\
\
"100"\
\
"price":\
\
"27.60"\
\
}\
\
{\
\
"beginAmount":\
\
"300"\
\
"price":\
\
"25.90"\
\
}\
\
\]

"mix\_param":{

"mixNum":

1000

"mixAmount":

10000

"shopMixNum":

2147483647

"mixBegin":

0

"supportMix":

true

}

}

"sku\_props":\[\
\
{\
\
"pid":\
\
"0"\
\
"prop\_name":\
\
"颜色"\
\
"values":\[\
\
{\
\
"vid":\
\
"0"\
\
"name":\
\
"黄色豹纹"\
\
"imageUrl":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01RA4Ktf1tfzgcrZotc\_!!2214636595930-0-cib.jpg"\
\
}\
\
{\
\
"vid":\
\
"1"\
\
"name":\
\
"白色豹纹"\
\
"imageUrl":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01zTDmhr1tfzgairTNV\_!!2214636595930-0-cib.jpg"\
\
}\
\
{\
\
"vid":\
\
"2"\
\
"name":\
\
"肤色豹纹"\
\
"imageUrl":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01sYHVBG1tfzgatNoUe\_!!2214636595930-0-cib.jpg"\
\
}\
\
\]\
\
}\
\
{\
\
"pid":\
\
"1"\
\
"prop\_name":\
\
"尺码"\
\
"values":\[\
\
{\
\
"vid":\
\
"0"\
\
"name":\
\
"S"\
\
"imageUrl":\
\
""\
\
}\
\
{\
\
"vid":\
\
"1"\
\
"name":\
\
"M"\
\
"imageUrl":\
\
""\
\
}\
\
{\
\
"vid":\
\
"2"\
\
"name":\
\
"L"\
\
"imageUrl":\
\
""\
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
"5674557541674"\
\
"specid":\
\
"6f5320c016c03d575ad1034b79869a28"\
\
"sale\_price":\
\
"29.89"\
\
"origin\_price":\
\
NULL\
\
"stock":\
\
4975\
\
"props\_ids":\
\
"0:1;1:2"\
\
"props\_names":\
\
"颜色:白色豹纹;尺码:L"\
\
"sale\_count":\
\
0\
\
"package\_info":{\
\
"weight":\
\
0.12\
\
"length":\
\
0\
\
"width":\
\
0\
\
"height":\
\
0\
\
"volume":\
\
0\
\
}\
\
}\
\
{\
\
"skuid":\
\
"5674557541667"\
\
"specid":\
\
"bdcae134f48c5b5edfdffb3e79612418"\
\
"sale\_price":\
\
"29.89"\
\
"origin\_price":\
\
NULL\
\
"stock":\
\
4996\
\
"props\_ids":\
\
"0:2;1:0"\
\
"props\_names":\
\
"颜色:肤色豹纹;尺码:S"\
\
"sale\_count":\
\
0\
\
"package\_info":{\
\
"weight":\
\
0.12\
\
"length":\
\
0\
\
"width":\
\
0\
\
"height":\
\
0\
\
"volume":\
\
0\
\
}\
\
}\
\
{\
\
"skuid":\
\
"5674557541669"\
\
"specid":\
\
"c36b443e8f1551db7843a489cc62ca1f"\
\
"sale\_price":\
\
"29.89"\
\
"origin\_price":\
\
NULL\
\
"stock":\
\
4966\
\
"props\_ids":\
\
"0:0;1:0"\
\
"props\_names":\
\
"颜色:黄色豹纹;尺码:S"\
\
"sale\_count":\
\
0\
\
"package\_info":{\
\
"weight":\
\
0.12\
\
"length":\
\
0\
\
"width":\
\
0\
\
"height":\
\
0\
\
"volume":\
\
0\
\
}\
\
}\
\
{\
\
"skuid":\
\
"5674557541671"\
\
"specid":\
\
"67fabdabdec80a01cb571951061d314f"\
\
"sale\_price":\
\
"29.89"\
\
"origin\_price":\
\
NULL\
\
"stock":\
\
4991\
\
"props\_ids":\
\
"0:1;1:1"\
\
"props\_names":\
\
"颜色:白色豹纹;尺码:M"\
\
"sale\_count":\
\
0\
\
"package\_info":{\
\
"weight":\
\
0.12\
\
"length":\
\
0\
\
"width":\
\
0\
\
"height":\
\
0\
\
"volume":\
\
0\
\
}\
\
}\
\
{\
\
"skuid":\
\
"5674557541675"\
\
"specid":\
\
"2e4af15b48d5e0426c9fb9b30311e944"\
\
"sale\_price":\
\
"29.89"\
\
"origin\_price":\
\
NULL\
\
"stock":\
\
4872\
\
"props\_ids":\
\
"0:0;1:2"\
\
"props\_names":\
\
"颜色:黄色豹纹;尺码:L"\
\
"sale\_count":\
\
0\
\
"package\_info":{\
\
"weight":\
\
0.12\
\
"length":\
\
0\
\
"width":\
\
0\
\
"height":\
\
0\
\
"volume":\
\
0\
\
}\
\
}\
\
{\
\
"skuid":\
\
"5674557541672"\
\
"specid":\
\
"19e11750558f8465d67e7da1fbda7afe"\
\
"sale\_price":\
\
"29.89"\
\
"origin\_price":\
\
NULL\
\
"stock":\
\
4948\
\
"props\_ids":\
\
"0:0;1:1"\
\
"props\_names":\
\
"颜色:黄色豹纹;尺码:M"\
\
"sale\_count":\
\
0\
\
"package\_info":{\
\
"weight":\
\
0.12\
\
"length":\
\
0\
\
"width":\
\
0\
\
"height":\
\
0\
\
"volume":\
\
0\
\
}\
\
}\
\
{\
\
"skuid":\
\
"5674557541668"\
\
"specid":\
\
"ddc44276e54d3bce6c16f7e9dd785b38"\
\
"sale\_price":\
\
"29.89"\
\
"origin\_price":\
\
NULL\
\
"stock":\
\
4997\
\
"props\_ids":\
\
"0:1;1:0"\
\
"props\_names":\
\
"颜色:白色豹纹;尺码:S"\
\
"sale\_count":\
\
0\
\
"package\_info":{\
\
"weight":\
\
0.12\
\
"length":\
\
0\
\
"width":\
\
0\
\
"height":\
\
0\
\
"volume":\
\
0\
\
}\
\
}\
\
{\
\
"skuid":\
\
"5674557541673"\
\
"specid":\
\
"592510a700d02b945eb5f96e6b3e55fd"\
\
"sale\_price":\
\
"29.89"\
\
"origin\_price":\
\
NULL\
\
"stock":\
\
4992\
\
"props\_ids":\
\
"0:2;1:2"\
\
"props\_names":\
\
"颜色:肤色豹纹;尺码:L"\
\
"sale\_count":\
\
0\
\
"package\_info":{\
\
"weight":\
\
0.12\
\
"length":\
\
0\
\
"width":\
\
0\
\
"height":\
\
0\
\
"volume":\
\
0\
\
}\
\
}\
\
{\
\
"skuid":\
\
"5674557541670"\
\
"specid":\
\
"96c1c66eeb4dcead3fc716bfabb1d236"\
\
"sale\_price":\
\
"29.89"\
\
"origin\_price":\
\
NULL\
\
"stock":\
\
4995\
\
"props\_ids":\
\
"0:2;1:1"\
\
"props\_names":\
\
"颜色:肤色豹纹;尺码:M"\
\
"sale\_count":\
\
0\
\
"package\_info":{\
\
"weight":\
\
0.12\
\
"length":\
\
0\
\
"width":\
\
0\
\
"height":\
\
0\
\
"volume":\
\
0\
\
}\
\
}\
\
\]

"is\_sold\_out":

false

"stock":

44732

"promotions":\[\]

}

}

\# Failed to retrieve data, please try again or contact customer service.

\# Parameter error

\# Subscription expired or insufficient balance.

\# Please try again or set your request timeout to 60 seconds.

\# Unexpected error, please contact customer service.

\# API request concurrency limit exceeded, please reduce concurrency.
