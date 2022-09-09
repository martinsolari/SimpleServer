console.log("Hello browser");
class Person {
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
const aPerson = new Person("Martin", 2000);
console.log(aPerson.introduceSelf());

const messageElement = document.querySelector("#message");
messageElement.textContent = aPerson.introduceSelf();
