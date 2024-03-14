
function printPoem(){
    console.log('Twinkle Twinkle Little Star');
    console.log('How I wonder what you are');
}

printPoem();

// Create a function to roll a dice & always display the value of the dice 1 to 6.

function rollDice(){
    const random = Math.floor(Math.random() * 6 + 1);
    console.log(random);
}

rollDice();

// --- Functions with Arguments ---
function printName(name){
    console.log(name);
}

printName('Sagar');

// Create an function that given us the average of 3 numbers
function calcAvg(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}

calcAvg(5,3,5);

// Create an function that prints the multiplication table of number
function printTable(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}

printTable(2);

function getSum(n){
    let sum = 0;

    for(let j=1; j<=n; j++){
        sum += j;
    }
    console.log(sum);
    return sum;
}

getSum(10);
getSum(100);
getSum(1000);
getSum(10000);
getSum(1000000);


// Create an function that return the concatenation of all strings in an array
let str = ["Hi", "Hello", "Bye", "!"];

function concat(str){
    let result = '';

    for(let k=0; k<str.length; k++){
        result += str[k];
    }

    return result;
}

// --- Scope Function ---
let sum = 52; //Global Scope

function calSum(a,b){
    let sum = a+b; // Function Scope
    console.log(sum);
}

calSum(1,2);

// --- Block Scope ---
for(let i=1; i<=5; i++){
    console.log(i) // Block Scope
}

// -- Lexical Scope ---
function outerFunc(){
    let x = 5;
    let y = 6;

    function innerFunc(){
        console.log(x);
    }

    innerFunc();
}


// --- Practice Qs ---
// What will be the outpue?

let greet = 'Hello'; // Global Scope

function changeGreet() { // Outer Function
    let greet = 'Namaste'; // Function Scope
    console.log(greet);

    function ineerGreet() { // Inner Function
        console.log(greet); // Lexical Scope
    }
}
console.log(greet);
changeGreet();

// Output : Hello Namaste

// --- Function Expression ---
let name = 'Sagar';
let x = 5;

let sum1 = function(a,b){
    return a+b;
}

let hello1 = function() {
    console.log('Hello');
}

hello1 = function() {
    console.log('Namaste');
}

// --- Higher Order Function

function multipleGreet(func, count){
    for(let i=1; i<=count; i++) {
        func();
    }
}

let greet1 = function() {
    console.log('Hello');
}

multipleGreet(function() {console.log('Namaste')},1000);

// --- Higher Order Function

function oddEvenFactory(request){
    if(request == 'odd'){
        // let odd = function(n) {
        //     console.log(!(n%2 == 0));
        // }
        // return odd;
        // OR
        return function(n) {
            console.log(!(n%2 == 0));
        }


    } else if(request == 'even'){
        let even = function(n) {
            console.log((n%2 == 0));
        }
        return even;
    } else {
        console.log('Wrong request!');
    }    
}
let request = 'odd'; //odd or even

// --- Methods ---
const calculator = {
    num: 55,
    add: function(a,b) {
        return a+b;
    },
    sub: function(a,b) {
        return a-b;
    },
    mul: function(a,b) {
        return a*b;
    }
}