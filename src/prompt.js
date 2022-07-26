const prompt = require('prompt-sync')();

const playerNamePrompt = function getPlayerNameFromPrompt() {
    let name = prompt('What is your name? ');
    return name;
}

const yesOrNoPrompt = function getYesOrNoFromPrompt() {
    let result = undefined;

    // Keep asking user yes or no if they do not enter 'Y' or 'N'
    while(result != 'Y' && result != 'N') {
        let answer = prompt('Yes (Y) or no (N)? ');
        result = answer;
    }

    return result;
}

module.exports = {
    playerNamePrompt, yesOrNoPrompt
}