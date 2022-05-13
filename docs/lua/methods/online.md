## Functions

### `online.get_selected_player`

Returned values:

| Name         | Type |
| ------------ | ---- |
| Player index | int  |

#### Methods:

* `online.get_selected_player()`

### `online.get_name`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | int  |

#### Returned values:

| Name        | Type   |
| ----------- | ------ |
| Player name | string |

#### Methods:

* `online.get_name(int pid)`

### `online.get_rockstar_id`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | int  |

#### Returned values:

| Name       | Type |
| ---------- | ---- |
| Player RID | int  |

#### Methods:

* `online.get_rockstar_id(int pid)`

### `online.get_ip`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | int  |

#### Returned values:

| Name      | Type   |
| --------- | ------ |
| Player IP | string |

#### Methods:

* `online.get_ip(int pid)`

### `online.send_script_event`

#### Parameters:

| Name         | Type    |
| ------------ | ------- |
| Player index | int     |
| event\_id    | int     |
| args         | ints... |

#### Methods:

* `online.send_script_event(int pid, int event_id, ints... args)`
