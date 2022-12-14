// Assignment code here


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

// Array of special characters to be included in password
var specialCharacters = [
  '@', '%','+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.', ];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowercasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ];

// Array of uppercase characters to be included in password
var uppercasedCharacters = [
  'A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function getPasswordOptions() {
  // 3)
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must be less than 128 characters');
    return null;
  }
  // Variable to store boolean regarding the inclusion of special characters
  var hasspecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  // Variable to store boolean regarding the inclusion of numeric characters
  var hasnumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );

  // Variable to store boolean regarding the inclusion of lowercase characters
  var haslowercasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasuppercasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  if (hasspecialCharacters === false && hasnumericCharacters === false && haslowercasedCharacters === false &&
    hasuppercasedCharacters === false) {
      alert('You must choose at least one type of character to be included in your password.');
      return null;
    };
  

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  // Object to store user input
  var passwordOptions = {
    length: length,
    hasspecialCharacters: hasspecialCharacters, 
    hasnumericCharacters: hasnumericCharacters, 
    haslowercasedCharacters: haslowercasedCharacters, 
    hasuppercasedCharacters: hasuppercasedCharacters
  };
  return passwordOptions;
}

function generatePassword() {
  // 2)
  
  var options = getPasswordOptions();
  var passCharacters = [];
  if (options.hasspecialCharacters === true) {
    passCharacters = passCharacters.concat(specialCharacters);
  } 
  if (options.hasnumericCharacters === true) {
    passCharacters = passCharacters.concat(numericCharacters);
  }
  if (options.haslowercasedCharacters === true) {
    passCharacters = passCharacters.concat(lowercasedCharacters);
  }
  if (options.hasuppercasedCharacters === true) {
    passCharacters = passCharacters.concat(uppercasedCharacters);
  }

  var passwordString = ""

  for (let i=0; i < options.length; i++) {
    var randElement = getRandom(passCharacters);
    passwordString += randElement;
  }
    return passwordString;
}



// Write password to the #password input
function writePassword() {
  // 1)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
