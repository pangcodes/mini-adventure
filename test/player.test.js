const { Player } = require('../src/player');
const { Weapon } = require('../src/weapon');

describe('player', () => {
    test('add a item', () => {
        let testItem = 'potion';
        let player = new Player('testPlayerName');

        // system under test
        player.addItem(testItem);

        // expected behaviour
        expect(player.items).toContain(testItem);
    });

    test('drop the first item', () => {
        let player = new Player('testPlayerName');
        player.addItem('cake');
        player.addItem('gem stone');

        // system under test
        let droppedItem = player.dropFirstItem();

        // expected behaviour
        expect(player.items.length).toBe(1);
        expect(droppedItem).toBe('cake');
    });


    test('set a weapon', () => {
        let player = new Player('test');

        let testWeapon = new Weapon('cake fork', 2);

        // unit of work
        player.setWeapon(testWeapon);

        // expected behaviour 
        expect(player.weapon).toBeInstanceOf(Weapon);
        expect(player.weapon.name).toBe('cake fork');
        expect(player.weapon.damage).toBe(2);
    });

    // We can add more tests to test player health
});