import Person from "./Person.js";
console.log("Hello browser");

const messageElement = document.querySelector("#message");
const inpName = document.getElementById("name");
const inpYear = document.getElementById("year");
const btnAddPerson = document.getElementById("add_person");

btnAddPerson.addEventListener("click", (event) => {
    event.preventDefault();
    const aPersonAdded = new Person(inpName.value, inpYear.value);
    messageElement.textContent = aPersonAdded.introduceSelf();
})

