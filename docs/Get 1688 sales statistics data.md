[Skip to main content](https://tmapi.top/docs/ali/item-detail/get-sales-statistics-data/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/item-detail/get-sales-statistics-data/\#api-overview "Direct link to API Overview")

- Get product historical sales trend
- Get product historical price trend

## Basic Information [​](https://tmapi.top/docs/ali/item-detail/get-sales-statistics-data/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/item/statistics/sales

## Request Parameter [​](https://tmapi.top/docs/ali/item-detail/get-sales-statistics-data/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/item-detail/get-sales-statistics-data/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| item\_id | integer | Product ID | **true** |
| spec\_id | string | sku spec id | false |

### Body [​](https://tmapi.top/docs/ali/item-detail/get-sales-statistics-data/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/item-detail/get-sales-statistics-data/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/item-detail/get-sales-statistics-data/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/item/statistics/sales?apiToken=xxxxxx&item_id=652702302959",\
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
  url: 'http://api.tmapi.top/1688/item/statistics/sales',
  params: {apiToken: 'xxxxxx', item_id: 652702302959}
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

url = "http://api.tmapi.top/1688/item/statistics/sales"

querystring = {"apiToken":"xxxxxx","item_id":652702302959}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/item/statistics/sales?apiToken=xxxxxx&item_id=652702302959"))
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

	url := "http://api.tmapi.top/1688/item/statistics/sales?apiToken=xxxxxx&item_id=652702302959"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/item-detail/get-sales-statistics-data/\#response-example "Direct link to Response Example")

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

"publish\_time":

"2024-06-27 09:22:26"

"sales\_quantity\_30days":

3985

"sales\_quantity\_total":

"1.5万+"

"order\_quantity\_total":

"3500+"

"sales\_trend":\[\
\
{\
\
"date":\
\
"2025-06-24"\
\
"sales\_quantity":\
\
136\
\
"order\_quantity":\
\
12\
\
}\
\
{\
\
"date":\
\
"2025-06-25"\
\
"sales\_quantity":\
\
157\
\
"order\_quantity":\
\
35\
\
}\
\
{\
\
"date":\
\
"2025-06-26"\
\
"sales\_quantity":\
\
351\
\
"order\_quantity":\
\
56\
\
}\
\
{\
\
"date":\
\
"2025-06-27"\
\
"sales\_quantity":\
\
32\
\
"order\_quantity":\
\
27\
\
}\
\
{\
\
"date":\
\
"2025-06-28"\
\
"sales\_quantity":\
\
145\
\
"order\_quantity":\
\
50\
\
}\
\
{\
\
"date":\
\
"2025-06-29"\
\
"sales\_quantity":\
\
33\
\
"order\_quantity":\
\
19\
\
}\
\
{\
\
"date":\
\
"2025-06-30"\
\
"sales\_quantity":\
\
65\
\
"order\_quantity":\
\
40\
\
}\
\
{\
\
"date":\
\
"2025-07-01"\
\
"sales\_quantity":\
\
44\
\
"order\_quantity":\
\
25\
\
}\
\
{\
\
"date":\
\
"2025-07-02"\
\
"sales\_quantity":\
\
63\
\
"order\_quantity":\
\
22\
\
}\
\
{\
\
"date":\
\
"2025-07-03"\
\
"sales\_quantity":\
\
43\
\
"order\_quantity":\
\
36\
\
}\
\
{\
\
"date":\
\
"2025-07-04"\
\
"sales\_quantity":\
\
71\
\
"order\_quantity":\
\
41\
\
}\
\
{\
\
"date":\
\
"2025-07-05"\
\
"sales\_quantity":\
\
57\
\
"order\_quantity":\
\
28\
\
}\
\
{\
\
"date":\
\
"2025-07-06"\
\
"sales\_quantity":\
\
34\
\
"order\_quantity":\
\
23\
\
}\
\
{\
\
"date":\
\
"2025-07-07"\
\
"sales\_quantity":\
\
129\
\
"order\_quantity":\
\
50\
\
}\
\
{\
\
"date":\
\
"2025-07-08"\
\
"sales\_quantity":\
\
58\
\
"order\_quantity":\
\
22\
\
}\
\
{\
\
"date":\
\
"2025-07-09"\
\
"sales\_quantity":\
\
58\
\
"order\_quantity":\
\
34\
\
}\
\
{\
\
"date":\
\
"2025-07-10"\
\
"sales\_quantity":\
\
80\
\
"order\_quantity":\
\
24\
\
}\
\
{\
\
"date":\
\
"2025-07-11"\
\
"sales\_quantity":\
\
559\
\
"order\_quantity":\
\
29\
\
}\
\
{\
\
"date":\
\
"2025-07-12"\
\
"sales\_quantity":\
\
96\
\
"order\_quantity":\
\
49\
\
}\
\
{\
\
"date":\
\
"2025-07-13"\
\
"sales\_quantity":\
\
32\
\
"order\_quantity":\
\
26\
\
}\
\
{\
\
"date":\
\
"2025-07-14"\
\
"sales\_quantity":\
\
1188\
\
"order\_quantity":\
\
34\
\
}\
\
{\
\
"date":\
\
"2025-07-15"\
\
"sales\_quantity":\
\
38\
\
"order\_quantity":\
\
24\
\
}\
\
{\
\
"date":\
\
"2025-07-16"\
\
"sales\_quantity":\
\
37\
\
"order\_quantity":\
\
18\
\
}\
\
{\
\
"date":\
\
"2025-07-17"\
\
"sales\_quantity":\
\
69\
\
"order\_quantity":\
\
36\
\
}\
\
{\
\
"date":\
\
"2025-07-18"\
\
"sales\_quantity":\
\
60\
\
"order\_quantity":\
\
35\
\
}\
\
{\
\
"date":\
\
"2025-07-19"\
\
"sales\_quantity":\
\
90\
\
"order\_quantity":\
\
43\
\
}\
\
{\
\
"date":\
\
"2025-07-20"\
\
"sales\_quantity":\
\
77\
\
"order\_quantity":\
\
43\
\
}\
\
{\
\
"date":\
\
"2025-07-21"\
\
"sales\_quantity":\
\
78\
\
"order\_quantity":\
\
38\
\
}\
\
{\
\
"date":\
\
"2025-07-22"\
\
"sales\_quantity":\
\
61\
\
"order\_quantity":\
\
37\
\
}\
\
{\
\
"date":\
\
"2025-07-23"\
\
"sales\_quantity":\
\
44\
\
"order\_quantity":\
\
31\
\
}\
\
\]

"price\_trend":\[\
\
{\
\
"date":\
\
"2025-06-24"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-06-25"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-06-26"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-06-27"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-06-28"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-06-29"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-06-30"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-01"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-02"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-03"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-04"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-05"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-06"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-07"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-08"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-09"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-10"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-11"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-12"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-13"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-14"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-15"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-16"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-17"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-18"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-19"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-20"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-21"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
\
}\
\
{\
\
"date":\
\
"2025-07-22"\
\
"price\_min":\
\
"11.0"\
\
"price\_max":\
\
"11.0"\
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
