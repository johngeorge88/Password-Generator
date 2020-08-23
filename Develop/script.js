// Assignment code here
var password = {
  // lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  lowerCase: ("abcdefghijklmnopqrstuvwxyz"),
  upperCase: ("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
  number: ("0123456789"),
  symbol: ("!@#$%^&*()_-+={[}];'<,>.?/")
}

//Password length
var passwordLength = function() {
  // ask about lenght
  var passwordLengthPrompt = window.prompt(
    "Please choose a length of at least 8 characters and no more than 128 characters"
  );

  // check if prompt answer was left blank, user hit "cancel", or provided a number instead
  if (passwordLengthPrompt === null || passwordLengthPrompt === "" || isNaN(passwordLengthPrompt) || passwordLengthPrompt < 8 || passwordLengthPrompt > 128) {
    window.alert("You need to provide a valid length! Please try again.");
    return passwordLength();
  }else {
  // convert answer from prompt to an actual number
  passwordLengthPrompt = parseInt(passwordLengthPrompt);
  }
  console.log(passwordLengthPrompt)
}

//Password Lower case
var passwordLowerCase = function() {
  //ask about lower Case
  var passwordLowerPrompt = window.prompt(
    "Would you like the password to have lower case letters? Enter 'YES' or 'NO' to choose."
  );

  // check if prompt answer was left blank, user hit "cancel", or provided a number instead
  if (passwordLowerPrompt === "YES" || passwordLowerPrompt === "yes") {
  return true;
}else (passwordLowerPrompt === null || passwordLowerPrompt === "" || !isNaN(passwordLowerPrompt))
  window.alert("You need to provide a valid length! Please try again.");
  return passwordLowerCase();

  console.log(passwordLowerCase)
}

function getRandomLower() {

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

passwordLength ()