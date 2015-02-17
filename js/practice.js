// practice

console.log(3 > 2);

console.log('Taylor' != 'Spencer');

// --        >= , <= , == , !=       -- equal to, and not equal to

// && is logical 'and' -- only true if both values are true
console.log(true && true);

// || is logical 'or' -- true if one of the values given is true
console.log(true || false);
console.log(5 || false);

// ! is a unary operator that flips the value given to it. 
console.log(!true);

// The Conditional (Ternary) Operator
// the value to the left of the question mark picks which value will come out
// if it's a true value - left value is chosen, if falsy - the right value comes out

var myvar = 0;

console.log( myvar ? 1 : 2);


// null + undefined means absense of meaningful value

// 0, NaN, and "" (empty string) == false
console.log(false == "");
// true

// No automatic type conversions 
// === , !===      
// precisely equal to , not precisely equal to
console.log(false === "");
// false

// --- || can be used as a Fallback to default method
console.log(null || 'user');
console.log('Spencer' || 'user');
// If value on Left can be converted to true, it will be used -- otherwise it will fallback to Right

console.log(null && 'user');
console.log('Spencer' && 'user');
// If value on Left can be converted to false, it will be used -- otherwise it will fallback to Right

// Short Circuit Evaluation
console.log(true || 'Ignore me');
console.log(false && 'Ignore me');

// Four Types of JavaScript values
// 1) Numbers
// 2) Strings
// 3) Booleans  --- true & false
// 4) Undefined Values

// Operators 
// binary operators (+, -, *, /, %)
// string concatenation (+)
// comparison (==, !=, >=, <=, >, <, ===, !==)
// logic (&&, ||)
// unary (- to negate number, ! to negate logically and typeof to find a values type)
// ternary (?:) to pick one of two values based on a third value

// Environment - is the group of variables in any given project, browsers have default functions like alert and stuff to track mouse clicks
// invoke, call, apply a funcition
// a function is a piece of program wrapped in a value 
// values give to functions are called 'arguments' -- alert function needs only one of them

// Console.log
var x = 10;
console.log('The value of x is', x);

// Math Max
console.log(Math.max(2, 4, x));
// --> 10 --- this function RETURNS the highest value

//Math Min -- being fed into the plus operator
console.log(Math.min(2, 4, x) + x);
// --> 12


//NOT USED MUCH -- no control over look
// alert
// confirm gives back a boolean
// -- confirm('Are you ready to travel with me?');

// prompt
// -- prompt('What is your favorite thing about me?', 'My favoritest thing about you is...');

/*
var theNumber = Number(prompt("Pick a number",""));
alert("Your number is the square root of " + theNumber * theNumber);
*/

// the function 'Number' converts a value into a number - needed because the  result of prompt is a string value.
// Functions: String , Boolean , Number -- all convert values to these types. 

// Conditional Execution
// choose between two routes based on a Boolean value - using if
// var theNumber = Number(prompt("Pick a number",""));
// if (!isNaN(theNumber))
// 	alert("Your number is the square root of " + theNumber * theNumber);
// else
// 	alert("That's not a number you dolt.");

// isNaN is a standart JavaScript function that returns true only if the argument given to it is NaN, 
// the Number function happens to return NaN when you give it a string that doesn't represent a valid number
// ---- "unless theNumber is NaN, do this" -- if theNumber is not NaN (is a number), alert with the square root, else tell them they're a dolt. 

// var num = Number(prompt("Pick any number ","0"));
// if (num < 10)
// 	alert("Small");
// else if (num < 100)
// 	alert("Medium");
// else
// 	alert("Large");

// this program first checks if the number is less than 10 - if it is, it chooses that branch and alerts with 'Small'.

// While loops

// var number = 0
// while (number <= 12) {
// 	console.log(number);
// 	number = number +2;
// }

//the variable 'number' demonstrates how a variable can track the progress of a program. It is a VARIABLE - afterall. 
// every time the loop repeats, 'number' is incremented by 2, then at the beginning of every repetition, it's compared with 12 to make sure it's still <=

// { } Curly braces are used whenever we need to execute multiple statements within our loop.
// Braces do for statements, what parenthesis do for Expressions. - grouping them together, making them count as a single statement. 
// Block = a sequence of statements wrapped in braces

// NOTE ON STYLE - many programmers wrap every loop/if statement in braces - it's unnecessary but safe. 


// var result = 1;
// var counter = 0;
// while (counter < 10) {
// 	result = result * 2;
// 	counter = counter + 1;
// 	console.log(result);
// }
// console.log(result);

// Do Loops
// do loop executes it's body at least once - and starts testing whether it should stop after it's first execution. 
// to reflect this - the test appears after the body of the loop. 

/*
do {
	var name = prompt("Who are you?");
} while (!name);
console.log(name);
*/

// applying the ! operator will convert a value to Boolean type before negating it. 
// ALL STRINGS CONVERT TO TRUE - except "" 

// For Loops

/*
for (var number = 0; number <= 12; number = number + 2)
	console.log(number);
*/

// first - initializes the loop - definining a variable.
// second - expression that checks if the loop must continue
// third - updates the state of the loop after every iteration

/*
var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
	result = result * 2;
console.log(result);

for (var current = 20; ; current++) {
	if (current % 7 == 0)
		break;
}
console.log(current);
*/

// Breaking out of loops:
// break
// continue

// counter = counter + 1;
// same as:
// counter += 1;  --- result *= 2 (double result); counter -= 1 (count downward);
// shorter still:
// counter++ (increment by one), counter-- (decrease by one)


// Common code 
/*
if (variable == "Value 1") action1();
else if (variable == "Value 2") action2();
else if (variable == "Value 3") action3();
else defaultAction();
*/

// switch
/*
switch (prompt("What is the weather like today?")) {
	case "rainy":
		console.log("Don't forget your umbrella you sassy dog.");
		break;
	case "sunny":
		console.log("You don't need a coat.");
	case "cloudy":
		console.log("Go outside.");
		break;
	default:
		console.log("If you're not going to tell me, I don't know what to tell you.");
		break;
}
*/
// "sunny" returns both "You don't need a coat." and "Go outside." while cloudy doesn't. both share a break

console.log("--- \nLooping a Triangle")

/*
for (var hash = "#"; hash.length <= 7; hash += "#") {
	console.log(hash);
};
*/

// I was trying to use ++ instead of += "#" - which makes much more sense because you cannot plus 1 to a string. 


// FizzBuzz
// My initial attempt
/*
console.log("Begin FizzBuzz");

for (var i = 1; i <= 100; i++) {
	if (i % 3 == 0)
		console.log("Fizz");
	else if (i % 5 == 0)
		console.log("Buzz");
	else if ((i % 3)+(i % 5) == 0)
		console.log("FizzBuzz");
	else 
		(console.log(i));

};
console.log("Finished");
*/


// Eloquent FizzBuzz
console.log("--- \nBegin FizzBuzz");

/*
for (var i = 1; i <= 100; i++) {
	var output = "";
	if (i % 3 == 0)
		output = "Fizz";
	if (i % 5 == 0)
		output += "Buzz"
	console.log (output || i);
};
console.log("Finished");
*/

// I didn't use the or operator - which will use the
// OR (||) If value on Left can be converted to true, it will be used -- otherwise it will fallback to Right
// That's why you set it to "" so it is falst unless there is a value. 

// QUESTION: Why did we use += instead of something else? 
// = works in place of += in this case, though == does not. 

// 	x += y (is equal to) x = x + y. 
// It makes sense - add "" from output to the new string. It adds a string to what was nothing. And doesn't change the value of the var. 


// Chess Board
console.log("--- \nChess Board \n An Adjustable Grid");

// at each position of the grid there is either a "_" or a "#"
// they must alternate
// must be a variable 'size' that determines where a '\n' should go. 

// alternate _ and #
// if string.length is = 'size' then insert a \n
// start this line with the opposite char 

/*
var size = 13;

var board = "";

for (var y = 0; y < size; y++) {
	for (var x = 0; x < size; x++) {
		if ((x + y) % 2 == 0)
			board += " ";
		else
			board += "#";
	}
	board += "\n";
}

console.log(board);
*/





/* ------> FUNCTIONS <------- */
// wrapping a piece of program into a value
// a tool to reduce repetition

var square = function(x) {
	return x * x;
};

console.log(square(12));

//functions have a set of
// parameters - in this case only x
// body - contains the statements that are to be executed when the func is called
// ALWAYS wrap function body in braces


var power = function(base, exponent) {
	var result = 1;
	for (var count = 0; count < exponent; count++)
		result *= base;
	return result;
};
// x *= y (same as)	x = x * y

var makeNoise = function() {
	console.log("ChankChankChankity!");
};

// power and square returned values. 
// makeNoise produced a side effect

// return --- determines the value a function will return


var x = "outside";

var func1 = function () {
	x = "inside f1";
};
func1();
console.log(x);

// variable is local if you don't use the 'var' while nesting in your function

//lexical scoping
// in other languages braces usually determine a local environment
// in JS FUNCTIONS are the only thing that create a new scope 

var something = 1 ;
{
	var something = 3;
}

console.log(something);

// Function Declarations
// Instead of var clone = function....

console.log("The future says:", future());

function future() {
	return "We will Still have no flying cars.";
}
// works even when the function declaration is below the code that uses it. 
// allows us to order a code based on what we feel like is meaningful

function example() {
	function a() {} // okay. 
	if (something) {
		function b() {} // DANGER! -- Do not use Function Declarations inside if
		}
}




