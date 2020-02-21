//create onclick function to get
var masterarray=[];
//A.first prompt 
var userLength = prompt("How many characters would you like your password to contain?")
if (userLength <8 || userLength>128) {
  //alert length not in range
  alert ("This is not not a secure length.")  
 //ask again for user length

}

else {
  
  //ask for special characters
  var askSpecial;
  var specialArr=["!","$","%","&","@"];
  //if they say yes
  if(askSpecial) {
      //update masterarray
      for(var i=0; i<specialArr.length;i++){
        masterarray.push(specialArr[i]);
      }
      				//masterArray = ["!","@","$"];
				//run a for loop based on length of speical char 
        //masterarray.push(specialchar[i]);
   
   //ask for numbers
   var askNum;
   var numArr = [1,2,3,4,5,6,7,8,9];
   if(askNum){
      for(var i=0; i<numArr.length;i++){
      masterarray.push(numArr[i]);

   }

   //ask for lower case letters
   var lower;
   var lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   if(lower){
    for(var i=0; i<lowerArr.length;i++){
      masterarray.push(lowerArr[i]);
   }
   
   //ask for upper case letters
   var upper;
   var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   if(upper){
    for(var i=0; i<upperArr.length;i++){
      masterarray.push(upperArr[i]);
   }

  //we will update the masterarray based on yes or no

			//B. generate passwords
			var password="";
			//prob create a dynamic (pwarray) array with data
			//asked from prompt
			//create a forloop based on length, 
			for(var i=0;i<userlength;i++)
			{
				//
				password+=(randomly selected values from masterarray)
				//will need to use math.floor
				//math.random
			}
			//call randomly based on length the masterarray
			console.log(password);
			
			//C. stick to html
			//#password
			//document.getelementbyid("password").val(password);
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

