let userInput = document.getElementById("userInput");
let button = document.getElementById("submit");
let result = document.getElementById("result");
let container = document.getElementById("wordContainer");
let randomLetter = "APPLE";
let value = true;
let count = 2;
let triesLeft = document.getElementById("triesLeft");
button.onclick = function () {
  if (count > 0) {
    if (userInput.value.toUpperCase() === randomLetter) {
      result.textContent = "YOU WON!";
      userInput.value = "";
    } else {
      let word = document.createElement("p");
      word.textContent = userInput.value.toUpperCase();
      container.appendChild(word);
      userInput.value = "";
      if (count == 1) {
        result.textContent = `YOU LOSE,the correct word is ${randomLetter}`;
      }
    }
    count -= 1;
    triesLeft.textContent = "Tries Left =" + count;
  }
};
