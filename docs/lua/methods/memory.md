## Functions

### `memory.malloc`

#### Parameters:

| Name | Type |
| ---- | ---- |
| size | int  |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| Pointer | int  |

#### Methods:

* `memory.malloc(int size)`

### `memory.free`

#### Parameters:

| Name    | Type |
| ------- | ---- |
| Pointer | int  |

#### Methods:

* `memory.free(int pointer)`

### `memory.read_byte`

#### Parameters:

| Name    | Type |
| ------- | ---- |
| Pointer | int  |

#### Returned values:

| Name  | Type |
| ----- | ---- |
| Value | int  |

#### Methods:

* `memory.read_byte(int size)`

### `memory.read_int`

#### Parameters:

| Name    | Type |
| ------- | ---- |
| Pointer | int  |

#### Returned values:

| Name  | Type |
| ----- | ---- |
| Value | int  |

#### Methods:

* `memory.read_int(int size)`

### `memory.read_int64`

#### Parameters:

| Name    | Type |
| ------- | ---- |
| Pointer | int  |

#### Returned values:

| Name  | Type |
| ----- | ---- |
| Value | int  |

#### Methods:

* `memory.read_int64(int size)`

### `memory.read_float`

#### Parameters:

| Name    | Type |
| ------- | ---- |
| Pointer | int  |

#### Returned values:

| Name  | Type   |
| ----- | ------ |
| Value | number |

#### Methods:

* `memory.read_float(int size)`

### `memory.write_byte`

#### Parameters:

| Name    | Type |
| ------- | ---- |
| Pointer | int  |
| Value   | int  |

#### Methods:

* `memory.write_byte(int pointer, int value)`

### `memory.write_int`

#### Parameters:

| Name    | Type |
| ------- | ---- |
| Pointer | int  |
| Value   | int  |

#### Methods:

* `memory.write_int(int pointer, int value)`

### `memory.write_int64`

#### Parameters:

| Name    | Type |
| ------- | ---- |
| Pointer | int  |
| Value   | int  |

#### Methods:

* `memory.write_int64(int pointer, int value)`

### `memory.write_float`

#### Parameters:

| Name    | Type   |
| ------- | ------ |
| Pointer | int    |
| Value   | number |

#### Methods:

* `memory.write_float(int pointer, number value)`

### `memory.find_pattern`

#### Parameters:

| Name               | Type   |
| ------------------ | ------ |
| IDA-styled pattern | string |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| Pointer | int  |

#### Methods:

* `memory.find_pattern(string pattern)`

### `memory.is_valid_memory`

#### Parameters:

| Name    | Type |
| ------- | ---- |
| Pointer | int  |

#### Returned values:

| Name     | Type |
| -------- | ---- |
| Is valid | bool |

#### Methods:

* `memory.is_valid_memory(int pointer)`