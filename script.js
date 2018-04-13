/*
var name = 'David';
console.log(name);

var lastName = 'Allen';
console.log(lastName);

var age = 29;
console.log(age);

var alive = true;
console.log(alive);


var name = 'David';
var age = 29;

console.log(name + " is " + age);
// console.log(age + age);

var job, isMarried;

job = 'web developer';
isMarried = false;

console.log(name + " is a " + job);

var lastName = prompt('What is the last name?');
console.log(lastName);

alert('Hello!')

var age = 29;
var currentYear = 2018;
var birthYear = currentYear - age;
console.log(birthYear);

var ageDavid = 29;
var ageMark = 30;



//// If/Else statements

var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
	console.log(name + ' is married');
} else {
	console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;
if (isMarried) {
	console.log('Yes!')
} else {
	console.log('No!')
}

if (23 === "23") {
	console.log('Something to print....');
}

/// Boolean logic

var age = 20;

if (age <= 19) {
	console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
	console.log('John is a young man');
} else {
	console.log('John is a man');
}

///// switch statement

var job = '';

job = prompt('What does John do?')

switch (job) {
	case 'teacher':
		console.log('John teaches kids.');
		break;
	case 'driver':
		console.log('John drivers a cab');
		break;
	case 'cop':
		console.log('John fights crime');
		break;
	default:
		console.log('John does something else');
}

//// Coding Challenge


var johnHeight = 182;
var johnAge = 29;
var friendHeight = 188;
var friendAge = 28;
var thirdHeight = 190;
var thirdAge = 27;

// 1 ince = 2.54 cm

var johnScore = johnHeight + (5 * johnAge);
var friendScore = friendHeight + (5 * friendAge);
var thirdScore = thirdHeight + (5 * thirdAge);

if (johnScore > friendScore && johnScore > thirdScore) {
	console.log("John wins with a score of " + johnScore);
} else if (friendScore > johnScore && friendScore > thirdScore) {
	console.log("Friend wins with a score of " + friendScore);
} else if (thirdScore > johnScore && thirdScore > friendScore) {
	console.log("Third player wins with a score of " + thirdScore);
} else {
	console.log("The scores are equal! All scored " + johnScore);
}

// Functions
// functions are like containers that hold code, and we pass arguments into them
// functions are like machines
// important for DRY - Don't Repeat Yourself

function calculateAge(yearOfBirth) {
	var age = 2016 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1932);
var ageMary = calculateAge(1948);


function yearsUntilRetirement(name, yearOfBirth) {
	var	age = calculateAge(yearOfBirth);
	var retirement = 65 - age;
	console.log(name + "'s age is " + age);
	if (retirement >= 0)
	console.log(name + " has " + retirement + " years left until retirement")
	else {
		console.log (name + " is already retired!")
	}
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Beth', 1980);
yearsUntilRetirement('Patrick', 1940);

///// Statements and expressions

function someFun(par) {
	// code
}

var someFun = function(par) {
	//code
}

// expressions produce a value
// statements perform actions, but not immediate values

// Expression
3 + 4;
var x = 3;

// Statements
if (x === 5) {
	// some code
}

*/

///// Arrays

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(years[0]);

// to change value
names[1] = 'Ben';
console.log(names);

// arrays can contain mixed data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); // add element at end of array
john.unshift('Mr.'); // add element at beginning of array
john.pop(); // removes last element of array
john.shift(); // removes first element of array

console.log(john);

//alert(john.indexOf('Smith')); // returns the index; you could use this to determine if something is in an array or not
// for example:
// is john a teacher or not?

if (john.indexOf('teacher') === -1) {
	console.log('John is NOT a teacher.');
}	else {
		console.log('John is a teacher');
}

