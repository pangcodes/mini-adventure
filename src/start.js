const { welcomeMessage, startGame } = require('./index');
const { playerNamePrompt, yesOrNoPrompt } = require('./prompt');
const { Weapon } = require('./weapon');
const { startForestLevel } = require("./forestLevel");

// Pass in welcomeMessage function into startGame function
let player = startGame(welcomeMessage, playerNamePrompt);

let weapon = new Weapon('saber', 50);
startForestLevel(player, yesOrNoPrompt, weapon);