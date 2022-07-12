## Functions

### `system.yield`

#### Parameters:

| Name | Type |
| ---- | ---- |
| ms   | int  |

#### Methods:

* `system.yield(int ms)`

### `system.log`

#### Parameters:

| Name   | Type   |
| ------ | ------ |
| prefix | string |
| text   | string |

#### Methods:

* `system.log(string prefix, string text)`

### `system.notify`

#### Parameters:

| Name  | Type   |
| ----- | ------ |
| Title | string |
| Text  | string |
| Red   | int    |
| Green | int    |
| Blue  | int    |
| Alpha | int    |

#### Methods:

* `system.notify(string title, string text, int red, int green, int blue, int alpha)`

### `system.execute_as_script`

#### Parameters:

| Name        | Type     |
| ----------- | -------- |
| Script name | string   |
| Callback    | function |

#### Callbacks:

* `function()`

#### Methods:

* `system.execute_as_script(string script_name, function callback)`

### `system.is_safe_mode_enabled`
 
#### Returned values:

| Name       | Type |
| -------    | ---- |
| Is enabled | bool |

#### Methods:

* `system.is_safe_mode_enabled() `

### `system.to_clipboard`
 
#### Parameters:

| Name      | Type   |
| ----------| ------ |
| text      | string |

#### Methods:

* `system.to_clipboard(string text) `

### `system.from_clipboard`
 
#### Returned values:

| Name      | Type   |
| ----------| ------ |
| text      | string |

#### Methods:

* `system.from_clipboard() `

### `system.play_wav(string: path)`
 
#### Parameters:

| Name      | Type   |
| --------- | ------ |
| path      | string |

#### Methods:

* `system.play_wav(string path) `

