

//// ****************** EXAMPLE 1 *****************
//function map(array, callBack) {
//  var newArray = [];
//  for (var i in array) {
//    newArray.push(callBack(array[i], 30));
//  }
//  console.log(newArray);
//}
//
//function operationMultiply(arrayX, valuePerformOn) {
//  return arrayX*valuePerformOn;
//}
//
//function operationAdd(arrayX, valuePerformOn) {
//  return arrayX+valuePerformOn;
//}
//
//map([1,3,5,7,9], operationMultiply); //passing the "function definition", not the "function call"
//// ****************** EXAMPLE 1 *****************


 // ****************** EXAMPLE 2 *****************
 function publish(item, author, callBack)
 {
   console.log(item);
   var date = new Date();
   console.log("new date is... ", date);
   callBack (author, date);
 }

 function messages(author, time)
 {
   var sendTime = time.toLocaleTimeString();
   console.log("Sent From " + author + " at " + sendTime);
 }

 function articles(author, date)
 {
   var pubDate = date.toDateString();
   console.log("written by " + author);
   console.log("published on " + pubDate);
 }

 publish("How are you?", "Monique", messages)
 publish("10 Tips for JavaScript Developers", "Jane Doe", articles)
 // ****************** EXAMPLE 2 *****************


// // ****************** EXAMPLE 3 *****************
// function fullName(firstName, lastName, callBack)
// {
//   console.log("My name is " + firstName + " " + lastName);
//   callBack(lastName);
// }
//
// function greeting(ln)
// {
//   console.log("Welcome Mr." + ln +"!");
// }
//
// fullName("Jackie", "chan", greeting);
// // ****************** EXAMPLE 3 *****************
