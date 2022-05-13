## Functions

### `globals.at`

#### Parameters:

| Name   | Type |
| ------ | ---- |
| global | int  |
| value  | int  |
| size   | int  |

#### Returned values:

| Name          | Type   |
| ------------- | ------ |
| Script global | global |

#### Methods:

* `globals.at(int global, int value, int size)`

### `globals.set_int`

#### Parameters:

| Name          | Type |
| ------------- | ---- |
| Script global | int  |
| value         | int  |

#### Methods:

* `globals.set_int(int global, int value)`

### `globals.get_int`

#### Parameters:

| Name   | Type |
| ------ | ---- |
| global | int  |

#### Returned values:

| Name  | Type |
| ----- | ---- |
| value | int  |

#### Methods:

* `globals.get_int(int global)`

### `globals.set_float`

#### Parameters:

| Name          | Type   |
| ------------- | ------ |
| Script global | int    |
| value         | number |

#### Methods:

* `globals.set_float(int global, number value)`

### `globals.get_float`

#### Parameters:

| Name   | Type |
| ------ | ---- |
| global | int  |

#### Returned values:

| Name  | Type   |
| ----- | ------ |
| value | number |

#### Methods:

* `globals.get_float(int global)`

### `globals.is_script_active`

#### Parameters:

| Name        | Type   |
| ----------- | ------ |
| script_name | string |

#### Returned values:

| Name      | Type |
| --------- | ---- |
| is active | bool |

#### Methods:

* `globals.is_script_active(string script_name)`

### `globals.set_local`

#### Parameters:

| Name        | Type   |
| ----------- | ------ |
| script_name | string |
| local       | int    |
| value       | int    |
| value       | number |

#### Methods:

* `globals.set_local(string script_name, int local, int value)`
* `globals.set_local(string script_name, int local, number value)`

### `globals.get_local_int`

#### Parameters:

| Name        | Type   |
| ----------- | ------ |
| script_name | string |
| local       | int    |

#### Returned values:

| Name  | Type |
| ----- | ---- |
| value | int  |

#### Methods:

* `globals.get_local_int(string script_name, int local)`

### `globals.get_local_float`

#### Parameters:

| Name        | Type   |
| ----------- | ------ |
| script_name | string |
| local       | int    |

#### Returned values:

| Name  | Type   |
| ----- | ------ |
| value | number |

#### Methods:

* `globals.get_local_float(string script_name, int local)`