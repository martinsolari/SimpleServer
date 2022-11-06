import Game from "./Game.js";

test('test name', () => {
    const aGame = new Game('Name', 2000);
    expect(aGame.name).toBe('Name');
})

