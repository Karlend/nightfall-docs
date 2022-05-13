## Functions

### `ui.add_main_submenu`

#### Parameters:

| Name | Type   |
| ---- | ------ |
| name | string |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| sub\_id | int  |

#### Methods:

* `ui.add_main_submenu(string name)`

### `ui.add_submenu`

#### Parameters:

| Name | Type   |
| ---- | ------ |
| name | string |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| sub\_id | int  |

#### Methods:

* `ui.add_submenu(string name)`

### `ui.add_player_submenu`

#### Parameters:

| Name | Type   |
| ---- | ------ |
| name | string |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| sub\_id | int  |

#### Methods:

* `ui.add_player_submenu(string name)`

### `ui.add_sub_option`

#### Parameters:

| Name            | Type   |
| --------------- | ------ |
| name            | string |
| sub\_id         | int    |
| target\_sub\_id | int    |

#### Returned values:

| Name       | Type |
| ---------- | ---- |
| option\_id | int  |

#### Methods:

* `ui.add_sub_option(string name, int sub_id, int target_sub_id)`

### `ui.add_separator`

#### Parameters:

| Name    | Type   |
| ------- | ------ |
| name    | string |
| sub\_id | int    |

#### Returned values:

| Name       | Type |
| ---------- | ---- |
| option\_id | int  |

#### Methods:

* `ui.add_separator(string name, int sub_id)`

### `ui.add_click_option`

#### Parameters:

| Name     | Type     |
| -------- | -------- |
| name     | string   |
| sub\_id  | int      |
| callback | function |

#### Callbacks:

* `function()`

#### Returned values:

| Name       | Type |
| ---------- | ---- |
| option\_id | int  |

#### Methods:

* `ui.add_click_option(string name, int sub_id, callback`

### `ui.add_bool_option`

#### Parameters:

| Name     | Type     |
| -------- | -------- |
| name     | string   |
| sub\_id  | int      |
| callback | function |

#### Callbacks:

* `function(bool state)`

#### Returned values:

| Name       | Type |
| ---------- | ---- |
| option\_id | int  |

#### Methods:

* `ui.add_bool_option(string name, int sub_id, callback`

### `ui.add_num_option`

#### Parameters:

| Name     | Type     |
| -------- | -------- |
| name     | string   |
| sub\_id  | int      |
| min      | int      |
| max      | int      |
| step     | int      |
| callback | function |

#### Callbacks:

* `function(int input)`

#### Returned values:

| Name       | Type |
| ---------- | ---- |
| option\_id | int  |

#### Methods:

* `ui.add_num_option(string name, int sub_id, int min, int max, int step, callback`

### `ui.add_choose`

#### Parameters:

| Name              | Type     |
| ----------------- | -------- |
| name              | string   |
| sub\_id           | int      |
| horizontal_action | bool     |
| elemets           | table    |
| callback          | function |

#### Callbacks:

* `function(int pos)`

#### Returned values:

| Name       | Type |
| ---------- | ---- |
| option\_id | int  |

#### Methods:

* `ui.add_choose(string name, int sub_id, bool horizontal_action, table elements, callback)`

### `ui.remove`

#### Parameters:

| Name       | Type |
| ---------- | ---- |
| option\_id | int  |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| success | bool |

#### Methods:

* `ui.remove(int option_id)`

### `ui.set_name`

#### Parameters:

| Name       | Type   |
| ---------- | ------ |
| option\_id | int    |
| name       | string |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| success | bool |

#### Methods:

* `ui.set_name(int option_id, string name)`

### `ui.set_value`

#### Parameters:

| Name             | Type   |
| ---------------- | ------ |
| option\_id       | int    |
| value            | string |
| value            | bool   |
| value            | int    |
| ignore\_callback | bool   |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| success | bool |

#### Methods:

* `ui.set_value(int option_id, int value, bool ignore_callback) `
* `ui.set_value(int option_id, bool value, bool ignore_callback) `
* `ui.set_value(int option_id, string value, bool ignore_callback) `

### `ui.get_value`

#### Parameters:

| Name       | Type |
| ---------- | ---- |
| option\_id | int  |

#### Returned values:

| Name  | Type |
| ----- | ---- |
| value | any  |

#### Methods:

* `ui.get_value(int option_id) `