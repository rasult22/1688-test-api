[Skip to main content](https://tmapi.top/docs/ali/item-detail/get-item-shipping-fee/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/item-detail/get-item-shipping-fee/\#api-overview "Direct link to API Overview")

- Get shipping template based on province
- Get total shipping cost based on total quantity and weight

## Basic Information [​](https://tmapi.top/docs/ali/item-detail/get-item-shipping-fee/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/item/shipping

## Request Parameter [​](https://tmapi.top/docs/ali/item-detail/get-item-shipping-fee/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/item-detail/get-item-shipping-fee/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| item\_id | int | Product ID | **true** |
| province | str | Chinese province name, e.g., "广东","广东省","gd","Guangdong" | **true** |
| total\_quantity | int | Total quantity of the product to be shipped | **false** |
| total\_weight | float | Total weight of the product to be shipped (in kg). You can calculate it by the weight information in the product detail API, If there is no weight information, just ignore this parameter. | **false** |

### Body [​](https://tmapi.top/docs/ali/item-detail/get-item-shipping-fee/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/item-detail/get-item-shipping-fee/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/item-detail/get-item-shipping-fee/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/item/shipping?apiToken=xxxxxx&item_id=652702302959&province=&total_quantity=1",\
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
  url: 'http://api.tmapi.top/1688/item/shipping',
  params: {apiToken: 'xxxxxx', item_id: 652702302959, province: '', total_quantity: 1}
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

url = "http://api.tmapi.top/1688/item/shipping"

querystring = {"apiToken":"xxxxxx","item_id":652702302959,"province":"","total_quantity":1}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/item/shipping?apiToken=xxxxxx&item_id=652702302959&province=&total_quantity=1"))
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

	url := "http://api.tmapi.top/1688/item/shipping?apiToken=xxxxxx&item_id=652702302959&province=&total_quantity=1"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/item-detail/get-item-shipping-fee/\#response-example "Direct link to Response Example")

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

"shipping\_to":

"内蒙古"

"unit":

"kg"

"first\_unit":

1

"first\_unit\_fee":

9

"next\_unit":

1

"next\_unit\_fee":

7

"total\_quantity":

1

"total\_weight":

2

"total\_fee":

16

}

}

\# Failed to retrieve data, please try again or contact customer service.

\# Parameter error

\# Subscription expired or insufficient balance.

\# Please try again or set your request timeout to 60 seconds.

\# Unexpected error, please contact customer service.

\# API request concurrency limit exceeded, please reduce concurrency.
