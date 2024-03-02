// Java script is a synchronous and single threaded language
//*How JavaScript works?
// Ans-Everything in JavaScript happens inside an "execution context".

// Execution context has two component
// 1)memory component[variable environment] 
// -This is the place where all variables and functions are stored as key value pairs. eg-{key: value ||  n:2;} 

//  2)code component[Thread of execution]
// -This is the place where code is executed one line at a time

// call stack is a stack which maintains the order of execution of execution contexts.
// call stack can be called as --> 1.execution contxt stack, 2.program stack, 3.control stack, 4.runtime stack, 5.machine stack

// single threaded means java script can ececute one command at a time & 
// synchronous  single threaded language means it can ececute one command at a time in a specific order. 
// IN java script operators are executed as in a particular order -> *,/,+,-
// *,/ have same priority and if there r both then it will be calculated from left to right ex: 2*3/5 -> 6/5 -> 1
// +,- have same priority and if there r both then it will be calculated from left to right ex: 2+3-5 -> 5-5 -> 0
// if there are braces then calculation inside that will be done first ex: 2+3*(5-1) -> 2+3*4 -> 2+12 -> 14

// operators precedence:
// 1. *, / 
// 2. +, -
// 3. = (assignment)

let a = 2 + 3 * 5; 
console.log(a); // 17

let b = (2 + 3) * 5;  
console.log(b); // 25

let c = 2 + 3 * 5; 
console.log(c); // 17

// uday kiran   ramaraju uday kiran ramaraju uday kiran ramaraju uday kiran ramaraju uday kiran ramaraju uday kiran ramaraju 
alert('hey hi just intro to docker learning it...! and trying to switch the job to get more than 15lpa....!')