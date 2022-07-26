
// this is a function declaration
// function welcomeMessage() {
//     return "Welcome friend to this amazing viday game!";
// }
const { Player } = require("./player");

// function expression
const welcomeMessage = function displayWelcomeMessage() {
    return "Welcome friend to this amazing viday game!";
};

// Dependency injection
function startGame(getWelcomeMsg, getPlayerName) {
    let welcomeMessage = getWelcomeMsg();
    console.log(welcomeMessage);

    const playerName = getPlayerName();
    console.log(`OK! Your player name is ${playerName}`);

    return new Player(playerName);
}

module.exports = {
    welcomeMessage, startGame
};