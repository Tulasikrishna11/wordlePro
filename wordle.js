let userInput = document.getElementById("userInput");
let button = document.getElementById("submit");
let result = document.getElementById("result");
let randomLetter = "APPLE";
button.onclick = function () {
  if (userInput.value.toUpperCase() === randomLetter) {
    result.textContent = "YOU WON!";
  } else {
    result.textContent = `YOU LOSE,the correct word is ${randomLetter}`;
  }
};
