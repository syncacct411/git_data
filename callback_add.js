
//
 function add(numbersArray, callBack)
 {
   var result = 0;
   for (number in numbersArray)
   {
     result = result + numbersArray[number];
   }
   callBack(result);
 }
//
//
// //********** METHOD 1 ************
//     function passThisFunction(finalResult)
//     {
//       document.write("(METHOD 1) The total is: ", + finalResult);
//       console.log("(METHOD 1) The total is: ", + finalResult);
//     }
//     add([10,3,5,7], passThisFunction);
// //********** METHOD 1 ************
//
//
// //********** METHOD 2 ************
//     add([1,3,5,7], function(finalResult)
//     {
//       document.write("(METHOD 2) the total is: ", + finalResult);
//       // console.log("(METHOD 2) the total is: ", + finalResult);
//     });
// //********** METHOD 2 ************
