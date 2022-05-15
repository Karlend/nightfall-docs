## Functions

### `entities.get_peds`

#### **Returned values:**:

| Name     | Type  |
| -------- | ----- |
| Ped list | table |

#### **Methods:**

* `entities.get_peds()`

### `entities.get_vehs`

#### **Returned values:**:

| Name         | Type  |
| ------------ | ----- |
| Vehicle list | table |

#### **Methods:**

* `entities.get_vehs()`

### `entities.get_objects`

#### **Returned values:**:

| Name        | Type  |
| ----------- | ----- |
| Object list | table |

#### **Methods:**

* `entities.get_objects()`

### `entities.get_pickups`

#### **Returned values:**:

| Name        | Type  |
| ----------- | ----- |
| Pickup list | table |

#### **Methods:**

* `entities.get_pickups()`

### `entities.request_control`

#### Parameters:

| Name     | Type     |
| -------- | -------- |
| handle   | int      |
| callback | function |

#### Callbacks:

* `function(int handle)`

#### **Methods:**

* `entities.request_control(int handle, callback)`

### `entities.delete`

#### Parameters:

| Name   | Type |
| ------ | ---- |
| handle | int  |

#### **Methods:**

* `entities.delete(int handle)`

### `entities.create_vehicle`

#### Parameters:

| Name    | Type    |
| ------- | ------- |
| Hash    | int     |
| X       | number  |
| Y       | number  |
| Z       | number  |
| Coords  | vector3 |
| Heading | number  |

#### **Returned values:**:

| Name   | Type |
| ------ | ---- |
| Handle | int  |

#### **Methods:**

* `entities.create_vehicle(int hash, number x, number y, number z, number heading)`
* `entities.create_vehicle(int hash, vector3 coords, number heading)`

### `entities.create_object`

#### Parameters:

| Name    | Type    |
| ------- | ------- |
| Hash    | int     |
| X       | number  |
| Y       | number  |
| Z       | number  |
| Coords  | vector3 |
| Heading | number  |

#### **Returned values:**:

| Name   | Type |
| ------ | ---- |
| Handle | int  |

#### **Methods:**

* `entities.create_object(int hash, number x, number y, number z, number heading)`
* `entities.create_object(int hash, vector3 coords, number heading)`

### `entities.create_ped`

#### Parameters:

| Name    | Type    |
| ------- | ------- |
| Hash    | int     |
| X       | number  |
| Y       | number  |
| Z       | number  |
| Coords  | vector3 |
| Heading | number  |

#### **Returned values:**:

| Name   | Type |
| ------ | ---- |
| Handle | int  |

#### **Methods:**

* `entities.create_ped(int hash, number x, number y, number z, number heading)`
* `entities.create_ped(int hash, vector3 coords, number heading)`