[Skip to main content](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-keyword/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-keyword/\#api-overview "Direct link to API Overview")

- Search for 1688 products by keywords
- Support multiple languages
- [See More](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-keyword/#response-example)

## Basic Information [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-keyword/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/global/search/items

## Request Parameter [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-keyword/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-keyword/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| page | integer | Page number<br>Default value: 1 | false |
| page\_size | integer | Number of items per page<br>Default value: 20 | false |
| keyword | string | Search keywords | false |
| language | string | Optional values: `en`,<br>`zh`,`ru`,`vi`,`ja`,<br>`ko`<br>Default value: en | false |
| sort | string | Optional values: `default`,`sales`,`price_up`,`price_down`<br>Default value: default | false |
| price\_start | string | Filter: Minimum value of price range | false |
| price\_end | string | Filter: Maximum value of price range | false |
| cat\_id | integer | Category ID | false |
| new\_arrival | boolean | Filter: New product | false |
| support\_dropshipping | boolean | Filter: Supports dropshipping | false |
| free\_shipping | boolean | Filter: Free shipping | false |
| is\_super\_factory | boolean |  | false |

tip

At least one of `keyword` or `cat_ids` is required.

### Body [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-keyword/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-keyword/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-keyword/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/global/search/items?apiToken=xxxxxx&page=1&page_size=20&keyword=%E9%A9%AC%E5%85%8B%E6%9D%AF&language=en&sort=default",\
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
  url: 'http://api.tmapi.top/1688/global/search/items',
  params: {
    apiToken: 'xxxxxx',
    page: 1,
    page_size: 20,
    keyword: '马克杯',
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

url = "http://api.tmapi.top/1688/global/search/items"

querystring = {"apiToken":"xxxxxx","page":1,"page_size":20,"keyword":"马克杯","language":"en","sort":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/global/search/items?apiToken=xxxxxx&page=1&page_size=20&keyword=%E9%A9%AC%E5%85%8B%E6%9D%AF&language=en&sort=default"))
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

	url := "http://api.tmapi.top/1688/global/search/items?apiToken=xxxxxx&page=1&page_size=20&keyword=%E9%A9%AC%E5%85%8B%E6%9D%AF&language=en&sort=default"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/multi-language-apis/search-items-by-keyword/\#response-example "Direct link to Response Example")

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

"has\_next\_page":

true

"sort":

"price\_up"

"filters":{}

"items":\[\
\
{\
\
"item\_id":\
\
"850588705676"\
\
"product\_url":\
\
"https://detail.1688.com/offer/850588705676.html"\
\
"title":\
\
"Cross Border DuPont Paper Jelly Bag Tote Bag Large Capacity PVC Waterproof Tote Bag Commuter Mommy Shoulder Bag"\
\
"title\_origin":\
\
"跨境杜邦纸果冻包 托特包 大容量PVC防水手提袋 通勤妈咪单肩包包"\
\
"img":\
\
"https://cbu01-overseas.1688.com/img/ibank/O1CN01gcU0Tq1f5tqLKLfHI\_!!2216856833956-0-cib.jpg"\
\
"price":\
\
"35.0"\
\
"price\_info":{\
\
"price":\
\
"35.0"\
\
"price\_min":\
\
"35.0"\
\
"price\_max":\
\
"35.0"\
\
}\
\
"currency":\
\
"CNY"\
\
"quantity\_begin":\
\
"1"\
\
"sale\_info":{\
\
"sale\_quantity\_90days":\
\
"2880"\
\
}\
\
"goods\_score":\
\
"5.0"\
\
"shop\_info":{\
\
"is\_gold\_manufacturer":\
\
false\
\
"is\_verified":\
\
false\
\
}\
\
"is\_free\_shipping":\
\
false\
\
"is\_new\_item":\
\
false\
\
"is\_hot\_item":\
\
false\
\
}\
\
{\
\
"item\_id":\
\
"811949286969"\
\
"product\_url":\
\
"https://detail.1688.com/offer/811949286969.html"\
\
"title":\
\
"70th Anniversary Dragon Bag Nylon Dumpling Bag Large Capacity Women's Bag Canvas Tote Bag Single Shoulder Handbag Dragon Bag"\
\
"title\_origin":\
\
"70周年龙骧包尼龙饺子包大容量女包包帆布托特包单肩手提包龙骧包"\
\
"img":\
\
"https://cbu01-overseas.1688.com/img/ibank/O1CN01O5qYiF1q5P7aAs7gm\_!!2217496155444-0-cib.jpg"\
\
"price":\
\
"54.0"\
\
"price\_info":{\
\
"price":\
\
"54.0"\
\
"price\_min":\
\
"54.0"\
\
"price\_max":\
\
"54.0"\
\
}\
\
"currency":\
\
"CNY"\
\
"quantity\_begin":\
\
"1"\
\
"sale\_info":{\
\
"sale\_quantity\_90days":\
\
"2235"\
\
}\
\
"goods\_score":\
\
"4.9"\
\
"shop\_info":{\
\
"is\_gold\_manufacturer":\
\
false\
\
"is\_verified":\
\
false\
\
}\
\
"is\_free\_shipping":\
\
false\
\
"is\_new\_item":\
\
false\
\
"is\_hot\_item":\
\
false\
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