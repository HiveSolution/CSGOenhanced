module.exports = {
  "type": "object",
  "properties": {
    "map": {
      "type": "object",
      "properties": {
        "name": {"type": "string", "default": "Unknown"},
        "phase": {"type": "string", "default": "Unknown"},
        "round": {"type": "number", "default": 0},
        "team_ct": {
          "type": "object",
          "properties": {
            "name": {"type": "string", "default": "CT"},
            "score": {"type": "number", "default": 0}
          }
        },
        "team_t": {
          "type": "object",
          "properties": {
            "name": {"type": "string", "default": "T"},
            "score": {"type": "number", "default": 0}
          }
        }
      }
    },
    round: {
      "type": "object",
      "properties": {
        "phase": {"type": "string", "default": "Unknown"},
        "win_team": {"type": "string", "default": "Unknown"},
        "bomb": {"type": "string", "default": "Unknown"}
      }
    },
    "player": {
      "type": "object",
      "properties": {
        "steamid": {"type": "string", "default": "Unknown"},
        "name": {"type": "string", "default": "Unknown"},
        "team": {"type": "string", "default": "Unknown"},
        "activity": {"type": "string", "default": "Unknown"},
        "state": {
          "type": "object",
          "properties": {
            "health": {"type": "number", "default": 100},
            "armor": {"type": "number", "default": 0},
            "helmet": {"type": "boolean", "default": false},
            "flashed": {"type": "number", "default": 0},
            "smoked": {"type": "number", "default": 0},
            "burning": {"type": "number", "default": 0},
            "money": {"type": "number", "default": 0},
            "round_kills": {"type": "number", "default": 0},
            "round_killhs": {"type": "number", "default": 0}
          }
        },
        "weapons": {
          "type": "object",
          "properties": {
            "weapon_0": {
              "type": "object",
              "properties": Object.assign({}, weaponSchema)
            },
            "weapon_1": {
              "type": "object",
              "properties": Object.assign({}, weaponSchema)
            },
            "weapon_2": {
              "type": "object",
              "properties": Object.assign({}, weaponSchema)
            },
            "weapon_3": {
              "type": "object",
              "properties": Object.assign({}, weaponSchema)
            },
            "weapon_4": {
              "type": "object",
              "properties": Object.assign({}, weaponSchema)
            },
            "weapon_5": {
              "type": "object",
              "properties": Object.assign({}, weaponSchema)
            },
            "weapon_6": {
              "type": "object",
              "properties": Object.assign({}, weaponSchema)
            },
            "weapon_7": {
              "type": "object",
              "properties": Object.assign({}, weaponSchema)
            },
            "weapon_8": {
              "type": "object",
              "properties": Object.assign({}, weaponSchema)
            },
            "weapon_9": {
              "type": "object",
              "properties": Object.assign({}, weaponSchema)
            }
          }
        },
        "match_stats": {
          "type": "object",
          "properties": {
            "kills": {"type": "number", "default": 0},
            "assists": {"type": "number", "default": 0},
            "deaths": {"type": "number", "default": 0},
            "mvps": {"type": "number", "default": 0},
            "score": {"type": "number", "default": 0}
          }
        }
      }
    }
  }
};

var weaponSchema = {
  "type": "object",
  "properties": {
    "name": {"type": "string", "default": "Unknown"},
    "paintkit": {"type": "string", "default": "default"},
    "type": {"type": "string", "default": "Unknown"},
    "state": {"type": "string", "default": "holstered"},
    "ammo_clip": {"type": "number", "default": 0},
    "ammo_clip_max": {"type": "number", "default": 0},
    "ammo_reserve": {"type": "number", "default": 0}
  }
}
