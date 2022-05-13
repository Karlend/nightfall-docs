# Events

{% hint style="info" %}
Lua events
{% endhint %}

### Events:

### `on_player_join`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | pid  |

#### Methods:

* `function on_player_join(pid)`

### `on_player_leave`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | pid  |

#### Methods:

* `function on_player_leave(pid)`

### `on_session_join`

#### Methods:

* `function on_session_join()`

### `on_crash_attempt`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | pid  |
| Action ID    | Int  |

#### Methods:

* `function on_crash_attempt(int player_id, int action_id)`

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
```

### `on_modder_detection`

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| Player index | pid  |
| Action ID    | Int  |

#### Methods:

* `function on_modder_detection(int player_id, int action_id)`

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
```