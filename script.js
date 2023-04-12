/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions

let jonas_matilda = 'JM'
let $function = 27;
let PI = 3.1415;

let myFirstJob = 'Programator';
let myCurrentJob = 'Coder';


console.log(myCurrentJob);
*/


//    // doar un rand sau un bloc /**/

/*let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);


let year;
console.log(year);
console.log(typeof year);

year = 1991;

console.log(typeof year);


console.log(typeof null);

*/


/*let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;  const = cand nu se mai schimba valoarea variabilelor


var job = 'programmer';
job = 'teacher'

lastName = 'Schmerdtmann';
console.log(lastName);*/

/*
// Math Operatos
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// 2 ** 3 means 2 to the power of 3 =2*2*2


const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
// Assigment operatos
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x=x*4 = 100
x++; //x=x+1
x--;
x--;
console.log(x);


// Comparison operatos


console.log(ageJonas > ageSarah); // >,<,>=,<=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;


console.log(now - 1991 > now - 2018);*/



/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);



let x, y;
x = y = 25 - 10 - 5; // x=y=10, x=10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);*/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �*/

/*const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;



const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);


/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
console.log(jonasNew);


console.log(`Just a regular string ...`);

console.log('String with \n\
multiple \n\
linest`);

console.log(`String
multiple
lines`)*/



/*const age = 15;


if (age >= 18) {
    console.log('Sarah cand start driving license ');

} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young.Wait another ${yearsLeft} years`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);*/


/*Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement */

//const massMark = 95;
//const heightMark = 1.88;
//const massJohn = 85;
//const heightJohn = 1.76;

/*const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log("John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!");
}*/

//Type Conversion
/*const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion

console.log(`I'm ` + 23 + ` years old `);
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');


let n = '1' + 1; //11
n = n - 1 // 11-1
console.log(n); // 10*/

// 5 falsy values : 0, '', undefined, null, NaN

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all;");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('Height is defined');
} else {
    console.log('Height is UNDEFINED');
}*/

//Equality Operatos : == vs. ===
/*const age = '18';
if (age === 18) console.log('You just became an adult (strict)');

if (age == 18) console.log('You just became an adult (loose)');


const favourite = Number(prompt("Whts your favorite number?"));
console.log(favourite);
console.log(typeof favourite);
// '23'==23 or 23 ===23
if (favourite === 23) {
    console.log('23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23!');*/


/*const hasDriversLicense = true; //A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // && and
console.log(hasDriversLicense || hasGoodVision); // || or
console.log(!hasDriversLicense);



const isTired = false; //c
console.log(hasDriversLicense && hasGoodVision && isTired);


if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive ...');
}*/

///de revazut video logical operatos


/*There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106*/



//const scoreDolphins = (96 + 108 + 89) / 3;
//const scoreKoals = (88 + 91 + 110) / 3;
//console.log(scoreDolphins, scoreKoals);

//if (scoreDolphins > scoreKoals) {
//    console.log('Dolphins win the trophy!');
//} else if (scoreKoals > scoreDolphins) {
//   console.log('Koalas win the trophy!');
//} else if (scoreDolphins === scoreKoals) {
//    console.log('Both win the trophy!');
//}

// bonus 1

/*const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoals = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoals);

if (scoreDolphins > scoreKoals && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy!');
} else if (scoreKoals > scoreDolphins && scoreKoals >= 100) {
    console.log('Koalas win the trophy!');
} else if (scoreDolphins === scoreKoals && scoreDolphins >= 100 && scoreKoals >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy');
}*/


//the switch statement

/*const day = 'wednesday';

switch (day) {
    case 'monday': //day===monday
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup')
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day == 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {

} else if (day === 'saturday' || day === 'sunday'); {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
}*/


// conditional operator (ternary)


/*const age = 23;
//age >= 18 ? console.log('i like to drink wine') :
//  console.log('i like to drink water');


const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);


let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';

}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);*/

/*Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 */



/*const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);*/