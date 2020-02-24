// //create onclick function to get
var masterarray=[];
// //A.first prompt
function generatePassword(){

var userLength = prompt("How many characters would you like your password to contain?")
if (parseInt(userLength) < 8 || parseInt(userLength) >128) {
 //alert length not in range
  alert ("This is not not a secure length.")  
 //ask again for user length

}

else {
  
  //ask for special characters
  var askSpecial;
  var askSpecial = confirm("Click ok to include special characters.")
  var specialArr=["!","$","%","&","@"];
  //if they say yes
  if(askSpecial) {
      //update masterarray
      for(var i=0; i<specialArr.length;i++){
        masterarray.push(specialArr[i]);
      }

      console.log(masterarray)

  // ask for numeric characters
  var askNum;
  var askNum = confirm("Click ok to include numeric characters.")
  var numArr = [1,2,3,4,5,6,7,8,9];
  //if they say yes 
  if(askNum){
    //update masterarray 
      for(var i=0; i<numArr.length;i++){
      masterarray.push(numArr[i]);
      }

      console.log(masterarray)

  //ask for lower case letters
   var lowerChar;
   var lowerChar = confirm("Click ok to confirm lower case letters.")
   var charArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   if(lowerChar){
      
    for(var i=0; i<charArr.length;i++){
      masterarray.push(charArr[i]);
   }

   console.log(masterarray)
    
  //ask for upper case letters
   var upper;
   var upper = confirm("Click ok to confirm upper case letters.")
   var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   if(upper){
    for(var i=0; i<upperArr.length;i++){
      masterarray.push(upperArr[i]);
   }

   console.log(masterarray)
  
  var newPass="";
  var newPass = confirm("Click ok to confirm secure password.")
  if(newPass){  
  for(var i=0; i<userLength.length;i++){
        newPass += Math.floor(Math.random() * (masterarray.length - 1)-0+1) + 0
                  
        console.log(newPass)
    }          






}

}

}

}

}

}

}


// function password(userLength,){
//   var password="";
//   for (var i=0; i<userLength.length;i++){
//   password += Math.floor(Math.random() * (masterarray.length - 1)-0+1) + 0
// }
// return password;

// }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("hello")
  var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

