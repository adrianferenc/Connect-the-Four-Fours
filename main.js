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
  isTimerStopped;

//cache elements
const diceBox = document.querySelector("#dice");
const colorBox = document.querySelector("#colors");

//event listeners
document
  .querySelector("#teamCountConfirm")
  .addEventListener("click", teamConfirm);

diceBox.addEventListener("click", rollDice);

//functions
function initialize() {
  turn = 0;
  timer = 0;
  const entryBox = document.createElement("input");
  entryBox.setAttribute("id", "entryBox");
  document.querySelector("#entry").appendChild(entryBox);
  const confirm = document.createElement("button");
  confirm.textContent = "Confirm";
  confirm.setAttribute("id", "confirmButton");
  confirm.addEventListener("click", numberConfirm);
  document.querySelector("#entry").appendChild(confirm);
  diceBox.innerHTML = `<h1>Roll to Start</h1>`;
  render();
  makeBoard();
}
//init function

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
  colorBox.innerHTML = "";
  for (let i = 0; i < numOfTeams; i++) {
    let row = document.createElement("div");
    row.textContent = `Team ${i + 1}`;
    row.style.backgroundColor = teamColors[i];
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
    diceBox.innerHTML = "";
    currentRoll.length = 0;
    for (let i = 1; i <= 4; i++) {
      let roll = 1 + Math.floor(Math.random() * 6);
      currentRoll.push(roll);
      let num = makeDie(roll, i);
      diceBox.appendChild(num);
    }
    timer = 4 * 60000;
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

function teamConfirm() {
  numOfTeams = document.querySelector("#numberOfTeams").value;
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
}

function numberConfirm() {
  let inputNumber
  try {
    inputNumber = math.evaluate(document.querySelector("#entryBox").value);
  }
  catch(err) {
    inputNumber = 0;
  }
  console.log(inputNumber)
  if (
    inputNumber % 1 === 0 &&
    inputNumber > 0 &&
    inputNumber < 101 &&
    !Object.keys(playedNumbers).includes(`#box${inputNumber}`) &&
    timer > 0
  ) {
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
    entryBox.value = "";
    diceBox.innerHTML = `<h1>Roll to Start</h1>`;
    render();
  }
    turn++;
  document.querySelector("#entryBox").value = "";
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
