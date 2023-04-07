var generateBtn = document.querySelector("#generate");
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "U", "V", "W", "x", "y", "z"];
var num = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "~", "|"];
var solutionSet = []
var myPassword = []

function writePassword() {
  var userChoiceUpper = window.confirm("Click OK to confirm including uppercase characters.");
  var userChoiceLower = window.confirm("Click OK to confirm including lowercase characters.");
  var userChoiceNum = window.confirm("Click OK to confirm including numeric characters.");
  var userChoiceChar = window.confirm("Click OK to confirm including special characters.");
  var userChoiceLength = window.prompt("How many characters would you like your password to contain?");
  
if ((userChoiceLength < 8 || userChoiceLength > 128) || isNaN(userChoiceLength))
  do{
    var userChoiceLength = window.prompt("How many characters would you like your password to contain? Your answer must be a number between 8 and 128.")
    } while ((userChoiceLength < 8 || userChoiceLength > 128) || isNaN(userChoiceLength));


  var x = [];
  var passwordIndex = [];

  if (userChoiceUpper == true) {
    x = solutionSet.concat(upper);
    solutionSet = x;
  }
  if (userChoiceLower == true) {
    x = solutionSet.concat(lower);
    solutionSet = x;
  }
  if (userChoiceNum == true) {
    x = solutionSet.concat(num);
    solutionSet = x;
  }
  if (userChoiceChar == true) {
    x = solutionSet.concat(characters);
    solutionSet = x;
  }

  console.log(solutionSet)

for (var i = 0; i < userChoiceLength; i++) {
  passwordIndex = (Math.floor(Math.random() * solutionSet.length));
  var item = solutionSet[passwordIndex];
  myPassword += item 
}

document.getElementById("password").textContent = myPassword;

}

generateBtn.addEventListener("click", writePassword);
