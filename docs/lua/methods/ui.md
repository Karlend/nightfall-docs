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

| Name                 | Type     |
| -----------------    | -------- |
| name                 | string   |
| sub\_id              | int      |
| apply\_on\_selection | bool     |
| elemets              | table    |
| callback             | function |

#### Callbacks:

* `function(int pos)`

#### Returned values:

| Name       | Type |
| ---------- | ---- |
| option\_id | int  |

#### Methods:

* `ui.add_choose(string name, int sub_id, bool horizontal_action, table elements, callback)`

### `ui.add_color_picker`

#### Parameters:

| Name                 | Type     |
| -----------------    | -------- |
| name                 | string   |
| sub\_id              | int      |
| apply\_on\_selection | bool     |
| colors               | table    |
| callback             | function |

#### Callbacks:

* `function(table colors)`

#### Returned values:

| Name       | Type |
| ---------- | ---- |
| option\_id | int  |

#### Methods:

* `ui.add_color_picker(string name, int sub_id, callback)`

### `ui.add_input_string`

#### Parameters:

| Name     | Type     |
| -------- | -------- |
| name     | string   |
| sub\_id  | int      |
| callback | function |

#### Callbacks:

* `function(string input)`

#### Returned values:

| Name       | Type |
| ---------- | ---- |
| option\_id | int  |

#### Methods:

* `ui.add_input_string(string name, int sub_id, callback)`

### `ui.add_float_option`

#### Parameters:

| Name      | Type     |
| --------  | -------- |
| name      | string   |
| sub\_id   | int      |
| min       | float    |
| max       | float    |
| step      | float    |
| precision | int      |
| callback  | function |

#### Callbacks:

* `function(float value)`

#### Returned values:

| Name       | Type |
| ---------- | ---- |
| option\_id | int  |

#### Methods:

* `ui.add_float_option(string name, int sub_id, float min, float max, float step, int precision, callback`

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
| value            | float  |
| value R,G,B,A    | int    |
| ignore\_callback | bool   |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| success | bool |

#### Methods:

* `ui.set_value(int option_id, int value, bool ignore_callback) `
* `ui.set_value(int option_id, bool value, bool ignore_callback) `
* `ui.set_value(int option_id, string value, bool ignore_callback) `
* `ui.set_value(int option_id, float value, bool ignore_callback) `
* `ui.set_value(int option_id, int r, int g, int b, int a, bool ignore_callback) `

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

### `ui.set_num_min`

#### Parameters:

| Name             | Type   |
| ---------------- | ------ |
| option\_id       | int    |
| value            | int    |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| success | bool |

#### Methods:

* `ui.set_num_min(int option_id, int value) `

### `ui.set_num_max`

#### Parameters:

| Name             | Type   |
| ---------------- | ------ |
| option\_id       | int    |
| value            | int    |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| success | bool |

#### Methods:

* `ui.set_num_max(int option_id, int value) `

### `ui.set_step`

#### Parameters:

| Name             | Type   |
| ---------------- | ------ |
| option\_id       | int    |
| value            | int    |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| success | bool |

#### Methods:

* `ui.set_step(int option_id, int value) `

### `ui.set_choose`

#### Parameters:

| Name             | Type   |
| ---------------- | ------ |
| option\_id       | int    |
| value            | int    |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| success | bool |

#### Methods:

* `ui.set_choose(int option_id, int value) `

### `ui.is_open`
 
#### Returned values:

| Name    | Type |
| ------- | ---- |
| Is open | bool |

#### Methods:

* `ui.is_open() `

### `ui.close`

#### Methods:

* `ui.close() `


### `ui.open`

#### Methods:

* `ui.open() `


### `ui.hide`

#### Parameters:

| Name             | Type   |
| ---------------- | ------ |
| option\_id       | int    |
| state            | bool    |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| success | bool |

#### Methods:

* `ui.hide(int option_id, bool value) `

### `ui.is_hidden`

#### Parameters:

| Name             | Type   |
| ---------------- | ------ |
| option\_id       | int    |

#### Returned values:

| Name      | Type |
| -------   | ---- |
| Is hidden | bool |

#### Methods:

* `ui.hide(int option_id, bool value) `

### `ui.is_sub_open`
 
#### Parameters:

| Name             | Type   |
| ---------------- | ------ |
| sub\_id          | int    |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| Is open | bool |

#### Methods:

* `ui.is_sub_open() `

