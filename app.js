// --- Slice Method ---
let str = "ILoveCoding";
let newStr = str.slice(5);
console.log('--- Slice Method ---');
console.log(newStr);

// str.slice(start index, end index)
let newStrA = str.slice(0,5);
console.log(newStrA);

// --- Replace Method ---
let newStrB = str.replace("love","do");
console.log('--- Replace Method ---');
console.log(newStrB);

// --- Repeat Method ---
let newStrC = str.repeat(3);
console.log('--- Repeat Method ---');
console.log(newStrC);

// Practice Qs
// For a Given String 
let msgP = "   help!   ";

// Trim and Convert it to uppercase using Method Chaining
let newStrD = msgP.trim().toUpperCase();
console.log('--- Practice Qs ---');
console.log(newStrD);

// For a string -> let name = "CambridgeUniversity" predict the output
// name.slice(4,9)
// name.indexOf("Uni");
// name.replace("Cambride","Oxford");

let strA = "CambridgeUniversity";
let newStrE = strA.slice(4,9);
console.log(newStrE);
let newStrF = strA.indexOf('bri');
console.log(newStrF);
let newStrG = strA.replace('Cambridge','Oxford');
console.log(newStrG);

// Seperate the University and replace i to t
let newStrH = strA.slice(9).replace("i","t").replace("i","t");
console.log(newStrH);

// --- Arrays - Collection of Data/Elements ---

let students = ['Sagar','Shital','Sahil'];
console.log('--- Array ---');
console.log(students);

// Empty Array
let emptyArr = [];
console.log('--- Empty Array ---');
console.log(emptyArr);

let fruits = ['banana', 'apple', 'mango'];
fruits[0] = "Banana";
console.log(fruits);
fruits[10] = "Kiwi"; // It will create an empty indexes from 3 to 9
console.log(fruits);

// --- Array Methods ---
// --- Array Push --- Add to end
let cars = ['Audi', 'BMW', 'Maruti'];
let carsA = cars.push('Toyota');
console.log('--- Array Push --- Add to end');
console.log(cars);

// --- Array Pop -- Delete from end
let carsB = cars.pop();
console.log('--- Array Pop -- Delete from end');
console.log(cars);

// --- Array Unshift --- Add to start
let carsC = cars.unshift('Toyota');
console.log('--- Array Unshift --- Add to start');
console.log(cars);

// --- Array Shift --- Delete/Shift from start
let carsD = cars.shift();
console.log('--- Array Shift --- Delete/Shift from start');
console.log(cars);

// Practics QS
// For the given start state of an array, change it to final form using methods.

let month = ['January', 'July', 'March', 'Auguest'];

let monthA = month.shift();
let monthB = month.shift();

let monthC = month.unshift('June');
let monthD = month.unshift('July');
console.log('--- Practics QS ---');
console.log(month);

// --- Array IndexOf ---
let carsE = cars.indexOf('Maruti');
console.log('--- Array IndexOf ---');
console.log(carsE);

// --- Array Includes ---
let carsF = cars.includes('Audi');
console.log('--- Array Includes ---');
console.log(carsF);

let carsG = cars.includes('Mahindra');
console.log(carsG);

// --- Array Concat --- Merge 2 Array
let newCars = ['Volvo', 'Hyundai', 'Honda'];
let mergeArray = cars.concat(newCars);
console.log("--- Array Concat --- Merge 2 Array");
console.log(mergeArray);

// --- Array Reverse --- Reverse an array
let carsI = cars.reverse();
console.log("--- Array Reverse --- Reverse an array");
console.log(carsI);

// -- Array Slice --- Copies a portion of an array
let colors = ['red', 'yellow', 'blue', 'orange', 'pink', 'white'];
let colorsA = colors.slice();
console.log(colorsA);

let colorsB = colors.slice(2);
console.log(colorsB);

let colorsC = colors.slice(2,3);
console.log(colorsC);

// --- Array Splice - Remove/replace/add element in place
let colorsD = colors.splice(4);
console.log("// --- Array Splice - Remove/replace/add element in place");
console.log(colorsD);

let colorsE = colors.splice(0,3);
console.log("Splice delete");
console.log(colorsE);

let colorsF = colors.splice(0,3,'black','gray');
console.log(colorsF);
console.log(colors);

// --- Array Sort ---

let days = ['Monday', 'Sunday', 'Wednesday', "Tuesday"];
console.log(' --- Days Array ---');
console.log(days);

let daysSort = days.sort();
console.log("--- Sorted Array ---");
console.log(daysSort);

// --- Practice Qs ---
let months = ['January', 'July', 'March', 'Auguest'];
console.log(months);
let monthsA = months.splice(0,2,'July','June');
console.log(monthsA);

// Reverse an array and return a index of "JavaScript"
let lang = ['C','C++','HTML','JavaScript','Python', 'PHP','Java','SQL'];
console.log(lang);
let langReverse = lang.reverse().indexOf('JavaScript');
console.log(langReverse);

// -- Nested / Multidimenstional Array
let nums = [[1,2], [3,4], [5,6]];
console.log(nums);

// --- Practice Qs ---
// Tic Tac Toe Game
let game = [['X',null,'O'],[null,'X',null],['O',null,'X']];
console.log(game);

// --- Loops ---
// --- For Loop ---
// Print 1 to 5 numbers using for loop
for(let i=1; i<=5; i++){
    console.log('For Loop Interation - '+i);
    console.log(i);
}

// Run Backward Loop
for(let j=5; j>=1; j--){
    console.log('For Loop Backward - '+j);
    console.log(j);
}

// Print all odd numbers 1 to 15
for(let k=1; k<=15; k=k+2){
    console.log('Print all Odd Numbers');
    console.log(k);
}

// Print all even numbers 2 to 10
for(let x=2; x<=10; x=x+2){
    console.log('Print all Even Numbers');
    console.log(x);
}

// Print the multiplication table for 5
for(let y=5; y<=50; y=y+5){
    console.log('Multiplication table for 5');
    console.log(y);
}

// Dynamic Code
let z = prompt("Write any positive number");
z = parseInt(z); // Convert z string into number to perform the below for loop.
for(let a=z; a<=z*10; a=a+z){
    console.log(a);
}

// --- Nested for Loop ---
console.log('--- Nested for Loop ---');
for(let b=1; b<=3; b++){ //Outer Loop
    console.log(`Outer Loop ${b}`);
    for(let c=1; c<=3; c++){ //Inner Loop
        console.log(`Inner Loop ${c}`);
    }
}

// --- While Loop ----
let d = 1;
while(d<=5){
    console.log(`While Loop --- ${d}`);
    d++
}

// --- Favorite Movie ---
const favMovie = 'Iron Man';
let guess = prompt("Guess my Favorite movie name, Enter Iron Man or q");
while((guess != favMovie)){
    if(guess == 'q'){
        console.log('You quit');
        break;
    }
    guess = prompt('Wrong Guess! please try again');
}
if(guess == favMovie){
    console.log('Congratulations');
} else {
    console.log('You quit');
}

// --- Break Keyword ---
let e = 1;
while(e<=5){
    if(e == 3){
        break;
    }
    console.log(e);
    e++;
}
console.log('We used break at 3');

// --- Loops with Arrays ---
console.log('--- Loops with Arrays ---');
let fruitsArr = ['Mango', 'Kiwi', 'Apple', 'Banana', 'Orange'];

for(let f=0; f<fruitsArr.length; f++){
    console.log(f, fruitsArr[f]);
}

// -- Nested Arrays ---
console.log('--- Nested Arrays ---');
let heroes = [
    ['Ironman','Spiderman','Thor'],
    ['Superman','Wonder Women','Flash']
];

for(let g=0; g<heroes.length; g++){ //Outer Loop
    console.log(`List #${g}`);
    for(let h=0;h<heroes[g].length; h++){ //Inner Loop
        console.log(heroes[g][h]);
    }
}

// --- For of Loop --- New loop introduce in JS not compatable in  edge browser because of new loop
console.log('--- For of Loop --- New loop introduce in JS not compatable in  edge browser because of new loop');
for (fruit of fruitsArr){
    console.log(fruit);
}
