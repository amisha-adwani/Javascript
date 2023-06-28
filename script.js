const num = Math.floor(Math.random() * 100 + 1);
let output = document.getElementById("output");
console.log("random number = " + num);
document.getElementById("myButton").onclick = function () {
  checkNum();
};

function checkNum() {
  let chance = 0;
  for (chance; chance < 3; chance++) {
    let userGuess = document.getElementById("userNum").value;
    if (userGuess === "") {
      output.innerHTML = `Invalid number`;
    } else if (userGuess == 0) {
      output.innerHTML = `The number is between 1 to 100`;
    } else {
      switch (true) {
        case num == userGuess:
          output.innerHTML = "Great, right guess";
          break;
        case userGuess < num:
          output.innerHTML = `Guess a larger number`;
          break;
        case userGuess > num:
          output.innerHTML = `Guess a smaller number`;
          break;
      }
    }
  }
  
}

