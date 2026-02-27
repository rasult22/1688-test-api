[Skip to main content](https://tmapi.top/docs/ali/item-detail/get-item-desc-by-id/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/item-detail/get-item-desc-by-id/\#api-overview "Direct link to API Overview")

- Get 1688 product description images by product ID

## Basic Information [​](https://tmapi.top/docs/ali/item-detail/get-item-desc-by-id/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/item\_desc

## Request Parameter [​](https://tmapi.top/docs/ali/item-detail/get-item-desc-by-id/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/item-detail/get-item-desc-by-id/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| item\_id | integer | Product ID | **true** |

### Body [​](https://tmapi.top/docs/ali/item-detail/get-item-desc-by-id/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/item-detail/get-item-desc-by-id/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/item-detail/get-item-desc-by-id/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/item_desc?apiToken=xxxxxx&item_id=652702302959",\
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
  url: 'http://api.tmapi.top/1688/item_desc',
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

url = "http://api.tmapi.top/1688/item_desc"

querystring = {"apiToken":"xxxxxx","item_id":652702302959}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/item_desc?apiToken=xxxxxx&item_id=652702302959"))
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

	url := "http://api.tmapi.top/1688/item_desc?apiToken=xxxxxx&item_id=652702302959"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/item-detail/get-item-desc-by-id/\#response-example "Direct link to Response Example")

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

622619146604

"detail\_imgs":\[\
\
"https://cbu01.alicdn.com/img/ibank/2020/452/402/17709204254\_1283248032.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/2020/901/478/17766874109\_1283248032.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/2020/672/568/17766865276\_1283248032.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/2020/470/088/17766880074\_1283248032.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/2020/769/861/17709168967\_1283248032.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/2020/398/771/17709177893\_1283248032.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/2020/821/702/17709207128\_1283248032.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/2020/460/848/17838848064\_1283248032.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/2020/894/291/17709192498\_1283248032.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/2020/084/891/17709198480\_1283248032.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/2020/255/868/17766868552\_1283248032.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/2020/121/758/17838857121\_1283248032.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/2020/172/312/17709213271\_1283248032.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/2020/330/598/17766895033\_1283248032.jpg"\
\
"https://cbu01.alicdn.com/img/ibank/2019/259/150/11419051952\_1283248032.jpg"\
\
\]

"detail\_html":

"<img src="https://cbu01.alicdn.com/img/ibank/2020/452/402/17709204254\_1283248032.jpg"/><img src="https://cbu01.alicdn.com/img/ibank/2020/901/478/17766874109\_1283248032.jpg"/><img src="https://cbu01.alicdn.com/img/ibank/2020/672/568/17766865276\_1283248032.jpg"/><img src="https://cbu01.alicdn.com/img/ibank/2020/470/088/17766880074\_1283248032.jpg"/><img src="https://cbu01.alicdn.com/img/ibank/2020/769/861/17709168967\_1283248032.jpg"/><img src="https://cbu01.alicdn.com/img/ibank/2020/398/771/17709177893\_1283248032.jpg"/><img src="https://cbu01.alicdn.com/img/ibank/2020/821/702/17709207128\_1283248032.jpg"/><img src="https://cbu01.alicdn.com/img/ibank/2020/460/848/17838848064\_1283248032.jpg"/><img src="https://cbu01.alicdn.com/img/ibank/2020/894/291/17709192498\_1283248032.jpg"/><img src="https://cbu01.alicdn.com/img/ibank/2020/084/891/17709198480\_1283248032.jpg"/><img src="https://cbu01.alicdn.com/img/ibank/2020/255/868/17766868552\_1283248032.jpg"/><img src="https://cbu01.alicdn.com/img/ibank/2020/121/758/17838857121\_1283248032.jpg"/><img src="https://cbu01.alicdn.com/img/ibank/2020/172/312/17709213271\_1283248032.jpg"/><img src="https://cbu01.alicdn.com/img/ibank/2020/330/598/17766895033\_1283248032.jpg"/><img src="https://cbu01.alicdn.com/img/ibank/2019/259/150/11419051952\_1283248032.jpg"/>"

}

}

\# Failed to retrieve data, please try again or contact customer service.

\# Parameter error

\# Subscription expired or insufficient balance.

\# Please try again or set your request timeout to 60 seconds.

\# Unexpected error, please contact customer service.

\# API request concurrency limit exceeded, please reduce concurrency.

Opens ChatThis icon Opens the chat window.

