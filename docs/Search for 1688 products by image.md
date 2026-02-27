[Skip to main content](https://tmapi.top/docs/ali/search/search-items-by-image-url/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/search/search-items-by-image-url/\#api-overview "Direct link to API Overview")

- Search for 1688 products by image URL
- Support sorting and filtering
- [See More](https://tmapi.top/docs/ali/search/search-items-by-image-url/#response-example)

## Basic Information [​](https://tmapi.top/docs/ali/search/search-items-by-image-url/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/search/image

## Request Parameter [​](https://tmapi.top/docs/ali/search/search-items-by-image-url/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/search/search-items-by-image-url/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| img\_url | string | Image URL<br>**Only images from Alibaba-affiliated platforms can be identified.**<br>Non-Ali image needs to be converted using [Image URL conversion API](https://tmapi.top/docs/ali/tool-apis/image-url-convert) first, and then use the converted image URL to call this API. | **true** |
| page | integer | Page number<br>Default value: 1 | false |
| page\_size | integer | Number of items per page<br>Default value: 20<br>Max: 20. | false |
| sort | string | Optional values: `default`,`sales`,`price_up`,`price_down`<br>Default value: default | false |
| price\_start | string | Filter: Minimum value of price range | false |
| price\_end | string | Filter: Maximum value of price range | false |
| support\_dropshipping | boolean | Filter: Supports dropshipping | false |
| is\_factory | boolean | Filter: Is factory | false |
| verified\_supplier | boolean | Filter: Verified supplier | false |
| free\_shipping | boolean | Filter: Free shipping | false |
| new\_arrival | boolean | Filter: New product | false |

### Body [​](https://tmapi.top/docs/ali/search/search-items-by-image-url/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/search/search-items-by-image-url/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/search/search-items-by-image-url/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/search/image?apiToken=xxxxxx&img_url=https%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01Lnbnos2LkORtHhOVp_%21%213367999730-0-cib.jpg&page=1&page_size=20&sort=default",\
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
  url: 'http://api.tmapi.top/1688/search/image',
  params: {
    apiToken: 'xxxxxx',
    img_url: 'https://cbu01.alicdn.com/img/ibank/O1CN01Lnbnos2LkORtHhOVp_!!3367999730-0-cib.jpg',
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

url = "http://api.tmapi.top/1688/search/image"

querystring = {"apiToken":"xxxxxx","img_url":"https://cbu01.alicdn.com/img/ibank/O1CN01Lnbnos2LkORtHhOVp_!!3367999730-0-cib.jpg","page":1,"page_size":20,"sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/search/image?apiToken=xxxxxx&img_url=https%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01Lnbnos2LkORtHhOVp_%21%213367999730-0-cib.jpg&page=1&page_size=20&sort=default"))
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

	url := "http://api.tmapi.top/1688/search/image?apiToken=xxxxxx&img_url=https%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01Lnbnos2LkORtHhOVp_%21%213367999730-0-cib.jpg&page=1&page_size=20&sort=default"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/search/search-items-by-image-url/\#response-example "Direct link to Response Example")

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

680

"keyword":

""

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
983093623752\
\
"product\_url":\
\
"https://detail.1688.com/offer/983093623752.html"\
\
"title":\
\
"跨境外贸lulu男士同款运动长袖户外健身速干T恤弹力休闲上衣"\
\
"img":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01vGCPtN22CzDpG7RBW\_!!2210992147085-0-cib.jpg"\
\
"category\_path":\[\
\
"1031887"\
\
"127890013"\
\
"18"\
\
\]\
\
"price":\
\
"27.00"\
\
"price\_info":{\
\
"sale\_price":\
\
"27.00"\
\
"origin\_price":\
\
"27.00"\
\
}\
\
"moq":\
\
1\
\
"quantity\_prices":\[\]\
\
"sale\_info":{\
\
"sale\_quantity":\
\
"5160"\
\
"sale\_quantity\_int":\
\
5160\
\
"orders\_count":\
\
111\
\
}\
\
"delivery\_info":{\
\
"area\_from":\[\
\
"广东"\
\
"东莞市"\
\
\]\
\
}\
\
"item\_repurchase\_rate":\
\
"54%"\
\
"rating\_star":\
\
NULL\
\
"shop\_info":{\
\
"login\_id":\
\
"瑜佃工厂"\
\
"member\_id":\
\
"b2b-2210992147085de3df"\
\
"company\_name":\
\
"广东瑜佃供应链管理有限公司"\
\
"shop\_url":\
\
"http://gdytgc.1688.com?tracelog=p4p"\
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
"东莞市"\
\
\]\
\
"service\_tags":\
\
NULL\
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
}\
\
}\
\
"is\_ad":\
\
true\
\
}\
\
{\
\
"item\_id":\
\
969462626480\
\
"product\_url":\
\
"https://detail.1688.com/offer/969462626480.html"\
\
"title":\
\
"专业外贸工厂跨境定制亚欧美码简约棉涤休闲插肩袖圆领秋冬男卫衣"\
\
"img":\
\
"https://cbu01.alicdn.com/O1CN01mlPQyb1rrmigLQq2W\_!!2219127385685-0-cib.jpg"\
\
"category\_path":\[\
\
"1036995"\
\
"10165"\
\
\]\
\
"price":\
\
"80.00"\
\
"price\_info":{\
\
"sale\_price":\
\
"80.00"\
\
"origin\_price":\
\
"80.00"\
\
}\
\
"moq":\
\
1\
\
"quantity\_prices":\[\]\
\
"sale\_info":{\
\
"sale\_quantity":\
\
"0"\
\
"sale\_quantity\_int":\
\
0\
\
"orders\_count":\
\
0\
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
"42%"\
\
"rating\_star":\
\
NULL\
\
"shop\_info":{\
\
"login\_id":\
\
"广州牛恤服饰有限公司"\
\
"member\_id":\
\
"b2b-22191273856859f6d3"\
\
"company\_name":\
\
"广州牛恤服饰有限公司"\
\
"shop\_url":\
\
"http://shop179343015u765.1688.com"\
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
"service\_tags":\
\
NULL\
\
"shop\_years":\
\
1\
\
"factory\_inspection":\
\
false\
\
"score\_info":{\
\
"composite\_score":\
\
"4.5"\
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
964901961900\
\
"product\_url":\
\
"https://detail.1688.com/offer/964901961900.html"\
\
"title":\
\
"明格\|美式潮牌百搭拼接圆领卫衣男士秋季新款宽松休闲长袖上衣男"\
\
"img":\
\
"https://cbu01.alicdn.com/O1CN01cAb4CX1N4puhfi8ut\_!!2216055311517-0-cib.jpg"\
\
"category\_path":\[\
\
"1036995"\
\
"10165"\
\
\]\
\
"price":\
\
"51.00"\
\
"price\_info":{\
\
"sale\_price":\
\
"51.00"\
\
"origin\_price":\
\
"51.00"\
\
}\
\
"moq":\
\
1\
\
"quantity\_prices":\[\]\
\
"sale\_info":{\
\
"sale\_quantity":\
\
"88"\
\
"sale\_quantity\_int":\
\
88\
\
"orders\_count":\
\
79\
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
"46%"\
\
"rating\_star":\
\
NULL\
\
"shop\_info":{\
\
"login\_id":\
\
"广州明格服装"\
\
"member\_id":\
\
"b2b-221605531151756a4e"\
\
"company\_name":\
\
"广州市明格服装有限公司"\
\
"shop\_url":\
\
"http://shop6c79789c1c537.1688.com"\
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
"service\_tags":\
\
NULL\
\
"shop\_years":\
\
3\
\
"factory\_inspection":\
\
false\
\
"score\_info":{\
\
"composite\_score":\
\
"5.0"\
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

