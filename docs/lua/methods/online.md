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

* `online.get_name(int player_index)`

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

* `online.get_rockstar_id(int player_index)`

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

* `online.get_ip(int player_index)`

### `online.is_host`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | int  |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| Is host | bool |

#### Methods:

* `online.is_host(int player_index)`

### `online.migrate_script_host`

#### Parameters:

| Name            | Type   |
| --------------- | ------ |
| Script name     | string |
| Migration index | int    |

#### Returned values:

| Name    | Type |
| ------- | ---- |
| Success | bool |

#### Methods:

* `online.migrate_script_host(string script, int migration_index = -1)`

### `online.send_script_event`

#### Parameters:

| Name         | Type    |
| ------------ | ------- |
| Player index | int     |
| event\_id    | int     |
| args         | ints... |

#### Methods:

* `online.send_script_event(int player_index, int event_id, ints... args)`

### `online.send_sms`

#### Parameters:

| Name         | Type   |
| ------------ | ------ |
| Player index | int    |
| Text         | string |
| Send as      | int    |

#### Methods:

* `online.send_sms(int player_index, string text)`
* `online.send_sms(int player_index, string text, int send_as)`

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

### `online.change_session`

#### Parameters:

| Name       | Type |
| ---------- | ---- |
| Session id | int  |

#### Methods:

* `online.change_session(string text)`

```ebnf
{0, leave_online},
{1, join_public},
{2, new_public},
{3, closed_crew_session},
{4, crew_session},
{5, join_crew_session},
{6, closed_friends_session},
{7, find_friends_session},
{8, invite_only_session},
{9, solo_session},
```