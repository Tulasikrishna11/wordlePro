let userInput = document.getElementById("userInput");
let button = document.getElementById("submit");
let result = document.getElementById("result");
let container = document.getElementById("wordsContainer");
let triesLeft = document.getElementById("triesLeft");
let randomWord = "APPLE";
let count = 5;
function declareWin() {
  result.textContent = randomWord + " is the correct word YOU WON! ";
  button.disabled = true;
  triesLeft.textContent = "";
}
function displayUserInput() {
  let memory = "";
  let memory2 = randomWord.split("");
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
    if (userEnteredWord[i] === randomWord[i]) {
      letterContainer.style.backgroundColor = "green";
      let index = memory2.findIndex(function (char) {
        if (userEnteredWord[i] === char) {
          return true;
        }
      });
      memory2.splice(index, 1);
      console.log(memory2);
      memory += userEnteredWord[i];
    }
  }
  for (let i = 0; i < 5; i++) {
    let letterContainer = document.getElementById(`${count}${i}`);
    console.log(`${count}${i}`);
    let color = letterContainer.style.backgroundColor;
    if (color !== "green") {
      if (memory2.includes(userEnteredWord[i])) {
        letterContainer.style.backgroundColor = "yellow";
        let index = memory2.findIndex(function (char) {
          if (userEnteredWord[i] === char) {
            return true;
          }
        });
        memory2.splice(index, 1);
      } else {
        letterContainer.style.backgroundColor = "grey";
      }
    }
  }
}
function lose() {
  if (count === 0) {
    result.textContent = `YOU LOSE,the correct word is ${randomWord}`;
    button.disabled = true;
    triesLeft.textContent = "";
  }
}
function displayTriesLeft() {
  triesLeft.textContent = "Tries Left =" + count;
}
button.onclick = function () {
  let userInputValue = userInput.value.toUpperCase();
  if (count < 1) return;
  if (userInputValue.length !== 5) {
    alert("enter a five letter word");
    return;
  }

  if (userInputValue === randomWord) {
    declareWin();
  } else {
    count -= 1;
    displayTriesLeft();
    lose();
  }
  displayUserInput();
  userInput.value = "";
};
