let userInput = document.getElementById("userInput");
let button = document.getElementById("submit");
let result = document.getElementById("result");
let container = document.getElementById("wordContainer");
let randomLetter = "GUARD";
let count = 2;
let triesLeft = document.getElementById("triesLeft");
function win() {
  result.textContent = randomLetter + " is the correct word YOU WON! ";
  button.disabled = true;
  triesLeft.textContent = "";
}
function displayUserInput() {
  let word = document.createElement("p");
  word.textContent = userInput.value.toUpperCase();
  container.appendChild(word);
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
    } else {
      displayUserInput();
      lose();
      count -= 1;
      displayTriesLeft();
    }
    userInput.value = "";
  }
};
