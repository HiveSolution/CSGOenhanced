
module.exports = function (io) {
  var express = require('express');
  var router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'CSGO Enhanced' });
  });

  router.post('/', function (req, res, next) {
    res.sendStatus(200);
    var gameData = req.body;
    io.emit('gameData', dataProcess(gameData));
  });

  io.on('connection', function (socket) {
    console.log(new Date().getTime(), "a client has connected");
  });

  return router
};

/**
 * Prefills a gameData Object with default values.
 * 
 * @param {Object} gameData Object the game sent to the server.
 * @returns gameData Object filled with default values,
 */
function dataProcess (gameData) {
  var renderData = {
    "map": {
      "name":  (gameData.map && gameData.map.name ? gameData.map.name:   "Unknown"),
      "phase": (gameData.map && gameData.map.phase ? gameData.map.phase: "Unknown"),
      "round": (gameData.map && gameData.map.round ? gameData.map.round: 0),
      "team_ct": {
        "name":  (gameData.map && gameData.map.team_ct && gameData.map.team_ct.name ? gameData.map.team_ct.name:   "CT"),
        "score": (gameData.map && gameData.map.team_ct && gameData.map.team_ct.score ? gameData.map.team_ct.score: 0)
      },
      "team_t": {
        "name":  (gameData.map && gameData.map.team_ct && gameData.map.team_t.name ? gameData.map.team_t.name:   "T"),
        "score": (gameData.map && gameData.map.team_ct && gameData.map.team_t.score ? gameData.map.team_t.score: 0)
      }
    },
    "round": {
      "phase":    (gameData.round && gameData.round.phase ? gameData.round.phase:       "Unknown"),
      "win_team": (gameData.round && gameData.round.win_team ? gameData.round.win_team: "Unknown"),
      "bomb":     (gameData.round && gameData.round.bomb ? gameData.round.bomb:         "Unknown")
    },
    "player": {
      "steamid":  (gameData.player && gameData.player.steamid ? gameData.player.steamid:   "Unknown"),
      "name":     (gameData.player && gameData.player.name ? gameData.player.name:         "Unknown"),
      "team":     (gameData.player && gameData.player.team ? gameData.player.team:         "Unknown"),
      "activity": (gameData.player && gameData.player.activity ? gameData.player.activity: "Unknown"),
      "state": {
        "health":       (gameData.player && gameData.player.state && gameData.player.state.health ? gameData.player.state.health:             100),
        "armor":        (gameData.player && gameData.player.state && gameData.player.state.armor ? gameData.player.state.armor:               100),
        "helmet":       (gameData.player && gameData.player.state && gameData.player.state.helmet ? gameData.player.state.helmet:             false),
        "flashed":      (gameData.player && gameData.player.state && gameData.player.state.flashed ? gameData.player.state.flashed:           0),
        "smoked":       (gameData.player && gameData.player.state && gameData.player.state.smoked ? gameData.player.state.smoked:             0),
        "burning":      (gameData.player && gameData.player.state && gameData.player.state.burning ? gameData.player.state.burning:           0),
        "money":        (gameData.player && gameData.player.state && gameData.player.state.money ? gameData.player.state.money:               800),
        "round_kills":  (gameData.player && gameData.player.state && gameData.player.state.round_kills ? gameData.player.state.round_kills:   0),
        "round_killhs": (gameData.player && gameData.player.state && gameData.player.state.round_killhs ? gameData.player.state.round_killhs: 0)
      },
      "weapons": {
        "weapon_0": {
          "name":          (gameData.player.weapons && gameData.player.weapons.weapon_0 && gameData.player.weapons.weapon_0.name ? gameData.player.weapons.weapon_0.name:                   "Unknown"),
          "paintkit":      (gameData.player.weapons && gameData.player.weapons.weapon_0 && gameData.player.weapons.weapon_0.paintkit ? gameData.player.weapons.weapon_0.paintkit:           "default"),
          "type":          (gameData.player.weapons && gameData.player.weapons.weapon_0 && gameData.player.weapons.weapon_0.type ? gameData.player.weapons.weapon_0.type:                   "Unknown"),
          "state":         (gameData.player.weapons && gameData.player.weapons.weapon_0 && gameData.player.weapons.weapon_0.state ? gameData.player.weapons.weapon_0.state:                 "holstered"),
          "ammo_clip":     (gameData.player.weapons && gameData.player.weapons.weapon_0 && gameData.player.weapons.weapon_0.ammo_clip ? gameData.player.weapons.weapon_0.ammo_clip:         0),
          "ammo_clip_max": (gameData.player.weapons && gameData.player.weapons.weapon_0 && gameData.player.weapons.weapon_0.ammo_clip_max ? gameData.player.weapons.weapon_0.ammo_clip_max: 0),
          "ammo_reserve":  (gameData.player.weapons && gameData.player.weapons.weapon_0 && gameData.player.weapons.weapon_0.ammo_reserve ? gameData.player.weapons.weapon_0.ammo_reserve:   0),
        },
        "weapon_1": {
          "name":          (gameData.player.weapons && gameData.player.weapons.weapon_1 && gameData.player.weapons.weapon_1.name ? gameData.player.weapons.weapon_1.name:                   "Unknown"),
          "paintkit":      (gameData.player.weapons && gameData.player.weapons.weapon_1 && gameData.player.weapons.weapon_1.paintkit ? gameData.player.weapons.weapon_1.paintkit:           "default"),
          "type":          (gameData.player.weapons && gameData.player.weapons.weapon_1 && gameData.player.weapons.weapon_1.type ? gameData.player.weapons.weapon_1.type:                   "Unknown"),
          "state":         (gameData.player.weapons && gameData.player.weapons.weapon_1 && gameData.player.weapons.weapon_1.state ? gameData.player.weapons.weapon_1.state:                 "holstered"),
          "ammo_clip":     (gameData.player.weapons && gameData.player.weapons.weapon_1 && gameData.player.weapons.weapon_1.ammo_clip ? gameData.player.weapons.weapon_1.ammo_clip:         0),
          "ammo_clip_max": (gameData.player.weapons && gameData.player.weapons.weapon_1 && gameData.player.weapons.weapon_1.ammo_clip_max ? gameData.player.weapons.weapon_1.ammo_clip_max: 0),
          "ammo_reserve":  (gameData.player.weapons && gameData.player.weapons.weapon_1 && gameData.player.weapons.weapon_1.ammo_reserve ? gameData.player.weapons.weapon_1.ammo_reserve:   0),
        },
        "weapon_2": {
          "name":          (gameData.player.weapons && gameData.player.weapons.weapon_2 && gameData.player.weapons.weapon_2.name ? gameData.player.weapons.weapon_2.name:                   "Unknown"),
          "paintkit":      (gameData.player.weapons && gameData.player.weapons.weapon_2 && gameData.player.weapons.weapon_2.paintkit ? gameData.player.weapons.weapon_2.paintkit:           "default"),
          "type":          (gameData.player.weapons && gameData.player.weapons.weapon_2 && gameData.player.weapons.weapon_2.type ? gameData.player.weapons.weapon_2.type:                   "Unknown"),
          "state":         (gameData.player.weapons && gameData.player.weapons.weapon_2 && gameData.player.weapons.weapon_2.state ? gameData.player.weapons.weapon_2.state:                 "holstered"),
          "ammo_clip":     (gameData.player.weapons && gameData.player.weapons.weapon_2 && gameData.player.weapons.weapon_2.ammo_clip ? gameData.player.weapons.weapon_2.ammo_clip:         0),
          "ammo_clip_max": (gameData.player.weapons && gameData.player.weapons.weapon_2 && gameData.player.weapons.weapon_2.ammo_clip_max ? gameData.player.weapons.weapon_2.ammo_clip_max: 0),
          "ammo_reserve":  (gameData.player.weapons && gameData.player.weapons.weapon_2 && gameData.player.weapons.weapon_2.ammo_reserve ? gameData.player.weapons.weapon_2.ammo_reserve:   0),
        },
        "weapon_3": {
          "name":          (gameData.player.weapons && gameData.player.weapons.weapon_3 && gameData.player.weapons.weapon_3.name ? gameData.player.weapons.weapon_3.name:                   "Unknown"),
          "paintkit":      (gameData.player.weapons && gameData.player.weapons.weapon_3 && gameData.player.weapons.weapon_3.paintkit ? gameData.player.weapons.weapon_3.paintkit:           "default"),
          "type":          (gameData.player.weapons && gameData.player.weapons.weapon_3 && gameData.player.weapons.weapon_3.type ? gameData.player.weapons.weapon_3.type:                   "Unknown"),
          "state":         (gameData.player.weapons && gameData.player.weapons.weapon_3 && gameData.player.weapons.weapon_3.state ? gameData.player.weapons.weapon_3.state:                 "holstered"),
          "ammo_clip":     (gameData.player.weapons && gameData.player.weapons.weapon_3 && gameData.player.weapons.weapon_3.ammo_clip ? gameData.player.weapons.weapon_3.ammo_clip:         0),
          "ammo_clip_max": (gameData.player.weapons && gameData.player.weapons.weapon_3 && gameData.player.weapons.weapon_3.ammo_clip_max ? gameData.player.weapons.weapon_3.ammo_clip_max: 0),
          "ammo_reserve":  (gameData.player.weapons && gameData.player.weapons.weapon_3 && gameData.player.weapons.weapon_3.ammo_reserve ? gameData.player.weapons.weapon_3.ammo_reserve:   0),
        },
        "weapon_4": {
          "name":          (gameData.player.weapons && gameData.player.weapons.weapon_4 && gameData.player.weapons.weapon_4.name ? gameData.player.weapons.weapon_4.name:                   "Unknown"),
          "paintkit":      (gameData.player.weapons && gameData.player.weapons.weapon_4 && gameData.player.weapons.weapon_4.paintkit ? gameData.player.weapons.weapon_4.paintkit:           "default"),
          "type":          (gameData.player.weapons && gameData.player.weapons.weapon_4 && gameData.player.weapons.weapon_4.type ? gameData.player.weapons.weapon_4.type:                   "Unknown"),
          "state":         (gameData.player.weapons && gameData.player.weapons.weapon_4 && gameData.player.weapons.weapon_4.state ? gameData.player.weapons.weapon_4.state:                 "holstered"),
          "ammo_clip":     (gameData.player.weapons && gameData.player.weapons.weapon_4 && gameData.player.weapons.weapon_4.ammo_clip ? gameData.player.weapons.weapon_4.ammo_clip:         0),
          "ammo_clip_max": (gameData.player.weapons && gameData.player.weapons.weapon_4 && gameData.player.weapons.weapon_4.ammo_clip_max ? gameData.player.weapons.weapon_4.ammo_clip_max: 0),
          "ammo_reserve":  (gameData.player.weapons && gameData.player.weapons.weapon_4 && gameData.player.weapons.weapon_4.ammo_reserve ? gameData.player.weapons.weapon_4.ammo_reserve:   0),
        },
        "weapon_5": {
          "name":          (gameData.player.weapons && gameData.player.weapons.weapon_5 && gameData.player.weapons.weapon_5.name ? gameData.player.weapons.weapon_5.name:                   "Unknown"),
          "paintkit":      (gameData.player.weapons && gameData.player.weapons.weapon_5 && gameData.player.weapons.weapon_5.paintkit ? gameData.player.weapons.weapon_5.paintkit:           "default"),
          "type":          (gameData.player.weapons && gameData.player.weapons.weapon_5 && gameData.player.weapons.weapon_5.type ? gameData.player.weapons.weapon_5.type:                   "Unknown"),
          "state":         (gameData.player.weapons && gameData.player.weapons.weapon_5 && gameData.player.weapons.weapon_5.state ? gameData.player.weapons.weapon_5.state:                 "holstered"),
          "ammo_clip":     (gameData.player.weapons && gameData.player.weapons.weapon_5 && gameData.player.weapons.weapon_5.ammo_clip ? gameData.player.weapons.weapon_5.ammo_clip:         0),
          "ammo_clip_max": (gameData.player.weapons && gameData.player.weapons.weapon_5 && gameData.player.weapons.weapon_5.ammo_clip_max ? gameData.player.weapons.weapon_5.ammo_clip_max: 0),
          "ammo_reserve":  (gameData.player.weapons && gameData.player.weapons.weapon_5 && gameData.player.weapons.weapon_5.ammo_reserve ? gameData.player.weapons.weapon_5.ammo_reserve:   0),
        },
        "weapon_6": {
          "name":          (gameData.player.weapons && gameData.player.weapons.weapon_6 && gameData.player.weapons.weapon_6.name ? gameData.player.weapons.weapon_6.name:                   "Unknown"),
          "paintkit":      (gameData.player.weapons && gameData.player.weapons.weapon_6 && gameData.player.weapons.weapon_6.paintkit ? gameData.player.weapons.weapon_6.paintkit:           "default"),
          "type":          (gameData.player.weapons && gameData.player.weapons.weapon_6 && gameData.player.weapons.weapon_6.type ? gameData.player.weapons.weapon_6.type:                   "Unknown"),
          "state":         (gameData.player.weapons && gameData.player.weapons.weapon_6 && gameData.player.weapons.weapon_6.state ? gameData.player.weapons.weapon_6.state:                 "holstered"),
          "ammo_clip":     (gameData.player.weapons && gameData.player.weapons.weapon_6 && gameData.player.weapons.weapon_6.ammo_clip ? gameData.player.weapons.weapon_6.ammo_clip:         0),
          "ammo_clip_max": (gameData.player.weapons && gameData.player.weapons.weapon_6 && gameData.player.weapons.weapon_6.ammo_clip_max ? gameData.player.weapons.weapon_6.ammo_clip_max: 0),
          "ammo_reserve":  (gameData.player.weapons && gameData.player.weapons.weapon_6 && gameData.player.weapons.weapon_6.ammo_reserve ? gameData.player.weapons.weapon_6.ammo_reserve:   0),
        },
        "weapon_7": {
          "name":          (gameData.player.weapons && gameData.player.weapons.weapon_7 && gameData.player.weapons.weapon_7.name ? gameData.player.weapons.weapon_7.name:                   "Unknown"),
          "paintkit":      (gameData.player.weapons && gameData.player.weapons.weapon_7 && gameData.player.weapons.weapon_7.paintkit ? gameData.player.weapons.weapon_7.paintkit:           "default"),
          "type":          (gameData.player.weapons && gameData.player.weapons.weapon_7 && gameData.player.weapons.weapon_7.type ? gameData.player.weapons.weapon_7.type:                   "Unknown"),
          "state":         (gameData.player.weapons && gameData.player.weapons.weapon_7 && gameData.player.weapons.weapon_7.state ? gameData.player.weapons.weapon_7.state:                 "holstered"),
          "ammo_clip":     (gameData.player.weapons && gameData.player.weapons.weapon_7 && gameData.player.weapons.weapon_7.ammo_clip ? gameData.player.weapons.weapon_7.ammo_clip:         0),
          "ammo_clip_max": (gameData.player.weapons && gameData.player.weapons.weapon_7 && gameData.player.weapons.weapon_7.ammo_clip_max ? gameData.player.weapons.weapon_7.ammo_clip_max: 0),
          "ammo_reserve":  (gameData.player.weapons && gameData.player.weapons.weapon_7 && gameData.player.weapons.weapon_7.ammo_reserve ? gameData.player.weapons.weapon_7.ammo_reserve:   0),
        },
        "weapon_8": {
          "name":          (gameData.player.weapons && gameData.player.weapons.weapon_8 && gameData.player.weapons.weapon_8.name ? gameData.player.weapons.weapon_8.name:                   "Unknown"),
          "paintkit":      (gameData.player.weapons && gameData.player.weapons.weapon_8 && gameData.player.weapons.weapon_8.paintkit ? gameData.player.weapons.weapon_8.paintkit:           "default"),
          "type":          (gameData.player.weapons && gameData.player.weapons.weapon_8 && gameData.player.weapons.weapon_8.type ? gameData.player.weapons.weapon_8.type:                   "Unknown"),
          "state":         (gameData.player.weapons && gameData.player.weapons.weapon_8 && gameData.player.weapons.weapon_8.state ? gameData.player.weapons.weapon_8.state:                 "holstered"),
          "ammo_clip":     (gameData.player.weapons && gameData.player.weapons.weapon_8 && gameData.player.weapons.weapon_8.ammo_clip ? gameData.player.weapons.weapon_8.ammo_clip:         0),
          "ammo_clip_max": (gameData.player.weapons && gameData.player.weapons.weapon_8 && gameData.player.weapons.weapon_8.ammo_clip_max ? gameData.player.weapons.weapon_8.ammo_clip_max: 0),
          "ammo_reserve":  (gameData.player.weapons && gameData.player.weapons.weapon_8 && gameData.player.weapons.weapon_8.ammo_reserve ? gameData.player.weapons.weapon_8.ammo_reserve:   0),
        },
        "weapon_9": {
          "name":          (gameData.player.weapons && gameData.player.weapons.weapon_9 && gameData.player.weapons.weapon_9.name ? gameData.player.weapons.weapon_9.name:                   "Unknown"),
          "paintkit":      (gameData.player.weapons && gameData.player.weapons.weapon_9 && gameData.player.weapons.weapon_9.paintkit ? gameData.player.weapons.weapon_9.paintkit:           "default"),
          "type":          (gameData.player.weapons && gameData.player.weapons.weapon_9 && gameData.player.weapons.weapon_9.type ? gameData.player.weapons.weapon_9.type:                   "Unknown"),
          "state":         (gameData.player.weapons && gameData.player.weapons.weapon_9 && gameData.player.weapons.weapon_9.state ? gameData.player.weapons.weapon_9.state:                 "holstered"),
          "ammo_clip":     (gameData.player.weapons && gameData.player.weapons.weapon_9 && gameData.player.weapons.weapon_9.ammo_clip ? gameData.player.weapons.weapon_9.ammo_clip:         0),
          "ammo_clip_max": (gameData.player.weapons && gameData.player.weapons.weapon_9 && gameData.player.weapons.weapon_9.ammo_clip_max ? gameData.player.weapons.weapon_9.ammo_clip_max: 0),
          "ammo_reserve":  (gameData.player.weapons && gameData.player.weapons.weapon_9 && gameData.player.weapons.weapon_9.ammo_reserve ? gameData.player.weapons.weapon_9.ammo_reserve:   0),
        },
      },
      "match_stats": {
        "kills":   (gameData.player.match_stats && gameData.player.match_stats.kills ? gameData.player.match_stats.kills:     0),
        "assists": (gameData.player.match_stats && gameData.player.match_stats.assists ? gameData.player.match_stats.assists: 0),
        "deaths":  (gameData.player.match_stats && gameData.player.match_stats.deaths ? gameData.player.match_stats.deaths:   0),
        "mvps":    (gameData.player.match_stats && gameData.player.match_stats.mvps ? gameData.player.match_stats.mvps:       0),
        "score":   (gameData.player.match_stats && gameData.player.match_stats.score ? gameData.player.match_stats.score:     0)
      }
    }
  }
  return renderData
}
