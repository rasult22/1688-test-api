[Skip to main content](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url/\#api-overview "Direct link to API Overview")

- Search for 1688 products by image
- Support multiple languages

## Basic Information [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/global/search/image

## Request Parameter [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| img\_url | string | Image URL<br>**Only images from Alibaba-affiliated platforms can be identified.**<br>Non-Ali image needs to be converted using [Image URL conversion API](https://tmapi.top/docs/ali/tool-apis/image-url-convert) first, and then use the converted image URL to call this API. | **true** |
| page | integer | Page number<br>Default value: 1 | false |
| page\_size | integer | Number of items per page<br>Default value: 20<br>Max: 20. | false |
| language | string | Optional values: `en`,<br>`zh`,`ru`,`th`,`pt`,<br>`es`,`tr`,`vi`,`ja`,<br>`ko`<br>Default value: en | false |
| sort | string | Optional values: `default`,`sales`,`price_up`,`price_down`<br>Default value: default | false |
| support\_dropshipping | boolean | Filter: Supports dropshipping | false |
| is\_factory | boolean | Filter: Is factory | false |
| verified\_supplier | boolean | Filter: Verified supplier | false |
| free\_shipping | boolean | Filter: Free shipping | false |
| new\_arrival | boolean | Filter: New product | false |

### Body [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/global/search/image?apiToken=xxxxxx&img_url=https%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01Lnbnos2LkORtHhOVp_%21%213367999730-0-cib.jpg&page=1&page_size=20&language=en&sort=default",\
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
  url: 'http://api.tmapi.top/1688/global/search/image',
  params: {
    apiToken: 'xxxxxx',
    img_url: 'https://cbu01.alicdn.com/img/ibank/O1CN01Lnbnos2LkORtHhOVp_!!3367999730-0-cib.jpg',
    page: 1,
    page_size: 20,
    language: 'en',
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

url = "http://api.tmapi.top/1688/global/search/image"

querystring = {"apiToken":"xxxxxx","img_url":"https://cbu01.alicdn.com/img/ibank/O1CN01Lnbnos2LkORtHhOVp_!!3367999730-0-cib.jpg","page":1,"page_size":20,"language":"en","sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/global/search/image?apiToken=xxxxxx&img_url=https%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01Lnbnos2LkORtHhOVp_%21%213367999730-0-cib.jpg&page=1&page_size=20&language=en&sort=default"))
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

	url := "http://api.tmapi.top/1688/global/search/image?apiToken=xxxxxx&img_url=https%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01Lnbnos2LkORtHhOVp_%21%213367999730-0-cib.jpg&page=1&page_size=20&language=en&sort=default"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url/\#response-example "Direct link to Response Example")

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

"total\_count":

666

"sort":

"default"

"filters":{}

"items":\[\
\
{\
\
"item\_id":\
\
865835426638\
\
"product\_url":\
\
"https://detail.1688.com/offer/865835426638.html"\
\
"title":\
\
"Applicable to Huawei Folding Novaflip Bell N3 Bracelet Mix Phone Case P50pocket2 Protective Case Vflip"\
\
"title\_origin":\
\
"适用华为折叠Novaflip铃铛N3手绳Mix手机壳P50Pocket2保护套VFlip"\
\
"img":\
\
"https://cbu01.alicdn.com/O1CN01MJvUUV26UATGC9C8o\_!!2407317664-0-cib.jpg"\
\
"category\_path":\[\
\
"1042207"\
\
"50911"\
\
"7"\
\
\]\
\
"price":\
\
"19.00"\
\
"price\_info":{\
\
"drop\_ship\_price":\
\
"19.00"\
\
"wholesale\_price":\
\
"19.00"\
\
"origin\_price":\
\
"19.00"\
\
}\
\
"brand":\
\
"yot"\
\
"title\_tags":\[\
\
"1688严选"\
\
\]\
\
"quantity\_begin":\
\
1\
\
"quantity\_prices":\[\
\
{\
\
"begin\_num":\
\
"1"\
\
"end\_num":\
\
""\
\
"price":\
\
"19.00"\
\
}\
\
\]\
\
"sale\_info":{\
\
"gmv\_fuzzy":\
\
"50+"\
\
"gmv\_30days":\
\
0\
\
"gmv\_30days\_cb":\
\
0\
\
"sale\_quantity":\
\
27\
\
"sale\_quantity\_month":\
\
3\
\
"sale\_quantity\_90days":\
\
12\
\
"sale\_quantity\_360days":\
\
27\
\
"orders\_count":\
\
13\
\
}\
\
"type":\
\
"normal"\
\
"delivery\_info":{\
\
"area\_from":\[\
\
"Guangdong"\
\
"Futian District, Shenzhen"\
\
\]\
\
"weight":\
\
0\
\
"suttle\_weight":\
\
0\
\
"free\_postage":\
\
false\
\
}\
\
"item\_repurchase\_rate":\
\
"0.0"\
\
"goods\_score":\
\
2\
\
"image\_dsm\_score":\
\
0\
\
"primary\_rank\_score":\
\
0\
\
"super\_new\_product":\
\
false\
\
"shop\_info":{\
\
"login\_id":\
\
NULL\
\
"member\_id":\
\
"b2b-2407317664"\
\
"company\_name":\
\
"xxxxxx"\
\
"shop\_url":\
\
"http://880755.1688.com"\
\
"biz\_type":\
\
"生产加工"\
\
"is\_factory":\
\
true\
\
"is\_super\_factory":\
\
false\
\
"is\_gold\_supplier":\
\
false\
\
"location":\[\
\
"Guangdong"\
\
"Futian District, Shenzhen"\
\
\]\
\
"service\_tags":\[\
\
"7×24H响应"\
\
"先采后付"\
\
\]\
\
"tp\_member":\
\
true\
\
"tp\_year":\
\
11\
\
"factory\_inspection":\
\
false\
\
"shop\_repurchase\_rate":\
\
"11.2%"\
\
}\
\
}\
\
{\
\
"item\_id":\
\
866011508042\
\
"product\_url":\
\
"https://detail.1688.com/offer/866011508042.html"\
\
"title":\
\
"Applicable to Huawei P50pocket Mobile Phone Shell Folding Screen Pocket2 Red Polka Dot Bow Bracelet Protective Cover"\
\
"title\_origin":\
\
"适用华为P50Pocket手机壳折叠屏Pocket2红色波点蝴蝶结手链保护套"\
\
"img":\
\
"https://cbu01.alicdn.com/O1CN01yNpkgG1BxXm6UG4jT\_!!2923750012-0-cib.jpg"\
\
"category\_path":\[\
\
"1042207"\
\
"50911"\
\
"7"\
\
\]\
\
"price":\
\
"20.00"\
\
"price\_info":{\
\
"drop\_ship\_price":\
\
"12.00"\
\
"wholesale\_price":\
\
"20.00"\
\
"origin\_price":\
\
"20.00"\
\
}\
\
"brand":\
\
"中性"\
\
"title\_tags":\[\]\
\
"quantity\_begin":\
\
2\
\
"quantity\_prices":\[\]\
\
"sale\_info":{\
\
"gmv\_fuzzy":\
\
"40+"\
\
"gmv\_30days":\
\
0\
\
"gmv\_30days\_cb":\
\
0\
\
"sale\_quantity":\
\
18\
\
"sale\_quantity\_month":\
\
2\
\
"sale\_quantity\_90days":\
\
14\
\
"sale\_quantity\_360days":\
\
18\
\
"orders\_count":\
\
5\
\
}\
\
"type":\
\
"normal"\
\
"delivery\_info":{\
\
"area\_from":\[\
\
"Guangdong"\
\
"Bao'an District, Shenzhen City"\
\
\]\
\
"weight":\
\
0\
\
"suttle\_weight":\
\
0\
\
"free\_postage":\
\
false\
\
}\
\
"item\_repurchase\_rate":\
\
"0.5"\
\
"goods\_score":\
\
2\
\
"image\_dsm\_score":\
\
0\
\
"primary\_rank\_score":\
\
0\
\
"super\_new\_product":\
\
false\
\
"shop\_info":{\
\
"login\_id":\
\
NULL\
\
"member\_id":\
\
"b2b-2923750012d6f68"\
\
"company\_name":\
\
"xxxxxx"\
\
"shop\_url":\
\
"http://keshentai.1688.com"\
\
"biz\_type":\
\
"生产加工"\
\
"is\_factory":\
\
false\
\
"is\_super\_factory":\
\
false\
\
"is\_gold\_supplier":\
\
false\
\
"location":\[\
\
"Guangdong"\
\
"Bao'an District, Shenzhen City"\
\
\]\
\
"service\_tags":\[\]\
\
"tp\_member":\
\
true\
\
"tp\_year":\
\
9\
\
"factory\_inspection":\
\
false\
\
"shop\_repurchase\_rate":\
\
"29.2%"\
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
