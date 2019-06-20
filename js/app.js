Part 1
//1. concatenation uses "+" to combine strings together; 
// console.log('hello' + 'world')
//interpolation allow us to insert variables into strings
// const adjective = 'beautiful';
//console.log('what a' + adjective + 'world');
//2. DRY= don't repeat yourself, we need it to be efficent, better code
// we can use loops
//3. Declaring a variable doesn't give it a value yet, while assigning a value does. 
//4. Const should be used when the identifier won't be reassigned, 
//let should be used when the variable may be reassigned and only where its defined in
//5. Parent directory refers to the main directory that holds others
//6. you can use man before the command to find out more information about it
//7. Tab completion auto completes directories/ files after you start typing so you don't need to type everything out

Part 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

//1. a < b;
//2. c > d;
//3. 'Name' === 'Name';
//4. a != b < c;
//5. a != a <= d;
//6. e === 'Kevin';
//7. 48 == '48';

Part 3

// 1. while (true) {
//	console.log('Do not run this loop');
//}
//  this would run infinite because there is no condition to stop it


// 2. const runProgram = true;
// while (runProgram) {
//	console.log('Do not run this loop');
//	runProgram = false;
// }

// this would run one time because the next time runProgram would be false


// 3. let letters = "A";
// let i = 0;

// while (i < 20) {
//	letters += "A";
//	i++;
//}
//console.log(letters);

//i would start out at 0, then the second line would add 1 then the third line would add 1 
//so the next time i would be 2 so the code would log 10 times

//The expected result was that A would log 21 times 


Part 4
//1. Both for loop and while loop will prevent an infinite loop from happening,
//but a for loop doesn't have to declare any variables outside of the loop but
//a while loop does

//2. for (let i = 0; i < 1000; i++) {
//	   console.log([i]);
// }

//3. for (let i = 0; i < 100; i++) {
//	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// }
// The first part of the control statement is that i starts at 0, the second part of the
// control statement is that i needs to stop before it becomes 100, the third part of the
// control statement is that i plus 1

//4. for (let i = 999; i > 0; i--) {
//    console.log([i]);
// }

//5.  for (let i = 1; i <= 10; i++) {
//	  console.log("The value of i is: " + [i] + " of 10");
//}