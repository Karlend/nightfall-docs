---
slug: /lua/events
title: Events
---

## Events:

### `on_player_join`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | int  |

#### Methods:

* `function on_player_join(int player_index)`

### `on_player_leave`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | int  |

#### Methods:

* `function on_player_leave(int player_index)`

### `on_session_join`

#### Methods:

* `function on_session_join()`

### `on_crash_attempt`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | int  |
| Action ID    | Int  |

#### Methods:

* `function on_crash_attempt(int player_index, int action_id)`

```ebnf
InvalidState = 0
ModelMismatch = 1
InvalidObject = 2
InvalidSyncType = 3
SyncMismatch = 4
InvalidVersion = 5
InvalidSyncBuffer = 6
InvalidSyncFlag = 7
InvalidHeadBlend = 8
InvalidSyncTree = 9
InvalidInterior = 10
InvalidParachute = 11
```

### `on_modder_detection`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | int  |
| Action ID    | Int  |

#### Methods:

* `function on_modder_detection(int player_index, int action_id)`

```ebnf
NameSpoof = 0
RIDSpoof = 1
IPSpoof = 2
ChatSpoof = 3
ForceHost = 4
RSAF = 5
CrashAttempt = 6
ChatFilterBypass = 7
SuperJump = 8
Godmode = 9
IllegalModel = 10
DamageModifiers = 11
NetworkKick = 12
```

### `on_chat_message`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | int  |
| Is team      | bool |
| Spoofed as   | int  |

#### Methods:

* `function on_chat_message(int player_index, bool is_team, int spoofed_as = -1)`

### `on_phone_message`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | int  |
| Is team      | bool |
| Spoofed as   | int  |

#### Methods:

* `function on_phone_message(int player_index, bool is_team, int spoofed_as = -1)`

### `on_geoip`

#### Parameters:

| Name         | Type   |
| ------------ | ------ |
| Player index | int    |
| IP           | string |
| Country      | string |
| City         | string |
| ISP          | string |
| Using VPN    | bool   |

#### Methods:

* `function on_geoip(int player_index, string ip, string country, string city, string isp, bool using_vpn)`

### `on_votekick`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | int  |
| Target index | int  |

#### Methods:

* `function on_votekick(int player_index, int target_id)`

### `on_kick`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | int  |
| Target index | int  |

#### Methods:

* `function on_kick(int player_index, int target_id)`

### `on_report`

#### Parameters:

| Name         | Type   |
| ------------ | ------ |
| Player index | int    |
| Reason       | string |

#### Methods:

* `function on_report(int player_index, strin reason)`

### `on_script_host_migration`

#### Parameters:

| Name         | Type   |
| ------------ | ------ |
| Script name  | string |
| Player index | int    |
| Migration id | int    |

#### Methods:

* `function on_script_host_migration(string script, int player_index, int migration_id)`