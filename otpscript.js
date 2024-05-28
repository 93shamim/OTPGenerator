   
   //generate rando OTP
   var down = document.getElementById("otpappear"); 
   var predefinedNumber = "";  // Global variable to store the predefined number

   function generateotp(){
      var minm = 1000; 
      var maxm = 9999; 
      predefinedNumber = (Math.floor(Math.random() * (maxm - minm + 1)) + minm).toString();
      down.innerHTML = predefinedNumber;
      // console.log("Generated OTP is: " + predefinedNumber);
   }

// //Verify OTP
   function optvarification() {
      let inputsotp = [
         document.getElementById("input1").value,
         document.getElementById("input2").value,
         document.getElementById("input3").value,
         document.getElementById("input4").value
      ];

      // console.log("Input values:", inputsotp);

      if (inputsotp.length == 4) {
         let userInput = inputsotp.join(''); // Combine the input / concatenate the array elements into a single string

         // console.log("User input:", userInput);
         // console.log("Predefined OTP:", predefinedNumber);

         // Compare the user input with the predefined number
         if (userInput === predefinedNumber && userInput !== "" ) {
               document.getElementById("otpverifymsg").innerHTML = "<b><font color='green' size='20px'>OTP Matched</font></b>";
               // console.log("Matched");
         }else {
               document.getElementById("otpverifymsg").innerHTML = "<b><font color='red' size='20px'>OTP Not Matched</font></b>";
               // console.log("Not Matched");
         }
      } else {
         console.log("No input");
      }
   }

// //generate rando OTP
// var down = document.getElementById("otpappear"); 
// let predefinedNumber = "";

//      function generateotp(){
//         var minm = 1000; 
//         var maxm = 9999; 
//         predefinedNumber = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
//         down.innerHTML = predefinedNumber;
//         console.log("Generated OTP is: " + predefinedNumber);
//         }

// //Verify OTP
// let inputsotp = document.getElementsByTagName('input');

// function optvarification() {
//    if (inputsotp.length == 4) {
//       let input1 = inputsotp[0].value;
//       let input2 = inputsotp[1].value;
//       let input3 = inputsotp[2].value;
//       let input4 = inputsotp[3].value;

//       // Combine the input values into a single string
//       let userInput = parseFloat(input1) + parseFloat(input2) + parseFloat(input3) + parseFloat(input4);
//       // let userInputs = parseFloat(userInput);
//       console.log(userInput);

//       // Compare the user input with the predefined number
//       if (userInput === predefinedNumber) {
//          console.log("Matched");
//       } else {
//          console.log("Not Matched");
//       }
//    } else {
//       console.log("No input");
//    }
// }

//Switch button- dark to white
 const switchToggler = document.getElementById('switch-toggler');
 
 switchToggler.addEventListener("click", function(){

   var root = document.querySelector(':root');
   var rootstyle = getComputedStyle(root);

   const rootStyleBg = rootstyle.getPropertyValue('--theme-bg')
   const rootStyleColor = rootstyle.getPropertyValue('--theme-color')

   if(rootStyleBg === 'url("black-bg.jpg")' && rootStyleColor === "aliceblue"){

      root.style.setProperty('--theme-bg', '#d5d3d3');
      root.style.setProperty('--theme-color', 'black');
   }else
   {
      root.style.setProperty('--theme-bg', 'url("black-bg.jpg")');
      root.style.setProperty('--theme-color', 'aliceblue');
   }
 });