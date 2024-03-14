const post = {
    username: '@sagartwit77',
    content: 'This is my #firstpost',
    likes: 100,
    reports: 5,
    tags: ['@coder','@sagartwit77']
}

const student = {
    name: 'Sagar',
    age: 31,
    marks: 90,
    city: 'Delhi'
}
// Change value to student object
student.city = 'Mumbai';

// Assign new key and value to student object
student.gender = 'Male';

// --- Object of Object ---
const classInfo = {
    sagar: {
        grade: 'A+',
        city: 'Mumbai'
    },
    shital: {
        grade: 'A',
        city: 'Delhi'
    },
    sahil: {
        grade: 'B+',
        city: 'Pune'
    }
};

// --- Array of Object ---
const classInfoArr = [
    {
        name: 'Sagar',
        age: 21,
        marks: 90
    },
    {
        name: 'Shital',
        age: 20,
        marks: 80
    }
]

// Guessing Game
const max = prompt('Enter an maximum number');
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while(true){
    if(guess == 'quit'){
        console.log('User quit');
        break;
    }

    if(guess == random){
        console.log('You are right Congrats! random number was ', random);
        break;
    } else if(guess < random){
        guess = prompt('Your guess was to small, please try again');
    } else {
        guess = prompt('Your guess was to large, please try again');
    }
}