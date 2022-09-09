import Person from "./Person.js";
console.log("Hello browser");

const aPerson = new Person("Martin", 2000);
console.log(aPerson.introduceSelf());

const messageElement = document.querySelector("#message");
messageElement.textContent = aPerson.introduceSelf();
