## Functions

### `http.get`

#### **Returned values:**:

| Name       | Type     |
| ---------- | -------- |
| url        | string   |
| onResponse | function |

#### Callbacks:

* `onResponse(string content, string header, int response_code)`

#### **Methods:**

* `http.get(string url, function onResponse)`

### `http.post`

#### **Returned values:**:

| Name        | Type        |
| ----------- | ----------- |
| url         | string      |
| post_fields | json string |
| onSuccess   | function    |
| onFailure   | function    |
| header      | table       |

#### Callbacks:

* `onSuccess(string content, string header, int response_code)`
* `onFailure(string err)`

#### **Methods:**

* `http.post(string url, string post_fields, function onSuccess = nill, function onFailure = nill, table header = {})`