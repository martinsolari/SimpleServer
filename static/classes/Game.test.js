import Game from './Game.js';

test('test name', () => {
  const aGame = new Game('Name', 2000);
  expect(aGame.name).toEqual('Name');
});

test('test genere', () => {
  const aGame = new Game('Name', 2000);
  aGame.setGenre(Game.Genre.Adventure);
  expect(aGame.getGenre()).toEqual(Game.Genre.Adventure);
});
