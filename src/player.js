class Player {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.weapon = null;
        this.health = 100;
    }

    addItem(item) {
        this.items.push(item);
    }

    dropFirstItem() {
        if(this.items.length > 0) {
            // drop the item using shift()
            let removedItem = this.items.shift();
            console.log(`You dropped ${removedItem}`);
            return removedItem;
        } else {
            console.log("No items dropped.");
            return null;
        }
    }

    setWeapon(weapon) {
        this.weapon = weapon;
    }

    loseHealth(num) {
        let newHealth = this.health - num;
        if (newHealth <=0) {
            throw new Error("You've lost all your health. GAME OVER!");
        } else {
            this.health = newHealth;
        }
    }

    gainHealth(num) {
        let newHealth = this.health + num;
        if (newHealth >= 100) {
            this.health = 100;
        } else {
            this.health = newHealth;
        }
    }
}

module.exports = {
    Player
}