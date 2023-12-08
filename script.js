// Assignment code here
var numbers = "0 1 2 3 4 5 6 7 8 9";
var lowerLetters = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var symbols = "! @ # $ % ^ & * ( )";
var upperLetters = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
var passwordGenerated = [];
var passwordLength = 0;
var newPassword = [];

//Made some errays here
var upper = upperLetters.split(" ");
var lower = lowerLetters.split(" ");
var number = numbers.split(" ");
var symbol = symbols.split(" ");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  newPassword = [];
  passwordGenerated = [];
  passwordLength = prompt(
    "Please enter the number of characters for your password:",
    "9"
  );
  if (passwordLength == null || passwordLength == "") {
    alert("User cancelled the prompt.");
  } else if (passwordLength < 8) {
    alert("Your number has to be bigger than 8");
    writePassword();
  } else if (passwordLength > 128) {
    alert("Your number has to be smaller than 128");
    writePassword();
  } else if (8 <= passwordLength <= 128) {
    generatePassword();
  } else {
    alert("It has to be a number.");
    writePassword();
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword.join("");
  return;
}

//Selects the random characters left
function makeArray() {
  for (var i = newPassword.length; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordGenerated.length);
    newPassword.push(passwordGenerated[randomNumber]);
  }
  return;
}

//This function makes sure to add at least one character of what we select.
function generatePassword() {
  var alphaUpper = confirm("Do you want uppercase letters?");
  if (alphaUpper) {
    passwordGenerated = passwordGenerated.concat(upper);
    //Selects one random uppercase letter
    var randomNumber = Math.floor(Math.random() * upper.length);
    newPassword.push(upper[randomNumber]);
  }
  var alphaLower = confirm("Do you want lowercase letters?");
  if (alphaLower) {
    passwordGenerated = passwordGenerated.concat(lower);
    //Selects one random lowercase letter
    var randomNumber = Math.floor(Math.random() * lower.length);
    newPassword.push(lower[randomNumber]);
  }
  var alphaNumeric = confirm("Do you want numbers?");
  if (alphaNumeric) {
    passwordGenerated = passwordGenerated.concat(number);
    //Selects one random number
    var randomNumber = Math.floor(Math.random() * number.length);
    newPassword.push(number[randomNumber]);
  }
  var alphaSymbols = confirm("Do you want symbols?");
  if (alphaSymbols) {
    passwordGenerated = passwordGenerated.concat(symbol);
    //Selects one random symbol
    var randomNumber = Math.floor(Math.random() * symbol.length);
    newPassword.push(symbol[randomNumber]);
  }
  makeArray();
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
