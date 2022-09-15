export default class Game {

    static Genre = {
        Action: 'Action',
        Adventure: 'Adventure',
        Strategy: 'Strategy',
        Simulation: 'Simulation'
      };

    name;
    #year;
    #genre;

    constructor(name, year) {
        this.name = name;
        this.#year = year;
    };

    setGenere(genere) {
        this.genre = genre;
    };

    toString() {
        return `${this.name} is a game from ${this.#year} of the ${this.#genre} genre.`;
    }
}