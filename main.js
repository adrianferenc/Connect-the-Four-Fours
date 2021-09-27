//constants

class PlayedSquare {
  constructor(id, team) {
    this.id = id;
    this.team = team;
    this.left = [this.id];
    this.up = [this.id];
    this.upleft = [this.id];
    this.downleft = [this.id];
  }
}

const teamColors = ["red", "blue", "yellow", "purple", "green", "orange"];
const dice = {
  die1: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-dice-1" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="1.5"/>
  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
</svg>`,
  die1fill: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-dice-1-fill" viewBox="0 0 16 16">
  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>`,
  die2: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-dice-2" viewBox="0 0 16 16">
  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>`,
  die2fill: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-dice-2-fill" viewBox="0 0 16 16">
<path d="M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3zm5.5 1a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg>`,
  die3: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-dice-3" viewBox="0 0 16 16">
  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>`,
  die3fill: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-dice-3-fill" viewBox="0 0 16 16">
<path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>`,
  die4: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-dice-4" viewBox="0 0 16 16">
<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>`,
  die4fill: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-dice-4-fill" viewBox="0 0 16 16">
<path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>`,
  die5: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-dice-5" viewBox="0 0 16 16">
  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>`,
  die5fill: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
<path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>`,
  die6: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-dice-6" viewBox="0 0 16 16">
  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>`,
  die6fill: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-dice-6-fill" viewBox="0 0 16 16">
<path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>`,
};

const playedNumbers = {};
const currentRoll = [];
const directions = ["left", "up", "upleft", "downleft"];

//state variables
let numOfTeams,
  turn,
  updatedConnected,
  isAWinner,
  timer,
  minute,
  second,
  time,
  isTimerStopped;

//cache elements
const diceContainer = document.querySelector("#dice");
const colorBox = document.querySelector("#colors");

//event listeners
document.querySelector("#start").addEventListener("click", startGame);

diceContainer.addEventListener("click", rollDice);

document.querySelector("#timeAmount").addEventListener("change", (e) => {
  e.target.value <= 0
    ? document.querySelector("#start").disabled = true
    : document.querySelector("#start").disabled = false
});

//functions
//init function
function initialize() {
  turn = 0;
  timer = 0;
  const firstDiv = document.createElement("div");
  const secondDiv = document.createElement("div");
  const entryBox = document.createElement("input");
  entryBox.setAttribute("id", "entryBox");
  firstDiv.appendChild(entryBox);
  // document.querySelector("#entry").appendChild(entryBox);
  const evaluate = document.createElement("button");
  evaluate.textContent = "Evaluate";
  evaluate.setAttribute("id", "evaluateButton");
  evaluate.addEventListener("click", numberEvaluate);
  // document.querySelector("#entry").appendChild(evaluate);
  firstDiv.appendChild(evaluate);
  const error = document.createElement("span");
  error.setAttribute("id", "errorField");
  secondDiv.appendChild(error);
  // document.querySelector("#entry").appendChild(error);
  const submit = document.createElement("button");
  submit.textContent = "Submit";
  submit.setAttribute("id", "submitButton");
  submit.addEventListener("click", numberSubmit);
  submit.style = "display:none;";

  secondDiv.appendChild(submit);

  document.querySelector("#entry").appendChild(firstDiv);
  document.querySelector("#entry").appendChild(secondDiv);

  render();
  makeBoard();
}

function pregameRender() {
  let numberOfTeams = document.querySelector("#numberOfTeams").value;
  document.querySelector("#teamCount").textContent = numberOfTeams;
  document.querySelector("#numberOfTeams").oninput = function () {
    numberOfTeams = this.value;
    document.getElementById("teamCount").innerHTML = numberOfTeams;
  };
}

//render function
function render() {
  const rollButton = document.createElement("button");
  rollButton.textContent = "Roll to Start";
  rollButton.id = "rollButton";
  rollButton.classList.add("pulsate");
  diceContainer.prepend(rollButton);
  colorBox.innerHTML = "";
  document.getElementById("errorField").textContent = "";
  document.getElementById("entry").setAttribute("visibility", "hidden");
  for (let i = 0; i < numOfTeams; i++) {
    let row = document.createElement("div");
    row.textContent = `Team ${i + 1}`;
    row.style.backgroundColor = teamColors[i];
    row.style.width = "100%";
    if ((turn - i) % numOfTeams === 0) {
      row.style.border = "2pt solid black";
      row.style.fontSize = "20pt";
    }
    colorBox.appendChild(row);
  }
}

function makeDie(num, position) {
  let die = document.createElement("i");
  die.innerHTML = dice[`die${num}${position % 2 === 0 ? "fill" : ""}`];
  return die;
}

function rollDice() {
  if (timer <= 0) {
    diceContainer.removeChild(rollButton);
    document.getElementById("entry").setAttribute("visibility", "visible");
    const diceBox = document.createElement("div");
    diceBox.id = "diceBox";
    diceContainer.appendChild(diceBox);
    currentRoll.length = 0;
    for (let i = 1; i <= 4; i++) {
      let roll = 1 + Math.floor(Math.random() * 6);
      currentRoll.push(roll);
      let die = makeDie(roll, i);
      diceBox.appendChild(die);
    }
    timer = time * 60000;
    timerUpdate();
  }
}

function makeBoard() {
  document.querySelector("#futureBoard").innerHTML = "";
  let board = document.createElement("div");
  board.setAttribute("id", "board");
  for (i = 0; i < 10; i++) {
    for (j = 1; j <= 10; j++) {
      let box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", `box${10 * i + j}`);
      box.innerHTML = `<span>${10 * i + j}<span>`;
      board.appendChild(box);
    }
  }
  document.querySelector("#futureBoard").appendChild(board);
}

function startGame() {
  numOfTeams = document.querySelector("#numberOfTeams").value;
  time = +document.querySelector("#timeAmount").value;
  document.body.removeChild(document.querySelector("#pregame"));
  initialize();
}

function timerUpdate() {
  if (timer >= 0) {
    document.querySelector("#timer").style.color = "black";
    minute = Math.floor(timer / 60000);
    second = Math.ceil((timer - 60000 * minute) / 1000).toString();
    second = second.length === 2 ? second : "0" + second;
    if (timer <= 60000) {
      document.querySelector("#timer").style.color = "red";
    }
    document.querySelector("#timer").textContent = `${minute}:${second}`;
    setTimeout(() => {
      timer -= 1000;
      timerUpdate();
    }, 1000);
  }
  if (timer === 0) {
    let inputNumber = math.evaluate(document.querySelector("#entryBox").value);
    let inputValue = document.querySelector("#entryBox").value;
    if (
      inputNumber % 1 === 0 &&
      inputNumber < 101 &&
      inputNumber > 0 &&
      !Object.keys(playedNumbers).includes(`#box${inputNumber}`) &&
      inputValue
        .match(/(?<!\d)\d(?!\d)/gm)
        .sort()
        .join("") === [...currentRoll].sort().join("")
    ) {
      numberSubmit();
    } else {
      turn++;
    }
    diceContainer.removeChild(diceBox);
    render();
  }
}

function numberEvaluate() {
  let inputValue, inputNumber;
  document.getElementById("errorField").textContent = "";
  if (timer > 0) {
    try {
      inputValue = document.querySelector("#entryBox").value;
      inputNumber = math.evaluate(document.querySelector("#entryBox").value);
    } catch (err) {
      inputNumber = null;
    }
    if (inputNumber === undefined) {
      document.getElementById("errorField").textContent =
        "You must enter a number";
    } else if (inputNumber === null) {
      document.getElementById("errorField").textContent = "Cannot evaluate";
    } else if (inputNumber % 1 !== 0) {
      document.getElementById(
        "errorField"
      ).textContent = `${inputNumber} is not a whole number`;
    } else if (inputNumber < 1 || inputNumber > 100) {
      document.getElementById(
        "errorField"
      ).textContent = `${inputNumber} must be between 1 and 100`;
    } else if (Object.keys(playedNumbers).includes(`#box${inputNumber}`)) {
      document.getElementById(
        "errorField"
      ).textContent = `${inputNumber} has already been played`;
    } else if (
      inputValue
        .match(/(?<!\d)\d(?!\d)/gm)
        .sort()
        .join("") !== [...currentRoll].sort().join("")
    ) {
      document.getElementById(
        "errorField"
      ).textContent = `You must use only and all the numbers ${currentRoll.join(
        ", "
      )}`;
    } else {
      document.getElementById(
        "errorField"
      ).textContent = `Would you like to submit ${inputNumber}?`;
      document.getElementById("submitButton").style = "display:inline;";
    }
  }
}

function numberSubmit() {
  let inputNumber = math.evaluate(document.querySelector("#entryBox").value);
  let played = new PlayedSquare(`#box${inputNumber}`, turn % numOfTeams);
  playedNumbers[played.id] = played;
  document.querySelector(`#box${inputNumber}`).style.backgroundColor =
    teamColors[turn % numOfTeams];
  update(inputNumber);
  if (checkWin(inputNumber)) {
    return (document.body.innerHTML = `<h1>Team ${
      (turn % numOfTeams) + 1
    } Wins!`);
  }
  timer = 0;
  document.querySelector("#entryBox").value = "";
  turn++;
  diceContainer.removeChild(document.getElementById("diceBox"));
  document.getElementById("submitButton").style = "display:none;";
  document.getElementById("timer").textContent = "";
  render();
}

function updateDirection(id, distance, direction, possibleCallback) {
  if (
    possibleCallback(id) &&
    (!!playedNumbers[`#box${parseInt(id) + distance}`]
      ? playedNumbers[`#box${parseInt(id) + distance}`].team ===
        turn % numOfTeams
      : false)
  ) {
    updatedConnected = playedNumbers[`#box${id}`][direction].concat(
      playedNumbers[`#box${parseInt(id) + distance}`][direction]
    );
    playedNumbers[`#box${id}`][direction] = updatedConnected;
    for (let playedId of playedNumbers[`#box${parseInt(id) + distance}`][
      direction
    ]) {
      playedNumbers[playedId][direction] = updatedConnected;
    }
  }
}

function update(id) {
  //Check up:
  updateDirection(id, -10, "up", (x) => x > 10);
  //Check down:
  updateDirection(id, 10, "up", (x) => x < 91);
  //Check left:
  updateDirection(id, -1, "left", (x) => x % 10 !== 1);
  //Check right:
  updateDirection(id, 1, "left", (x) => x % 10 !== 0);
  //Check up-left diagonal:
  updateDirection(id, -11, "upleft", (x) => x % 10 !== 1 && x > 10);
  //Check down-right diagonal:
  updateDirection(id, 11, "upleft", (x) => x % 10 !== 0 && x > 10);
  //Check down-left diagonal:
  updateDirection(id, 9, "downleft", (x) => x % 10 !== 1 && x < 91);
  //Check up-right diagonal:
  updateDirection(id, -9, "downleft", (x) => x % 10 !== 0 && x < 91);
}

function checkWin(id) {
  for (let point of directions) {
    if (playedNumbers[`#box${id}`][point].length >= 4) {
      return true;
    }
  }
  return false;
}

pregameRender();
