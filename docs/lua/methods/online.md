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

### `online.send_script_event`

#### Parameters:

| Name         | Type    |
| ------------ | ------- |
| Player index | int     |
| event\_id    | int     |
| args         | ints... |

#### Methods:

* `online.send_script_event(int pid, int event_id, ints... args)`
