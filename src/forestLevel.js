

const items = ['blueberry', 'stone', 'banana', 'bottle'];

const startForestLevel = function startForestAdventure(player, yesOrNoPrompt, weapon, monster) {
    console.log(`${player.name}, you have entered a dark forest...`);
    console.log('You are alone.... And it seems like you are lost...');
    console.log('Do you want to go left?')
    let answer = yesOrNoPrompt();

    while (answer == 'Y') {
        console.log("You go left.");
        // Keep collecting useless items
        let randomItem = items[Math.floor(Math.random() * items.length)]
        console.log(`You found a ${randomItem} and added it to your inventory.`);
        player.addItem(randomItem);
        console.log(`Your inventory: ${player.items.join(' ')}`);

        console.log('Do you want to go left again?')
        let newAnswer = yesOrNoPrompt();
        answer = newAnswer;
    } 

    if (answer == 'N') {
        console.log("You go right.");
        console.log(`WOW! You've found a ${weapon.name} that can do ${weapon.damage} damage!`);
        player.setWeapon(weapon);
    }

    console.log('You continue down the dark path...');

    console.log("OH!!! A monster appears.")
    console.log('!!!! It attacks you. Your health decreases by 10.')
    player.loseHealth(10);
    console.log(`Your health is now: ${player.health}`);

    console.log('Do you want to run away?')
    answer = yesOrNoPrompt();

    while (answer == 'Y') {
        console.log("... You ran into a tree!");
        player.dropFirstItem();
        console.log('Do you want to keep running?')
        answer = yesOrNoPrompt();
    } 
    
    console.log('The monster is... RIGHT INFRONT OF YOU!')
    console.log('Attack the monster back?');
    let monsterHealth = 100;
    while (monsterHealth > 0) {
        console.log(`Monster health: ${monsterHealth}`);
        answer = yesOrNoPrompt();
        if (answer == 'Y') {
            console.log(`You use your ${weapon.name} to do ${weapon.damage} damage!`);
            monsterHealth -= weapon.damage;
        } else {
            // Monster keeps attacking you
            console.log('!!!! It attacks you. Your health decreases by 10.')
            player.loseHealth(10);
            console.log(`Your health is now ${player.health}`);
        }
    }

    console.log("Congratulations. You defeated the monster!");
    console.log("It dropped some health potions.");
    console.log("You drink it and gain 50 health.");
    player.gainHealth(50);
    console.log(`Your health is now ${player.health}.`);

}

module.exports = {
    startForestLevel
};