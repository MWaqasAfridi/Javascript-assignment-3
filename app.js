// =============>chapter 9 to 11 user input & conditional statement=============>
// Question no 1
// var city=prompt("Enter the city name");
// if(city==="karachi"){
//       console.log("Welcome to city lights");
// }
// else{
//     console.log("condition false howa is leye me print howa")
// }


// Question no 2
// var gender=prompt("Enter your gender");
// if(gender==="male"){
//       console.log("Good Morning Sir")
// }
// else if(gender==="female"){
//     console.log("Good Morning Ma'am");
// }
// else{
//     console.log("INVALID GENDER")
// }


// Question no 3
// var color=prompt("Enter your color");
// if(color==="red"){
//      document.write("Must Stop");
// }
// else if(color==="yellow"){
//     document.write("Ready to move");
// }
// else if(color==="green"){
//     document.write("Move now");
// }
// else{
//     document.write("Follow the Rule")
// }


// Question no 4
// var carFuel=prompt("Enter fuel in litres");
// if(carFuel<"0.25litres"){
//     document.write("Please refill the fuel in your car");
// }
// else{
//     document.write("Dont't refill the fuel in your car");
// }


// Question no 5
// var a = 4;
// if (++a === 5){
// alert("condition true hai chaly ga");
// }
// var b = 82;
// if (b++ === 83){
// alert("condition false hai ni chali ga");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition false hai ni chali ga");
// }
// if (c === 13){
// alert("condition true hai is leye chala");
// }
// if (++c < 14){
// alert("condition false kabi ni chaly ga");
// }
// if(c === 14){
// alert("condition true chaly ga wa bai saye hogaya ye tu maza aya");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False hai ni chalne wala");
// }


// Question no 6
// document.write("<h1>Marks Sheet</h1>");

// var html=+prompt("Enter your html marks");
// var css=+prompt("Enter your css marks");
// var js=+prompt("Enter your js marks");
// var totalMarks=prompt("Enter your total marks");

// var obtainedMarks=html+css+js;
// var percentage=(obtainedMarks/totalMarks)*100;

// document.write("Total marks: "+totalMarks+"<br>");
// document.write("Marks obtained: "+obtainedMarks+"<br>");
// document.write("Percentage: "+percentage+"%"+"<br>");

// if(percentage>=80){
//      document.write("Grade: "+"A-one"+"<br>");
//      document.write("Remarks: "+"Excellent");
// }
// else if(percentage>=70){
//     document.write("Grade: "+"A"+"<br>");
//     document.write("Remarks: "+"Good");
// }
// else if(percentage>=60){
//     document.write("Grade: "+"B"+"<br>");
//     document.write("Remarks: "+"You need to improve");
// }
// else if(percentage<60){
//     document.write("Grade: "+"Fail"+"<br>");
//     document.write("Remarks: "+"Sorry");
// }
// else{
//     document.write("Dobara Paper Dena Ap Fail se bhi 2 Ungly Uper Hu");
// }


// Question no 7
// var secretNumber=+prompt("Enter your secret number");
// var guessNumber=+prompt("Enter the guess number");
// if(guessNumber===secretNumber){
//        document.write("Bingo! Correct answer");
// }
// else if(guessNumber===secretNumber+1){
//     document.write("Close enough to the correct answer");
// }
// else{
//     document.write("Not! Correct answer");
// }


// Question no 8
// var number=+prompt("Enter a Number");
// if(number%3===0){
//     document.write("Yes, "+number+" is divisible by 3")
// }
// else{
//     document.write("No, "+number+" is not divisible by 3")
// }


// Question no 9
// var num=+prompt("Enter a Number");
// if(num%2===0){
//     document.write(num+" is an even number");
// }
// else{
//     document.write(num+" is an odd number");
// }


// Question no 10
// var temp=+prompt("Enter your Temperature");
// if(temp>40){
//    document.write("It is too hot outside");
// }
// else if(temp>30){
//     document.write("The weather today is Normal");
//  }
//  else if(temp>20){
//     document.write("Today's Weather is cool");
//  }
//  else if(temp>10){
//     document.write("OMG! Today's weather is so Cool");
//  }
//  else{
//     document.write("Aj mosam ka maza mai")
//  }


// Question no 11
// var num1=+prompt("Enter your first number");
// var num2=+prompt("Enter your second number");
// var operator=prompt("Enter your operator");

// if(operator=="*"){
//   document.write(num1*num2);
// }

// else if(operator=="/"){
//     document.write(num1/num2);
//   }

//   else if(operator=="+"){
//     document.write(num1+num2);
//   }

//   else if(operator=="-"){
//     document.write(num1-num2);
//   }

//   else if(operator=="%"){
//     document.write(num1%num2);
//   }

//   else{
//     document.write("operator wrong hai ap ka");
//   }



// ========>chapter 12 to 13 IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS=======>
// Question no 1
// var input=prompt("Enter a Character");

// if(input.charCodeAt() >= 48 && input.charCodeAt() <= 57 ){
//     alert(input + " is a number");
// }
// else if(input.charCodeAt() >= 65 && input.charCodeAt() <= 90 ){
//     alert(input + " is an uppercase letter");
// }
// else if(input.charCodeAt() >= 97 && input.charCodeAt() <= 122 ){  
//     alert(input + " is an lowercase letter");
// }
// else{
//     alert("wrong letter");
// }


// Question no 2
// var num1=prompt("Enter your first number");
// var num2=prompt("Enter your second number");
// if(num1 > num2){
//      alert("Num1 = "+num1+" is Greater than Num2 = "+num2);
// }
// else if(num2 > num1){
//     alert("Num2 = "+num2+" is Greater than Num1 = "+num1);
// }
// else{
//     alert("Num1 = "+num1+" is Equal to Num2 = "+num2);
// }


// Question no 3
// var num=prompt("Enter your number");
// if(num > 0){
//       document.write("The number is positive");
// }
// else if(num < 0){
//     document.write("The number is negative");
// }
// else{
//     document.write("The number is zero");
// }


// Question no 6
// var greeting;
// var hour=13;
// if(hour < 18){
//    greeting="Good day";
// }
// else{
// greeting="Good evening";
// }