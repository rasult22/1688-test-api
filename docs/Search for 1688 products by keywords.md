[Skip to main content](https://tmapi.top/docs/ali/search/search-items-by-keyword/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/search/search-items-by-keyword/\#api-overview "Direct link to API Overview")

- Search for 1688 products by keywords
- Support sorting and filtering
- [See More](https://tmapi.top/docs/ali/search/search-items-by-keyword/#response-example)

## Basic Information [​](https://tmapi.top/docs/ali/search/search-items-by-keyword/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/search/items

## Request Parameter [​](https://tmapi.top/docs/ali/search/search-items-by-keyword/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/search/search-items-by-keyword/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| page | integer | Page number<br>Default value: 1 | false |
| page\_size | integer | Number of items per page<br>Default value: 20<br>Max: 20. | false |
| keyword | string | Search keywords | **true** |
| sort | string | Optional values: `default`,`sales`,`price_up`,`price_down`<br>Default value: default | false |
| moq | integer |  | false |
| price\_start | string | Filter: Minimum value of price range | false |
| price\_end | string | Filter: Maximum value of price range | false |
| new\_arrival | boolean | Filter: New product | false |
| support\_dropshipping | boolean | Filter: Supports dropshipping | false |
| free\_shipping | boolean | Filter: Free shipping | false |
| is\_super\_factory | boolean |  | false |

### Body [​](https://tmapi.top/docs/ali/search/search-items-by-keyword/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/search/search-items-by-keyword/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/search/search-items-by-keyword/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/search/items?apiToken=xxxxxx&page=1&page_size=20&keyword=%E9%A9%AC%E5%85%8B%E6%9D%AF&sort=default",\
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
  url: 'http://api.tmapi.top/1688/search/items',
  params: {apiToken: 'xxxxxx', page: 1, page_size: 20, keyword: '马克杯', sort: 'default'}
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

url = "http://api.tmapi.top/1688/search/items"

querystring = {"apiToken":"xxxxxx","page":1,"page_size":20,"keyword":"马克杯","sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/search/items?apiToken=xxxxxx&page=1&page_size=20&keyword=%E9%A9%AC%E5%85%8B%E6%9D%AF&sort=default"))
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

	url := "http://api.tmapi.top/1688/search/items?apiToken=xxxxxx&page=1&page_size=20&keyword=%E9%A9%AC%E5%85%8B%E6%9D%AF&sort=default"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/search/search-items-by-keyword/\#response-example "Direct link to Response Example")

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

20

"total\_count":

2000

"keyword":

"男士T恤"

"sort":

"default"

"cat\_id":

NULL

"filters":{}

"items":\[\
\
{\
\
"item\_id":\
\
973927556856\
\
"product\_url":\
\
"https://detail.1688.com/offer/973927556856.html"\
\
"title":\
\
"【高端系列】双面液氨丝光&80高支莱赛尔长袖T恤男士纯色高端上衣"\
\
"img":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01BJ7AAS1YRF4K6UTS4\_!!2209657723055-0-cib.jpg"\
\
"category\_path":\[\
\
"315"\
\
"10165"\
\
\]\
\
"price":\
\
"56"\
\
"price\_info":{\
\
"sale\_price":\
\
"56"\
\
"origin\_price":\
\
NULL\
\
}\
\
"moq":\
\
2\
\
"quantity\_prices":\[\
\
{\
\
"begin\_num":\
\
2\
\
"end\_num":\
\
199\
\
"price":\
\
"56.00"\
\
}\
\
{\
\
"begin\_num":\
\
200\
\
"end\_num":\
\
499\
\
"price":\
\
"55.00"\
\
}\
\
{\
\
"begin\_num":\
\
500\
\
"end\_num":\
\
NULL\
\
"price":\
\
"54.00"\
\
}\
\
\]\
\
"sale\_info":{\
\
"sale\_quantity":\
\
"已售300+件"\
\
"sale\_quantity\_int":\
\
300\
\
"orders\_count":\
\
271\
\
}\
\
"delivery\_info":{\
\
"area\_from":\[\
\
"广东"\
\
"广州市"\
\
\]\
\
}\
\
"item\_repurchase\_rate":\
\
"12%"\
\
"rating\_star":\
\
"3.0"\
\
"shop\_info":{\
\
"login\_id":\
\
"广州淘圣男装有限公司"\
\
"member\_id":\
\
"b2b-2209657723055e41d3"\
\
"company\_name":\
\
"广州淘圣制衣有限公司"\
\
"shop\_url":\
\
"http://shop5o52040l89801.1688.com"\
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
"location":\[\
\
"广东"\
\
"广州市"\
\
\]\
\
"service\_tags":\[\
\
"深度验厂"\
\
\]\
\
"shop\_years":\
\
6\
\
"factory\_inspection":\
\
true\
\
"score\_info":{\
\
"composite\_score":\
\
"4.0"\
\
"consultation\_score":\
\
"4.0"\
\
"dispute\_score":\
\
"4.0"\
\
"logistics\_score":\
\
"4.0"\
\
"return\_score":\
\
"3.33"\
\
}\
\
}\
\
"is\_ad":\
\
false\
\
}\
\
{\
\
"item\_id":\
\
915310259717\
\
"product\_url":\
\
"https://detail.1688.com/offer/915310259717.html"\
\
"title":\
\
"夏季短袖T恤男士新款纯色圆领半袖上衣青年休闲百搭打底潮牌体恤"\
\
"img":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01BjeeDf1ulmL44FKMD\_!!2219543586078-0-cib.jpg"\
\
"category\_path":\[\
\
"315"\
\
"10165"\
\
\]\
\
"price":\
\
"8.9"\
\
"price\_info":{\
\
"sale\_price":\
\
"8.9"\
\
"origin\_price":\
\
NULL\
\
}\
\
"moq":\
\
1\
\
"quantity\_prices":\[\
\
{\
\
"begin\_num":\
\
1\
\
"end\_num":\
\
999\
\
"price":\
\
"8.90"\
\
}\
\
{\
\
"begin\_num":\
\
1000\
\
"end\_num":\
\
9999\
\
"price":\
\
"8.40"\
\
}\
\
{\
\
"begin\_num":\
\
10000\
\
"end\_num":\
\
NULL\
\
"price":\
\
"7.90"\
\
}\
\
\]\
\
"sale\_info":{\
\
"sale\_quantity":\
\
"已售200+件"\
\
"sale\_quantity\_int":\
\
200\
\
"orders\_count":\
\
133\
\
}\
\
"delivery\_info":{\
\
"area\_from":\[\
\
"广东"\
\
"揭阳市"\
\
\]\
\
}\
\
"item\_repurchase\_rate":\
\
"9%"\
\
"rating\_star":\
\
"2.33"\
\
"shop\_info":{\
\
"login\_id":\
\
"悦装服装实业有限公司"\
\
"member\_id":\
\
"b2b-221954358607802711"\
\
"company\_name":\
\
"揭阳市悦装服装实业有限公司"\
\
"shop\_url":\
\
"http://shop511x48z085525.1688.com"\
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
true\
\
"location":\[\
\
"广东"\
\
"揭阳市"\
\
\]\
\
"service\_tags":\[\
\
"深度验厂"\
\
\]\
\
"shop\_years":\
\
1\
\
"factory\_inspection":\
\
true\
\
"score\_info":{\
\
"composite\_score":\
\
"4.0"\
\
"consultation\_score":\
\
"2.0"\
\
"dispute\_score":\
\
"4.0"\
\
"logistics\_score":\
\
"3.43"\
\
"return\_score":\
\
"4.67"\
\
}\
\
}\
\
"is\_ad":\
\
false\
\
}\
\
{\
\
"item\_id":\
\
807891725157\
\
"product\_url":\
\
"https://detail.1688.com/offer/807891725157.html"\
\
"title":\
\
"男士短袖t恤冰丝短袖男T恤衫夏季圆领打底衫休闲百搭帅气短t恤男"\
\
"img":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01hRRR7b29pBJfx3iGE\_!!2213001588116-0-cib.jpg"\
\
"category\_path":\[\
\
"315"\
\
"10165"\
\
\]\
\
"price":\
\
"6"\
\
"price\_info":{\
\
"sale\_price":\
\
"6"\
\
"origin\_price":\
\
NULL\
\
}\
\
"moq":\
\
NULL\
\
"quantity\_prices":\[\]\
\
"sale\_info":{\
\
"sale\_quantity":\
\
"全网4.1万+件"\
\
"sale\_quantity\_int":\
\
41000\
\
"orders\_count":\
\
2043\
\
}\
\
"delivery\_info":{\
\
"area\_from":\[\
\
"广东"\
\
"揭阳市"\
\
\]\
\
}\
\
"item\_repurchase\_rate":\
\
"8%"\
\
"rating\_star":\
\
"2.67"\
\
"shop\_info":{\
\
"login\_id":\
\
"天勤服装厂"\
\
"member\_id":\
\
"b2b-2213001588116f72ee"\
\
"company\_name":\
\
"揭阳市巨牛服饰有限公司"\
\
"shop\_url":\
\
"http://shop522427252cui2.1688.com"\
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
true\
\
"location":\[\
\
"广东"\
\
"揭阳市"\
\
\]\
\
"service\_tags":\[\
\
"深度验厂"\
\
\]\
\
"shop\_years":\
\
5\
\
"factory\_inspection":\
\
true\
\
"score\_info":{\
\
"composite\_score":\
\
"4.5"\
\
"consultation\_score":\
\
"4.0"\
\
"dispute\_score":\
\
"4.0"\
\
"logistics\_score":\
\
"3.43"\
\
"return\_score":\
\
"4.67"\
\
}\
\
}\
\
"is\_ad":\
\
false\
\
}\
\
\]

"has\_next\_page":

true

}

}

\# Failed to retrieve data, please try again or contact customer service.

\# Parameter error

\# Subscription expired or insufficient balance.

\# Please try again or set your request timeout to 60 seconds.

\# Unexpected error, please contact customer service.

\# API request concurrency limit exceeded, please reduce concurrency.

