const num = Math.floor(Math.random() * 100 + 1);
console.log("random number = " + num);
document.getElementById("myButton").onclick = function () {
  checkNum();
};

function checkNum() {
  let chance = 0;
  for (let i = chance; i < 3; i++) {
    let userGuess = document.getElementById("userNum").value;

    //if (chance < 3) {
      if (userGuess === "") {
        console.log("Invalid number");
      } else if (userGuess == 0) {
        console.log("The number is between 1 to 100");
      }  else if(chance===3) {
        console.log("Chances over");
      }
      else {
        switch (true) {
          case num == userGuess:
            console.log("Great, right guess");
            break;
          case userGuess < num:
            console.log("Guess a larger number");
            chance++;
            break;
          case userGuess > num:
            console.log("Guess a smaller number");
           chance++;
            break;
        }
      }
      //chance++;
  //  } 
//   else {
//       console.log("Chances over");
//     }
  }
}

