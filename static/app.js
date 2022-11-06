debugger;
import Game from "./classes/Game.js";

const gameElement = document.querySelector("#game");
const inpName = document.getElementById("name");
const inpYear = document.getElementById("year");
const btnAddGame = document.getElementById("add_game");

btnAddGame.addEventListener("click", (event) => {
    event.preventDefault();
    const aGameAdded = new Game(inpName.value, inpYear.value);
    gameElement.textContent = aGameAdded.toString();
})

