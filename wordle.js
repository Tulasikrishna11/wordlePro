let userInput = document.getElementById("userInput");
let button = document.getElementById("submit");
let result = document.getElementById("result");
let container = document.getElementById("mainContainer");
let randomLetter = "APPLE";
let value = true;
let count = 0;
button.onclick = function () {
  if (count < 2) {
    if (value) {
      if (userInput.value.toUpperCase() === randomLetter) {
        result.textContent = "YOU WON!";
      } else {
        let word = document.createElement("p");
        word.textContent = userInput.value.toUpperCase();
        container.appendChild(word);
      }
      count += 1;
    }
  } else {
    value = false;
    result.textContent = `YOU LOSE,the correct word is ${randomLetter}`;
  }
};
