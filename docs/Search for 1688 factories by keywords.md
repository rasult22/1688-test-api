[Skip to main content](https://tmapi.top/docs/ali/search/search-factories-by-keywords/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/search/search-factories-by-keywords/\#api-overview "Direct link to API Overview")

- Search for 1688 factories by keywords
- Support sorting and filtering
- [See More](https://tmapi.top/docs/ali/search/search-factories-by-keywords/#response-example)

## Basic Information [​](https://tmapi.top/docs/ali/search/search-factories-by-keywords/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/search/factories

## Request Parameter [​](https://tmapi.top/docs/ali/search/search-factories-by-keywords/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/search/search-factories-by-keywords/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| page | integer | Page number<br>Default value: 1 | false |
| page\_size | integer | Number of items per page<br>Default value: 20 | false |
| keywords | string | Search keywords | **true** |
| sort | string | Optional values: `default`,`repurchase_rate`<br>Default value: default | false |

### Body [​](https://tmapi.top/docs/ali/search/search-factories-by-keywords/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/search/search-factories-by-keywords/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/search/search-factories-by-keywords/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/search/factories?apiToken=xxxxxx&page=1&page_size=20&keywords=%E7%8E%A9%E5%85%B7%E5%8E%82&sort=default",\
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
  url: 'http://api.tmapi.top/1688/search/factories',
  params: {apiToken: 'xxxxxx', page: 1, page_size: 20, keywords: '玩具厂', sort: 'default'}
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

url = "http://api.tmapi.top/1688/search/factories"

querystring = {"apiToken":"xxxxxx","page":1,"page_size":20,"keywords":"玩具厂","sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/search/factories?apiToken=xxxxxx&page=1&page_size=20&keywords=%E7%8E%A9%E5%85%B7%E5%8E%82&sort=default"))
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

	url := "http://api.tmapi.top/1688/search/factories?apiToken=xxxxxx&page=1&page_size=20&keywords=%E7%8E%A9%E5%85%B7%E5%8E%82&sort=default"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/search/search-factories-by-keywords/\#response-example "Direct link to Response Example")

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

2

"page\_size":

3

"total\_count":

2000

"keywords":

"玩具厂"

"sort":

"default"

"items":\[\
\
{\
\
"login\_id":\
\
"嘉玩玩具厂"\
\
"member\_id":\
\
"b2b-2208087470531de12c"\
\
"userid":\
\
"b2b-2208087470531de12c"\
\
"company\_name":\
\
"汕头市澄海区嘉玩玩具厂"\
\
"factory\_url":\
\
"https://sale.1688.com/factory/card.html?\_\_existtitle\_\_=1&\_\_removesafearea\_\_=1&memberId=b2b-2208087470531de12c&aHdkaW5n\_isCentral=true&aHdkaW5n\_isGrayed=false&aHdkaW5n\_isUseGray=true&tracelog=p4p&\_p\_isad=1&cbu\_ad\_adgroup\_id=1012175526&cbu\_ad\_sessionid=8abf6de67a4f84a1ae99f562f3f5162e"\
\
"factory\_level":\
\
NULL\
\
"factory\_area\_size":\
\
"1000"\
\
"location":{\
\
"city":\
\
"汕头"\
\
}\
\
"service\_tags":\[\
\
"AA诚信等级"\
\
"塑料/塑胶"\
\
"注塑"\
\
"清加工"\
\
"汕头玩具"\
\
\]\
\
"product\_tags":\
\
"泡泡玩具;玩具枪"\
\
"invoice\_available":\
\
false\
\
"tp\_member":\
\
true\
\
"tp\_year":\
\
4\
\
"is\_factory":\
\
true\
\
"super\_factory":\
\
false\
\
"shop\_repurchase\_rate":\
\
"0.3"\
\
"response\_rate":\
\
"0.44"\
\
}\
\
{\
\
"login\_id":\
\
"精精玩具168"\
\
"member\_id":\
\
"b2b-22092767183650cbd8"\
\
"userid":\
\
"b2b-22092767183650cbd8"\
\
"company\_name":\
\
"汕头市澄海区精精玩具厂"\
\
"factory\_url":\
\
"https://sale.1688.com/factory/card.html?\_\_existtitle\_\_=1&\_\_removesafearea\_\_=1&memberId=b2b-22092767183650cbd8&aHdkaW5n\_isCentral=true&aHdkaW5n\_isGrayed=false&aHdkaW5n\_isUseGray=true"\
\
"factory\_level":\
\
"无牌工厂"\
\
"factory\_area\_size":\
\
"3000"\
\
"location":{\
\
"city":\
\
"汕头"\
\
}\
\
"service\_tags":\[\
\
"AAA诚信等级"\
\
"CCC认证"\
\
"abs"\
\
"清加工"\
\
"世界玩具之都"\
\
\]\
\
"product\_tags":\
\
"积木类;玩具枪;惯性回力玩具"\
\
"invoice\_available":\
\
true\
\
"tp\_member":\
\
true\
\
"tp\_year":\
\
3\
\
"is\_factory":\
\
true\
\
"super\_factory":\
\
false\
\
"shop\_repurchase\_rate":\
\
"0.42"\
\
"response\_rate":\
\
"0.66"\
\
}\
\
{\
\
"login\_id":\
\
"梦高玩具"\
\
"member\_id":\
\
"b2b-22118516378099ae41"\
\
"userid":\
\
"b2b-22118516378099ae41"\
\
"company\_name":\
\
"汕头市梦高玩具实业有限公司"\
\
"factory\_url":\
\
"https://sale.1688.com/factory/card.html?\_\_existtitle\_\_=1&\_\_removesafearea\_\_=1&memberId=b2b-22118516378099ae41&aHdkaW5n\_isCentral=true&aHdkaW5n\_isGrayed=false&aHdkaW5n\_isUseGray=true"\
\
"factory\_level":\
\
"金牌制造"\
\
"factory\_area\_size":\
\
"12000"\
\
"location":{\
\
"city":\
\
"汕头"\
\
}\
\
"service\_tags":\[\
\
"厂长在线"\
\
"深度验厂"\
\
"响应及时"\
\
"支持外贸订单"\
\
"abs"\
\
"包工包料"\
\
"世界玩具之都"\
\
\]\
\
"product\_tags":\
\
"积木类;大颗粒积木;玩具枪"\
\
"invoice\_available":\
\
true\
\
"tp\_member":\
\
true\
\
"tp\_year":\
\
3\
\
"is\_factory":\
\
true\
\
"super\_factory":\
\
true\
\
"shop\_repurchase\_rate":\
\
"0.51"\
\
"response\_rate":\
\
"0.87"\
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
