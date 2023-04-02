// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "U", "V", "W", "x", "y", "z"];
var num = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "~", "|"];
var finalPassword = []

function writePassword() {
  var userChoiceUpper = window.confirm("Click OK to confirm including uppercase characters.");
  var userChoiceLower = window.confirm("Click OK to confirm including lowercase characters.");
  var userChoiceNum = window.confirm("Click OK to confirm including numeric characters.");
  var userChoiceChar = window.confirm("Click OK to confirm including special characters.");
  var userChoiceLength = window.prompt("How many characters would you like your password to contain?");
  
  var x 

  if (userChoiceUpper == true) {
    x = finalPassword.concat(upper);
    finalPassword = x;
  }
  if (userChoiceLower == true) {
    x = finalPassword.concat(lower);
    finalPassword = x;
  }
  if (userChoiceNum == true) {
    x = finalPassword.concat(num);
    finalPassword = x;
  }
  if (userChoiceChar == true) {
    x = finalPassword.concat(characters);
    finalPassword = x;
  }

  console.log(finalPassword)

for (var i = 0; i < userChoiceLength; i++) {
  console.log(Math.round(Math.random() * userChoiceLength) + 1);
}

var myPassword

let text = myPassword.toString();


// do {
//   ("enter length between 8-128"
// }

  // var myPassword

  // // Math.floor(Math.random() *)

    return
}

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
