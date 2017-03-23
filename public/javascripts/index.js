var game_data = {};

var socket = io('127.0.0.1:1337');
socket.on('gameData', function (gameData) {
  // console.log('gameData', gameData);
  game_data = gameData;

  console.log("Player Name:", game_data.player.name);
  console.log("SteamID:", game_data.player.steamid);
  console.log("Status:", game_data.player.activity);
  console.log("Team:", game_data.player.team);
  console.log("Kills:", game_data.player.match_stats.kills);
  console.log("Deaths:", game_data.player.match_stats.deaths);
});

function checkActivity () {
  var status = game_data.player.activity;

  if (status === "menu") {
    console.log("player in main menu");
  }
}
