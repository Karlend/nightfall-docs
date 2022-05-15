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

### `online.send_sms`

#### Parameters:

| Name         | Type   |
| ------------ | ------ |
| Player index | int    |
| Text         | string |
| Send as      | int    |

#### Methods:

* `online.send_sms(int pid, string text)`
* `online.send_sms(int pid, string text, int send_as)`

### `online.send_chat`

#### Parameters:

| Name    | Type   |
| ------- | ------ |
| Text    | string |
| Is team | bool   |
| Send as | int    |

#### Methods:

* `online.send_chat(string text, bool is_team, int send_as)`
* `online.send_chat(string text, bool is_team)`
* `online.send_chat(string text)`