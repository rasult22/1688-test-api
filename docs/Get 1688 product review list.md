[Skip to main content](https://tmapi.top/docs/ali/item-detail/get-item-ratings-by-id/#__docusaurus_skipToContent_fallback)

## API Overview [​](https://tmapi.top/docs/ali/item-detail/get-item-ratings-by-id/\#api-overview "Direct link to API Overview")

- Get 1688 product review list
- Includes review content/time/rating/SKU, etc.

## Basic Information [​](https://tmapi.top/docs/ali/item-detail/get-item-ratings-by-id/\#basic-information "Direct link to Basic Information")

API URL

GET

http://api.tmapi.top/1688/item/rating

## Request Parameter [​](https://tmapi.top/docs/ali/item-detail/get-item-ratings-by-id/\#request-parameter "Direct link to Request Parameter")

### Query [​](https://tmapi.top/docs/ali/item-detail/get-item-ratings-by-id/\#query "Direct link to Query")

| Field | Type | Explanation | Required |
| --- | --- | --- | --- |
| item\_id | integer | Product ID | **true** |
| page | integer | Page number<br>Default value: 1 | false |
| sort\_type | string | Optional values: `default`,`latest`<br>Default value: default | false |

### Body [​](https://tmapi.top/docs/ali/item-detail/get-item-ratings-by-id/\#body "Direct link to Body")

## Security Auth [​](https://tmapi.top/docs/ali/item-detail/get-item-ratings-by-id/\#security-auth "Direct link to Security Auth")

tip

Please go to **[Console-Account Center](https://console.tmapi.io/account/center)** to get your apiToken

Add your **apiToken** to your query parameters. Please refer to the examples below.

## Request Example [​](https://tmapi.top/docs/ali/item-detail/get-item-ratings-by-id/\#request-example "Direct link to Request Example")

- PHP
- JavaScript
- Python
- Java
- Go

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [\
  CURLOPT_URL => "http://api.tmapi.top/1688/item/rating?apiToken=xxxxxx&item_id=652702302959&page=1&sort_type=default",\
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
  url: 'http://api.tmapi.top/1688/item/rating',
  params: {apiToken: 'xxxxxx', item_id: 652702302959, page: 1, sort_type: 'default'}
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

url = "http://api.tmapi.top/1688/item/rating"

querystring = {"apiToken":"xxxxxx","item_id":652702302959,"page":1,"sort_type":"default"}

response = requests.get(url, params=querystring)

print(response.json())
```

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://api.tmapi.top/1688/item/rating?apiToken=xxxxxx&item_id=652702302959&page=1&sort_type=default"))
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

	url := "http://api.tmapi.top/1688/item/rating?apiToken=xxxxxx&item_id=652702302959&page=1&sort_type=default"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

## Response Example [​](https://tmapi.top/docs/ali/item-detail/get-item-ratings-by-id/\#response-example "Direct link to Response Example")

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

634161824877

"page":

1

"page\_size":

10

"sort\_type":

"default"

"list":\[\
\
{\
\
"id":\
\
33545064566\
\
"feedback":\
\
"该用户觉得商品非常赞，给出了五星好评"\
\
"feedback\_date":\
\
"2024-06-26T01:17:51.000+00:00"\
\
"rate\_star":\
\
5\
\
"sku\_map":\
\
"颜色:白色;尺码:XL#7C颜色:白色;尺码:XXL#7C颜色:白色;尺码:XXXL"\
\
"user\_nick":\
\
"t\*\*3"\
\
}\
\
{\
\
"id":\
\
28660705669\
\
"feedback":\
\
"不错"\
\
"feedback\_date":\
\
"2023-09-04T03:16:29.000+00:00"\
\
"rate\_star":\
\
5\
\
"sku\_map":\
\
"颜色:黑色;尺码:XXXL"\
\
"user\_nick":\
\
"t\*\*8"\
\
}\
\
{\
\
"id":\
\
28536007399\
\
"feedback":\
\
"不错"\
\
"feedback\_date":\
\
"2023-08-25T02:49:58.000+00:00"\
\
"rate\_star":\
\
5\
\
"sku\_map":\
\
"颜色:红色;尺码:L#7C颜色:黑色;尺码:L"\
\
"user\_nick":\
\
"t\*\*8"\
\
}\
\
{\
\
"id":\
\
28530103008\
\
"feedback":\
\
"还行"\
\
"feedback\_date":\
\
"2023-08-24T11:00:55.000+00:00"\
\
"rate\_star":\
\
5\
\
"sku\_map":\
\
"颜色:白色;尺码:XXXL"\
\
"user\_nick":\
\
"m\*\*v"\
\
}\
\
{\
\
"id":\
\
29030148736\
\
"feedback":\
\
"满意!"\
\
"feedback\_date":\
\
"2023-09-27T07:09:48.000+00:00"\
\
"rate\_star":\
\
5\
\
"sku\_map":\
\
"颜色:黑色;尺码:XXL"\
\
"user\_nick":\
\
"t\*\*8"\
\
}\
\
{\
\
"id":\
\
28522515066\
\
"feedback":\
\
"满意!"\
\
"feedback\_date":\
\
"2023-08-24T06:15:43.000+00:00"\
\
"rate\_star":\
\
5\
\
"sku\_map":\
\
"颜色:黑色;尺码:XXL"\
\
"user\_nick":\
\
"t\*\*8"\
\
}\
\
{\
\
"id":\
\
33762481342\
\
"feedback":\
\
"评价方未及时做出评价,系统默认好评!"\
\
"feedback\_date":\
\
"2024-07-07T09:22:39.000+00:00"\
\
"rate\_star":\
\
5\
\
"sku\_map":\
\
"颜色:黑色;尺码:M"\
\
"user\_nick":\
\
"s\*\*8"\
\
}\
\
{\
\
"id":\
\
21653352008\
\
"feedback":\
\
"评价方未及时做出评价,系统默认好评!"\
\
"feedback\_date":\
\
"2022-06-17T07:27:51.000+00:00"\
\
"rate\_star":\
\
5\
\
"sku\_map":\
\
"颜色:黑色;尺码:XXL"\
\
"user\_nick":\
\
"劲\*\*司"\
\
}\
\
{\
\
"id":\
\
22210092073\
\
"feedback":\
\
"评价方未及时做出评价,系统默认好评!"\
\
"feedback\_date":\
\
"2022-07-24T07:34:05.000+00:00"\
\
"rate\_star":\
\
5\
\
"sku\_map":\
\
"颜色:黑色;尺码:XXL#7C颜色:白色;尺码:XXL"\
\
"user\_nick":\
\
"劲\*\*司"\
\
}\
\
{\
\
"id":\
\
22203155518\
\
"feedback":\
\
"评价方未及时做出评价,系统默认好评!"\
\
"feedback\_date":\
\
"2022-07-15T07:04:07.000+00:00"\
\
"rate\_star":\
\
5\
\
"sku\_map":\
\
"颜色:白色;尺码:L"\
\
"user\_nick":\
\
"t\*\*1"\
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
