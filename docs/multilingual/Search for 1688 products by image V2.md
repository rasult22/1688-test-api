[Skip to main content](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url-v2/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url-v2/\#api-overview "Direct link to API Overview")

- Search for 1688 products by image
- Supports more languages compared to V1
- Support sorting and filtering
- [See More](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url-v2/#response-example)

## Basic Information [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url-v2/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/global/search/image/v2

## Request Parameter [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url-v2/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url-v2/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| language | string | Optional values: `en`,<br>`zh`,`ru`,`vi`,`ja`,<br>`ko`<br>Default value: en | false |
| img\_url | string | Image URL | **true** |
| page | integer | Page number<br>Default value: 1 | false |
| page\_size | integer | Number of items per page<br>Default value: 20 | false |
| sort | string | Optional values: `default`,`sales`,`price_up`,`price_down`<br>Default value: default | false |
| price\_start | string | Filter: Minimum value of price range | false |
| price\_end | string | Filter: Maximum value of price range | false |
| support\_dropshipping | boolean | Filter: Supports dropshipping | false |
| is\_factory | boolean | Filter: Is factory | false |
| verified\_supplier | boolean | Filter: Verified supplier | false |
| free\_shipping | boolean | Filter: Free shipping | false |
| new\_arrival | boolean | Filter: New product | false |

### Body [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url-v2/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url-v2/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url-v2/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/global/search/image/v2?apiToken=xxxxxx&language=en&img_url=%2Fsearch%2Fimgextra5%2F1589508648580602236.jpg&page=1&page_size=20&sort=default",\
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
  url: 'http://api.tmapi.top/1688/global/search/image/v2',
  params: {
    apiToken: 'xxxxxx',
    language: 'en',
    img_url: '/search/imgextra5/1589508648580602236.jpg',
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

url = "http://api.tmapi.top/1688/global/search/image/v2"

querystring = {"apiToken":"xxxxxx","language":"en","img_url":"/search/imgextra5/1589508648580602236.jpg","page":1,"page_size":20,"sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/global/search/image/v2?apiToken=xxxxxx&language=en&img_url=%2Fsearch%2Fimgextra5%2F1589508648580602236.jpg&page=1&page_size=20&sort=default"))
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

	url := "http://api.tmapi.top/1688/global/search/image/v2?apiToken=xxxxxx&language=en&img_url=%2Fsearch%2Fimgextra5%2F1589508648580602236.jpg&page=1&page_size=20&sort=default"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-image-url-v2/\#response-example "Direct link to Response Example")

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

10

"total\_count":

688

"keyword":

""

"sort":

"default"

"cat\_id":

NULL

"filters":{

"price\_start":

"2"

}

"items":\[\
\
{\
\
"item\_id":\
\
908305897124\
\
"product\_url":\
\
"https://detail.1688.com/offer/908305897124.html"\
\
"title":\
\
"2024 New Yinxing Classmate Red Lotus Seed Glutinous Jianning Old Variety Red Lotus Seed Core White Lotus Seed 500g"\
\
"title\_origin":\
\
"2024年新印兴同学红花莲子糯建宁老品种红花莲子通芯白莲子500g"\
\
"img":\
\
"https://cbu01.alicdn.com/O1CN01OfUGyD2ILFvHYpyMS\_!!3264309269-0-cib.jpg"\
\
"category\_path":\[\
\
"130822002"\
\
"104"\
\
\]\
\
"price":\
\
"60.00"\
\
"price\_info":{\
\
"price":\
\
"60.00"\
\
"sale\_price":\
\
"60.00"\
\
"origin\_price":\
\
""\
\
}\
\
"currency":\
\
"CNY"\
\
"moq":\
\
NULL\
\
"sale\_info":{\
\
"sale\_quantity\_90days":\
\
"0"\
\
}\
\
"delivery\_info":{\
\
"area\_from":\[\
\
"福建"\
\
"三明市"\
\
\]\
\
"free\_shipping":\
\
false\
\
"ship\_in\_48h":\
\
false\
\
}\
\
"shop\_info":{\
\
"company\_name":\
\
"三明市润德电子商务有限公司"\
\
"is\_powerful\_seller":\
\
false\
\
"is\_super\_factory":\
\
false\
\
"shop\_years":\
\
9\
\
"score\_info":{\
\
"composite\_score":\
\
"4.0"\
\
}\
\
}\
\
"item\_repurchase\_rate":\
\
"0%"\
\
"low\_refund\_rate":\
\
false\
\
"ship\_in\_48h":\
\
false\
\
"one\_piece\_min\_order":\
\
false\
\
}\
\
{\
\
"item\_id":\
\
819919675160\
\
"product\_url":\
\
"https://detail.1688.com/offer/819919675160.html"\
\
"title":\
\
"Factory Fresh Lotus Seeds Cored White Lotus Dry Goods 500g Customized Wholesale Bagged Bulk Sulfur-Free White Lotus Seeds"\
\
"title\_origin":\
\
"工厂新鲜莲子去芯通芯白莲 干货500克定制批发袋装散装无硫白莲子"\
\
"img":\
\
"https://cbu01.alicdn.com/O1CN01o6YOrC2N1Aoq4PiO9\_!!2216045399902-0-cib.jpg"\
\
"category\_path":\[\
\
"130822002"\
\
"10020"\
\
\]\
\
"price":\
\
"40.80"\
\
"price\_info":{\
\
"price":\
\
"40.80"\
\
"sale\_price":\
\
"40.80"\
\
"origin\_price":\
\
""\
\
}\
\
"currency":\
\
"CNY"\
\
"moq":\
\
NULL\
\
"sale\_info":{\
\
"sale\_quantity\_90days":\
\
"3"\
\
}\
\
"delivery\_info":{\
\
"area\_from":\[\
\
"湖南"\
\
"湘潭市"\
\
\]\
\
"free\_shipping":\
\
false\
\
"ship\_in\_48h":\
\
false\
\
}\
\
"shop\_info":{\
\
"company\_name":\
\
"湘潭荣欣食品有限公司"\
\
"is\_powerful\_seller":\
\
true\
\
"is\_super\_factory":\
\
false\
\
"shop\_years":\
\
3\
\
"score\_info":{\
\
"composite\_score":\
\
"4.0"\
\
}\
\
}\
\
"item\_repurchase\_rate":\
\
"0%"\
\
"low\_refund\_rate":\
\
false\
\
"ship\_in\_48h":\
\
false\
\
"one\_piece\_min\_order":\
\
false\
\
}\
\
{\
\
"item\_id":\
\
923701239315\
\
"product\_url":\
\
"https://detail.1688.com/offer/923701239315.html"\
\
"title":\
\
"Jianning Lotus Seeds 250g Peeled White Lotus Seeds Sulfur-Free Natural Color Four Treasure Porridge Hehe Herbal Free Shipping"\
\
"title\_origin":\
\
"建宁莲子250克去皮心白莲建莲子无硫本色四宝粥禾和本草包邮"\
\
"img":\
\
"https://cbu01.alicdn.com/O1CN0189swY92JcUB9T4N4g\_!!649399442.jpg"\
\
"category\_path":\[\
\
"2"\
\
"201164002"\
\
\]\
\
"price":\
\
"54.69"\
\
"price\_info":{\
\
"price":\
\
"54.69"\
\
"sale\_price":\
\
"54.69"\
\
"origin\_price":\
\
""\
\
}\
\
"currency":\
\
"CNY"\
\
"moq":\
\
NULL\
\
"sale\_info":{\
\
"sale\_quantity\_90days":\
\
"0"\
\
}\
\
"delivery\_info":{\
\
"area\_from":\[\
\
"河北"\
\
"邢台市"\
\
\]\
\
"free\_shipping":\
\
false\
\
"ship\_in\_48h":\
\
true\
\
}\
\
"shop\_info":{\
\
"company\_name":\
\
"清河县怀驰贸易行"\
\
"is\_powerful\_seller":\
\
false\
\
"is\_super\_factory":\
\
false\
\
"shop\_years":\
\
1\
\
"score\_info":{\
\
"composite\_score":\
\
"3.5"\
\
}\
\
}\
\
"item\_repurchase\_rate":\
\
"0%"\
\
"low\_refund\_rate":\
\
false\
\
"ship\_in\_48h":\
\
true\
\
"one\_piece\_min\_order":\
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
