const { welcomeMessage, startGame } = require('../src/index');

afterEach(() => {
    // Restore all mocks back to their original value
    // restore the soy created with spyOn
    jest.restoreAllMocks();
});

describe("welcomeMessage", () => {
    test('returns a string containing welcome', () => {
        let message = welcomeMessage();
        expect(message.toLowerCase()).toContain('welcome');
    });
});

describe("startGame", () => {
    test('calls the welcomeMsg function once', () => {
        // create mock function to pass into startGame() later
        const mockGetWelcomeMsg = jest.fn();
        const mockGetPlayerNamePrompt = jest.fn();

        // Call the start game function with the mock function so it can call it
        startGame(mockGetWelcomeMsg, mockGetPlayerNamePrompt);

        // Test that welcomeMsg is called once
        expect(mockGetWelcomeMsg).toHaveBeenCalledTimes(1);
    });

    test('console.log the message returned from the welcomeMsg function once', () => {

        // This time we will use spyOn to track calls to console and log
        // SpyOn is a jest function jest.spyOn(object, methodName)
        const consoleSpy = jest.spyOn(console, "log");

        // Create mock for the welcomeMsg() function that gets passed into startGame()
        const mockGetWelcomeMsg = jest.fn();
        let expectedMessage = 'welcome';
        mockGetWelcomeMsg.mockReturnValue(expectedMessage);

        const mockGetPlayerNamePrompt = jest.fn();

        // unit of work, system under test
        startGame(mockGetWelcomeMsg, mockGetPlayerNamePrompt);

        // test expected behaviour
        expect(consoleSpy).toBeCalledTimes(2); // Check console.log was called exactly once

        // Check that console.log was called with the expected message
        // Like console.log('welcome');
        expect(consoleSpy).toHaveBeenCalledWith(expectedMessage);
    });


    test('call a function to get the player name once', () => {
        const mockWelcomeMsg = jest.fn();
        const mockPlayerNamePrompt = jest.fn();

        startGame(mockWelcomeMsg, mockPlayerNamePrompt);

        expect(mockPlayerNamePrompt).toBeCalledTimes(1);
    });

    test('shows the player name from the player name prompt via console.log', () => {
        // call jest.spyOn to spy on the console.log method
        const consoleSpy = jest.spyOn(console, "log");

        // Mock the functions passed into start game
        const mockWelcomeMsg = jest.fn();
        const mockPlayerNamePrompt = jest.fn();
        let expectedName = "player1";
        mockPlayerNamePrompt.mockReturnValue(expectedName);

        // Unit of work
        startGame(mockWelcomeMsg, mockPlayerNamePrompt);

        // Test the expected behaviour
        expect(consoleSpy).toHaveBeenCalled(); // Check that console.log was called
        expect(consoleSpy).toBeCalledTimes(2); // Check console.log called exactly twice

        // Check console.log was called with expectedName
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(expectedName));
    });

});