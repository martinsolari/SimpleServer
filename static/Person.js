export default class Person {
    name;
    #year;

    constructor(name, year) {
        this.name = name;
        this.#year = year;
      }

    introduceSelf() {
        return `Hi! I'm ${this.name}, and I'm in year ${this.#year}.`;
    }
}