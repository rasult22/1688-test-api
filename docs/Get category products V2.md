[Skip to main content](https://tmapi.top/docs/ali/category-apis/get-category-items-v2/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/category-apis/get-category-items-v2/\#api-overview "Direct link to API Overview")

- Retrieve 1688 products by category ID
- Support multilingual output
- Support sorting and filtering

## Basic Information [​](https://tmapi.top/docs/ali/category-apis/get-category-items-v2/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/category/items/v2

## Request Parameter [​](https://tmapi.top/docs/ali/category-apis/get-category-items-v2/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/category-apis/get-category-items-v2/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| language | string | Optional values: `en`,<br>`zh`,`ru`,`vi`,`ja`,<br>`ko`<br>Default value: en | false |
| cat\_id | integer | Category ID | **true** |
| page | integer | Page number<br>Default value: 1 | false |
| page\_size | integer | Number of items per page<br>Default value: 20 | false |
| sort | string | Optional values: `default`,`sales`,`price_up`,`price_down`<br>Default value: default | false |
| price\_start | string | Filter: Minimum value of price range | false |
| price\_end | string | Filter: Maximum value of price range | false |
| new\_arrival | boolean | Filter: New product | false |
| support\_dropshipping | boolean | Filter: Supports dropshipping | false |
| free\_shipping | boolean | Filter: Free shipping | false |
| is\_super\_factory | boolean |  | false |

### Body [​](https://tmapi.top/docs/ali/category-apis/get-category-items-v2/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/category-apis/get-category-items-v2/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/category-apis/get-category-items-v2/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/category/items/v2?apiToken=xxxxxx&language=en&cat_id=&page=1&page_size=20&sort=default",\
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
  url: 'http://api.tmapi.top/1688/category/items/v2',
  params: {
    apiToken: 'xxxxxx',
    language: 'en',
    cat_id: '',
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

url = "http://api.tmapi.top/1688/category/items/v2"

querystring = {"apiToken":"xxxxxx","language":"en","cat_id":"","page":1,"page_size":20,"sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/category/items/v2?apiToken=xxxxxx&language=en&cat_id=&page=1&page_size=20&sort=default"))
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

	url := "http://api.tmapi.top/1688/category/items/v2?apiToken=xxxxxx&language=en&cat_id=&page=1&page_size=20&sort=default"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/category-apis/get-category-items-v2/\#response-example "Direct link to Response Example")

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

""

"sort":

"default"

"cat\_id":

1031922

"filters":{}

"items":\[\
\
{\
\
"item\_id":\
\
991188728585\
\
"product\_url":\
\
"https://detail.1688.com/offer/991188728585.html"\
\
"title":\
\
"2817桃心太阳镜爱心太阳眼镜果冻色无框心型连体眼镜炫目色彩眼镜"\
\
"img":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01l1LMMu23dNfRuPnh4\_!!2219960167278-0-cib.jpg"\
\
"category\_path":\[\
\
"54"\
\
"80"\
\
\]\
\
"price":\
\
"0.60"\
\
"price\_info":{\
\
"price":\
\
"0.60"\
\
"sale\_price":\
\
"0.60"\
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
"1"\
\
"quantity\_begin":\
\
"1"\
\
"sale\_info":{\
\
"sale\_quantity\_90days":\
\
"100000+"\
\
}\
\
"delivery\_info":{\
\
"area\_from":\[\
\
"浙江"\
\
"台州市"\
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
"台州市路桥喜字电子商务商行"\
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
"4.0"\
\
}\
\
}\
\
"item\_repurchase\_rate":\
\
"60%"\
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
740842253828\
\
"product\_url":\
\
"https://detail.1688.com/offer/740842253828.html"\
\
"title":\
\
"2817桃心太阳镜爱心太阳眼镜果冻色无框心型连体眼镜炫目色彩眼镜"\
\
"img":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01ngamtu20DmPVLrYzO\_!!3961706816-0-cib.jpg"\
\
"category\_path":\[\
\
"54"\
\
"80"\
\
\]\
\
"price":\
\
"0.60"\
\
"price\_info":{\
\
"price":\
\
"0.60"\
\
"sale\_price":\
\
"0.60"\
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
"2"\
\
"quantity\_begin":\
\
"2"\
\
"sale\_info":{\
\
"sale\_quantity\_90days":\
\
"100000+"\
\
}\
\
"delivery\_info":{\
\
"area\_from":\[\
\
"浙江"\
\
"台州市"\
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
"临海市泉森眼镜有限公司"\
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
3\
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
"item\_repurchase\_rate":\
\
"57%"\
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
819097915075\
\
"product\_url":\
\
"https://detail.1688.com/offer/819097915075.html"\
\
"title":\
\
"心型眼镜工厂爱心眼镜糖果果冻色无框心型连体眼镜 炫目色彩眼镜"\
\
"img":\
\
"https://cbu01.alicdn.com/img/ibank/O1CN01F6AaZL2FUveROQEw9\_!!2218247818884-0-cib.jpg"\
\
"category\_path":\[\
\
"54"\
\
"80"\
\
\]\
\
"price":\
\
"0.65"\
\
"price\_info":{\
\
"price":\
\
"0.65"\
\
"sale\_price":\
\
"0.65"\
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
"2"\
\
"quantity\_begin":\
\
"2"\
\
"sale\_info":{\
\
"sale\_quantity\_90days":\
\
"100000+"\
\
}\
\
"delivery\_info":{\
\
"area\_from":\[\
\
"浙江"\
\
"台州市"\
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
"台州市爱昌眼镜有限公司"\
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
2\
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
"item\_repurchase\_rate":\
\
"49%"\
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
