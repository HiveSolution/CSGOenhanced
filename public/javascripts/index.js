var game_data = {};

var socket = io('127.0.0.1:1337');
socket.on('gameData', function (gameData) {
  // console.log('gameData', gameData);
  console.log("Recieved Data");
  game_data = gameData;
});

function checkActivity () {
  var status = game_data.player.activity;

  if (status === "menu") {
    console.log("player in main menu");
  }
}
