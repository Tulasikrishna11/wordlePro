let userInput = document.getElementById("userInput");
let button = document.getElementById("submit");
let result = document.getElementById("result");
let container = document.getElementById("wordsContainer");
let randomLetter = "GUARD";
let count = 2;
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
    letterContainer.textContent = userEnteredWord[i];
    wordContainer.appendChild(letterContainer);
    if (userEnteredWord[i] === randomLetter[i]) {
      letterContainer.style.backgroundColor = "green";
    } else {
      letterContainer.style.backgroundColor = "red";
    }
  }
}
function lose() {
  if (count == 1) {
    result.textContent = `YOU LOSE,the correct word is ${randomLetter}`;
    button.disabled = true;
  }
}
function displayTriesLeft() {
  triesLeft.textContent = "Tries Left =" + count;
}
button.onclick = function () {
  if (count > 0) {
    if (userInput.value.toUpperCase() === randomLetter) {
      win();
      displayUserInput();
    } else {
      displayUserInput();
      lose();
      count -= 1;
      displayTriesLeft();
    }
    userInput.value = "";
  }
};
