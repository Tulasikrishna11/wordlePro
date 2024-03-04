let userInput = document.getElementById("userInput");
let button = document.getElementById("submit");
let result = document.getElementById("result");
let container = document.getElementById("wordsContainer");
let randomLetter = "GUARD";
let count = 5;
let memory = "";
let triesLeft = document.getElementById("triesLeft");
function win() {
  result.textContent = randomLetter + " is the correct word YOU WON! ";
  button.disabled = true;
  triesLeft.textContent = "";
}
function displayUserInput() {
  let wordContainer = document.createElement("div");
  wordContainer.classList.add("word-container");
  container.appendChild(wordContainer);
  let userEnteredWord = userInput.value.toUpperCase();
  for (let i = 0; i < 5; i++) {
    let letterContainer = document.createElement("span");
    letterContainer.id = `${count}${i}`;
    console.log(`${count}${i}`);
    letterContainer.textContent = userEnteredWord[i];
    wordContainer.appendChild(letterContainer);
    if (userEnteredWord[i] === randomLetter[i]) {
      letterContainer.style.backgroundColor = "green";
      memory += userEnteredWord[i];
    }
  }
  for (let i = 0; i < 5; i++) {
    let letterContainer = document.getElementById(`${count}${i}`);
    console.log(`${count}${i}`);
    let color = letterContainer.style.backgroundColor;
    if (color !== "green") {
      if (
        !memory.includes(userEnteredWord[i]) &&
        randomLetter.includes(userEnteredWord[i])
      ) {
        letterContainer.style.backgroundColor = "yellow";
      } else {
        letterContainer.style.backgroundColor = "grey";
      }
    }
  }
}
function lose() {
  if (count == 0) {
    result.textContent = `YOU LOSE,the correct word is ${randomLetter}`;
    button.disabled = true;
    triesLeft.textContent = "";
  }
}
function displayTriesLeft() {
  triesLeft.textContent = "Tries Left =" + count;
}
button.onclick = function () {
  if (userInput.value.length === 5) {
    if (count > 0) {
      memory = "";
      if (userInput.value.toUpperCase() === randomLetter) {
        win();
        displayUserInput();
      } else {
        displayUserInput();
        count -= 1;
        displayTriesLeft();
        lose();
      }
      userInput.value = "";
    }
  } else {
    alert("enter a five letter word");
  }
};
