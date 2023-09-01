// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
//character types
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numeric = '0123456789';
  var special = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  var password = generatePassword();
  //funtion to generate password based on prompts
  function generatePassword(){
      // setting up length of password
    var lengths = prompt("how long would you like your password?", "must be at least 8 characters and no more that 128");
    if (lengths < 8 ){
      confirm("your password is to short!");
    } else if (lengths > 128 ){
      confirm("your password is to long!")
    } else {
    // if the length is acceptable, setting up prompts for what to include in password
    var iflowercase = confirm("would you like your password to include lowercase characters?");
    var ifuppercase = confirm("would you like your password to include uppercase characters?");
    var ifnumeric = confirm("would you like your password to include numerical characters?");
    var ifspecial = confirm("would you like your password to include special characters?");
  }
    if (!iflowercase && !ifuppercase && !ifnumeric && !ifspecial){
      var choice = alert("you must pick at least one character type");
    } else if (iflowercase && ifuppercase && ifnumeric && ifspecial){
      var choice = lowercase.concat(uppercase, numeric, special);
    } else if (iflowercase && ifuppercase && ifnumeric){
      var choice = lowercase.concat(uppercase, numeric);
    } else if (iflowercase && ifuppercase && ifspecial){
      var choice = lowercase.concat(uppercase, special);
    } else if (iflowercase && ifnumeric && ifspecial){
      var choice = lowercase.concat(numeric, special);
    } else if (ifuppercase && ifnumeric && ifspecial){
      var choice = uppercase.concat(numeric, special);
    } else if (iflowercase && ifuppercase){
      var choice = lowercase.concat(uppercase);
    } else if (iflowercase && ifspecial){
      var choice = lowercase.concat(special);
    } else if (iflowercase && ifnumeric){
      var choice = lowercase.concat(numeric);
    } else if (ifuppercase && ifnumeric){
      var choice = uppercase.concat(numeric);
    } else if (ifuppercase && ifspecial){
      var choice = uppercase.concat(special);
    } else if (ifnumeric && ifspecial){
      var choice = numeric.concat(special);
    } else if (iflowercase){
      var choice = lowercase
    }else if (ifuppercase){
      var choice = uppercase
    } else if (ifnumeric){
      var choice = numeric
    } else if (ifspecial){
      var choice = special
    }
    console.log(choice);
    var password = "";

    for (var i = 0; i < lengths; i++) {
      password += choice[Math.floor(Math.random() * choice.length)];
    } 
    return password;
  }
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
