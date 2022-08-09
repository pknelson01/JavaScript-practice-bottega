/* To uncomment: delete the ' * ' at the beginning of the lessons code and then put back after you're done */

function print(x) {
    console.log(x);
};

/* How to Work with Variables in JavaScript

    var first_name = 'Parker';
    console.log(first_name)

*/
/* Understanding the Key Difference Between Var and Let Variables Types

    var age = 12;
    console.log(age);

    var age = 15;
    console.log(age);

    // let wont let you change values but var will

*/
/* Guide to JavaScript Hoisting

    // var x_name;
    // x_name = 'Parker';
    // console.log(x_name);

    var age = 15;
    console.log(age);

*/
/* Comprehensive List of JavaScript Data Types

    // // // // // // Boolean
    // // // // // var truthy = true;
    // // // // // var notTruthy = false;
    // // // // // console.log(truthy);

    // // // // // null
    // // // // var nully = null;
    // // // // console.log(nully);

    // // // // undefined
    // // // var notDefined;
    // // // console.log(notDefined);

    // // // number
    // // var age = 12;
    // // console.log(age);

    // // string
    // var x_name = 'Parker';
    // var y_name = 'Ava';
    // console.log(x_name);
    // console.log(y_name);

    // symbol
    var mySym = Symbol('foo bar');
    console.log(mySym);

*/
/* Guide to JavaScript Objects

var user = {
    name: 'Parker',
    age: 20,
    city: 'Saratoga Springs',
    grades: {
        math: 90,
        science: 71,
        art: 100
    }
}

user.grades.coding = 99;

console.log(user.grades);

*/
/* Random Shit

var str = "YOU WERE MY BROTHER ANAKIN! I loved you."
console.log(str.startsWith('YOU'))
console.log(typeof str)

*/
/* Working with String Functions - Parts 1 - 3

var str = "Obi-Wan: YOU WERE MY BROTHER ANAKIN! I loved you.\n"

console.log(str.repeat(5));

console.log(str);

console.log(str.startsWith('YOU'))

console.log('(801)369-8070'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/));

console.log(str.replace('BROTHER', 'BITCH'));

console.log('801-369-8070 is my phone Number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/));

console.log('foo'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/));

console.log('foo 801-369-8070 is my phone Number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/));

console.log(str.indexOf('BROTHER'));

var strTwo = str.concat(' Anakin: I HATE YOU!');

strTwo;

console.log(strTwo.lastIndexOf('HATE'));

console.log(str.slice(9));

console.log(str.charAt(10));

console.log(str.slice(-13));

console.log(str.slice(8, 36));

var messyStr = '     foo                ';

console.log(messyStr);
console.log(messyStr.trim());

console.log(str.slice(8, 36).trim());

console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());

*/
/* JavaScript Arithmetic Operators

var num = 2;
console.log(num++);
console.log(num++);
console.log(++num);
console.log(num--);
console.log(num--);
console.log(num--);
console.log(--num);

var someNum = 11;

var someOther = -someNum;

console.log(someOther);

var strNum = '100';

var convertNum = + strNum;

console.log(convertNum);

*/
/* Guide to Compound Assignment Operators in JavaScript

var name = 'Parker';
var sum = 0;
var gradeOne = 100;
var gradeTwo = 80;

console.log(sum += gradeOne);
console.log(sum += gradeTwo);
console.log(sum *= gradeTwo);
console.log(sum **= gradeTwo);

*/
/* JavaScript Conditional Section Introduction

var age = 12;
var ageTwo = 27;

if (age === ageTwo) {
    console.log('They are Equal.');
}

if (age !== ageTwo) {
    console.log('Not Equal.');
}

if (age, ageTwo >= 25) {
    console.log('You are old enough.');
}

if (age, ageTwo <= 25) {
    console.log('You are not old enough.');
}

*/
/* Guide to If/Else Conditionals in JavaScript

var age = 30;

if (age <= 10) {
    console.log('You can eat from the kids menu.');
} else {
    console.log('You can NOT eat from the kids menu. b i t c h .')
}

*/
/* Compound Conditionals in JavaScript

var age = 21;

if (age < 16) {
    console.log('You can eat from the kids menu.');
    console.log('You are not old enough to drive.');
    console.log('You are not old enough to drink.');
} else if (age >= 16 && age < 21) {
    console.log('You can not eat from the kids menu.');
    console.log('You are old enough to drive.');
    console.log('You are not old enough to drink.');
} else if (age >= 21) {
    console.log('You can not eat from the kids menu.');
    console.log('You are old enough to drive.');
    console.log('You are old enough to drink.');
}

*/
/* How to Build a Switch Statement in JavaScript to Check for Data Types

var dataPoint = true;
switch (typeof dataPoint) {
    case "string":
        console.log('It is a string! ');
        break;
    case "number":
        console.log('It is a number! ');
        break;
    case "boolean":
        console.log('It is either True or False! ');
        break;
    default:
        console.log('No matches. ')
}

*/
/* Overview of JavaScript Ternary Operator pt.1

function ageVerification(age) {
    // if (age > 25) {
    //     console.log('can rent a car.');
    // } else {
    //     console.log('can not rent a car.');
    // }
    let answer = age > 25 ? 'can rent a car.' : 'can not rent a car.';
    console.log(answer);
}

ageVerification(11)

*/
/* Overview of JavaScript Ternary Operator pt.2

function adminControls(user) {
    // if (user) {
    //     if (user.admin) {
    //         console.log('Showing admin controls.');
    //     } else {
    //         console.log('You need to be an admin.');
    //     }
    // } else {
    //     console.log('You need to be logged in.');
    // }
    let response = user ? (user.admin ? "Showing admin controls..." : "You need to be an admin...") : "You need to be logged in...";
    console.log(response)
}

let userOne = {
    first_name: 'Parker',
    admin: true
}

let userTwo = {
    first_name: 'Ava',
    admin: false
}

let userThree = null;


adminControls(userOne)
adminControls(userTwo)
adminControls(userThree)

*/
/* Basic Syntax for Building Functions in JavaScript

function helloThere() {
    console.log('Hello There');
}
helloThere()
function hiThere() {
    return 'Hi There';
}
hiThere()
var storedText = hiThere();
storedText;

*/
/* How Variable Scope Works in JavaScript

function dashboardGreeting() {
    var userObj = {
        email: 'pk.elliott11@gmail.com',
        fullName: 'Parker Nelson'
    }
    console.log('Hello There, '.concat(userObj.fullName));
}

dashboardGreeting()

*/
// Differences Between Function Expressions and Function Declarations

// function greeting() {
//     return 'hello there';
// }

// var greeting2 = function () {
//     return 'GENERAL KENOBI'
// };

// console.log(greeting());
/* console.log(greeting2());

var age = 3;
function buildMenuTwo() {
    return 'another kids menu';
};

if (age <= 10) {
    var buildMenu = function () {
        return 'kids menu';
    };
    console.log(buildMenu());
    console.log(buildMenuTwo());
}

*/
/* Introduction to JavaScript Closures

function battingAverage() {
    var hits = 100;
    var atBats = 300;

    return {
        getCurrentAverage: function () {
            return (hits / atBats);
        },
        updateHitsAndAtBats: function (hit, atBat) {
            hits += hit;
            atBats += atBat;
        }
    }
}

var altuve = battingAverage();
console.log(altuve.getCurrentAverage());
altuve.updateHitsAndAtBats(0, 20);
console.log(altuve.getCurrentAverage());
altuve.updateHitsAndAtBats(13, 21);
console.log(altuve.getCurrentAverage());
altuve.updateHitsAndAtBats(520, 520);
console.log(altuve.getCurrentAverage());

*/
/* How to Use the 'this' Keyword in JavaScript Programs

var guide = {
    title: 'Battle of Heroes',
    content: 'content will go here',
    visibleToUser: function (veiwingUserRole) {
        if (veiwingUserRole === 'paid') {
            return true;
        } else {
            return false;
        }
    },
    renderContent: function (userRole) {
        if (this.visibleToUser(userRole)) {
            console.log(this.title + " - " + this.content);
        } else {
            this.content = '';
            console.log(this.title + " - " + this.content);
        }
    }
}

user = { role: 'paid' };
guide.renderContent(user.role);

*/
/* Guide to For Loops in JavaScript

var forceUsers = [
    'Anakin',
    'Obi-Wan',
    'Ahsoka',
    'Qui-Gon'
];

console.log('Traditional For Loop')

for (var i = 0; i < forceUsers.length; i++) {
    console.log(forceUsers[i])
}

console.log('For in Loop')

for (forceUser in forceUsers) {
    // console.log(forceUser);
    console.log(forceUsers[forceUser]);
}

console.log('Best For Loop')

forceUsers.forEach(function (element) {
    console.log(element);
});

*/
/* How to Loop Through a JavaScript Object

var student = {
    name: 'Parker',
    age: 20,
    city: 'Saratoga Springs'
};

for (var key in student) {
    console.log(key + " => " + student[key]);
}

*/
/* Guide to While and Do/While Loops in JavaScript

var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
];

var i = 0;
do {
    console.log(players[i]);
    i++;
} while (i < players.length)

*/
/* Using the Const Variable Type in JavaScript

// const can NOT be redefined.
// var can be changed wherever. (GLOBAL)
// let can be changed inside the scope of which its called. (LOCAL)

let city = "Saratoga Springs,";
console.log(city);

const state = "Utah,";
console.log(state);

var country = "United States";
console.log(country);

*/
/* Guide to Backtick string interpolation in Javascript

const lyrics = 'top of spaghetti...';
const lyricsTwo = 'covered in cheese!'
console.log(`On ${lyrics + ' All ' + lyricsTwo}`);

*/
/* Integrating Conditionals into JavaScript Strings with Ternary Operators

let page = 'Home';
let pageTwo = 'About';
console.log(`class = ${page === 'Home' ? 'master-layout' : 'secondary-layout'}`)
console.log(`class = ${pageTwo === 'Home' ? 'master-layout' : 'secondary-layout'}`)

*/
/* Introduction to Arrow Functions in JavaScript

// function fullName(fName, lName) {
//     console.log(`${fName} ${lName}`);
// }
// fullName('Parker', 'Nelson')

// fullName = function (fName, lName) {
//     print(`${fName} ${lName}`);
// }
// fullName('Parker', 'Nelson')

// helloWorld = () => { print('Hello There'); }
// helloWorld();

// firstName = fName => { print(fName.toUpperCase()); }
// firstName('Parker')

fullName = (fName, lName) => {
    print(`${fName} ${lName}`)
}
fullName('Parker', 'Nelson')

*/
/* How Arrow Functions Work with ‘this’

function Invoice(subTotal) {
    this.taxRate = 0.06;
    this.subTotal = subTotal;

    this.total = setInterval(() => {
        console.log((this.taxRate * this.subTotal) + this.subTotal);
        // console.log(this);
    }, 2000);
}

const inv = new Invoice(200);
inv.total();

*/
/* How to Swap Variable Values in JavaScript with Variable Deconstruction

let playerOne = 'Parker';
let playerTwo = 'Ava';

[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`)

*/
/* How to Implement Array Destructuring in JavaScript

const apiList = [
    'https://api.dailysmarty.com/posts',
    'https://api.github.com/users/jordanhudgens/repos',
    'https://api.github.com/users/jordanhudgens'
]

const [posts, repos, profile] = apiList;
console.log(`${posts}, ${repos}, ${profile}`);

// const clones = [
//     'Rex',
//     'Fives',
//     'Cody'
// ]

// const [captain, arc, commander] = clones

// console.log(captain, arc, commander)

*/
/* How to Pass JavaScript Objects as Function Arguments by Leveraging Deconstruction

const user = {
    fName: 'Parker',
    email: 'pk.elliott11@gmail.com'
}

const renderUser = ({ fName, email }) => {
    console.log(`${fName}: ${email}`)
}

renderUser(user);

*/
/* Guide to Adding Default Object Values to JavaScript Function Arguments

const blog = {
    title: "The Light of the Jedi",
    summary: "The goat."
}

const openGraphMetadata = ({ title, summary = "The best." }) => {
    console.log(`
    Title= ${title}
    Description= ${summary}
    `);
}

openGraphMetadata(blog)

*/
/* Guide to the JavaScript Spread Operator
class ArrayPopper {
    constructor(arr) {
        this.arr = arr
        this.atBeginning = true;
    }

    togglePopper() {
        this.atBeginning = !this.atBeginning;
        return this.atBeginning ? this.arr.pop() : this.arr.shift();
    }
}

const ap = new ArrayPopper([1, 2, 3, 4, 5]);
console.log(ap.togglePopper())
console.log(ap.togglePopper())
console.log(ap.togglePopper())
console.log(ap.togglePopper())
console.log(ap.togglePopper())
console.log(ap.togglePopper())

const strap = new ArrayPopper(['Hi', 'Hello', 'Hey', 'Howdy']);

console.log(strap.togglePopper())
console.log(strap.togglePopper())
console.log(strap.togglePopper())
console.log(strap.togglePopper())
console.log(strap.togglePopper())

*/
/* Guide to the JavaScript Spread Operator

// let shoppingCart = [345, 375, 765, 123];
// let newItems = [98, 123];

// shoppingCart.push(...newItems);
// console.log(shoppingCart); // [ 345, 375, 765, 123, 98, 123 ]

// const shoppingCart = [345, 375, 765, 123];
// // const updatedCart = shoppingCart.slice();
// const updatedCart = [...shoppingCart];
// updatedCart.push(5);
// console.log(updatedCart);
// console.log(shoppingCart);

// const orderTotals = [1, 5, 1, 10, 2, 3]
// print(Math.max(...orderTotals));
// print(Math.max(1, 5, 1, 10, 2, 3));

const { starter, closer, ...relievers } = {
    starter: 'Verlander',
    closer: 'Giles',
    relief_1: 'Morton',
    relief_2: 'Gregerson'
}

print(starter);
print(closer);
print(relievers);

*/
/* Guide to JavaScript Bind Function

// constructor() {
//     this.handleCLick = handleClick.bind(this);
// }

const userOne = {
    firstName: 'Parker',
    lastName: 'Nelson'
}

const userTwo = {
    firstName: 'Ava',
    lastName: 'Neuenschwander'
}

const fullName = function () {
    return `${this.lastName}, ${this.firstName}`;
}

const parker = fullName.bind(userOne);
const ava = fullName.bind(userTwo);

console.log(parker());
console.log(ava());

*/
/* How to Check if Two Objects Have Equal Values

const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let objKey of obj1Keys) {
        if (obj1[objKey] !== obj2[objKey]) {
            return false;
        }
    }

    return true;
};

const obj1 = {
    name: "Ava",
    age: 20,
    favorites: {
        food: "Fried Pickles",
        vacation: "Disneyland"
    }
};

const obj2 = {
    name: "Parker",
    age: 20,
    favorites: {
        food: "Pizza",
        vacation: "Italia"
    }
};

obj1 == obj2;
isEqual(obj1, obj2);

*/
/* Introduction to Object Oriented Programming in JavaScript

class Instructor {
    constructor({ name, role = 'Assistant' }) {
        this.name = name;
        this.role = role;
    }
    renderDetails() {
        console.log(`${this.name}: ${this.role}`);
    }
    static helloWorld() {
        console.log('Hello There')
    }
    static canTeach(instructor) {
        return (instructor.role === 'Jedi Temple');
    }
}

const pk = new Instructor({ name: 'Parker Nelson' });
const ava = new Instructor({ name: 'Ava Nelson', role: 'Supervisor' });

Instructor.helloWorld();
let ani = new Instructor({ 'name': 'Anakin Skywalker', role: 'Jedi Temple' })
console.log(
    `${ani.name} can teach: ${Instructor.canTeach(ani)}`
)

pk.renderDetails();
ava.renderDetails();

*/
/* Introduction to JavaScript Promises

let obiGreeting = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello There')
    }, 2000);

    setTimeout(() => {
        reject(Error('These are not the Droids you are looking for.'))
    }, 2000);
});

obiGreeting
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    })
    .finally(i => {
        console.log('I have the  H I G H   G R O U N D')
    });

*/
/* Using a fetch Promise to Communicate with APIs in JavaScript

console.log('Starting fetch call');
const postsPromise = fetch('https://api.dailysmarty.com/posts')
console.log('After fetch call');
console.log(postsPromise);
console.log('After program has run');

postsPromise
    .then(data => data.json())
    .then(data => {
        data.posts.forEach((item) => {
            console.log(item.title);
        })
    })
    .catch((err) => {
        console.log(err);
    })

*/
/* How to Group Promises Together with Promise.all in JavaScript

const greeting = new Promise((resolve, reject) => {
    resolve('Hello there');
    reject('Oops');
  });

  const updateAccount = new Promise((resolve, reject) => {
    resolve('updating login...');
    reject('updating error');
  });

  const loginActivities =  Promise.all([greeting, updateAccount]);

  console.log(loginActivities);

  loginActivities.then(res => {
    res.forEach(activity => {
      console.log(activity);
    })
  })

*/
// Introduction to Async and Await in JavaScript

/* user logs into the system

// verify credentials
  // redirect to dashboard
    // update the db account
      // API calls to bring the user data...
        // ..........
const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('User logged in...');
        }, 2000);
    })
}

const updateAccount = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('updating last login...');
        }, 2000);
    })
}

async function loginActivities() {
    const returnedLogin = await login();
    console.log(returnedLogin);

    const returnedUpdateAccount = await updateAccount();
    console.log(returnedUpdateAccount);
}

loginActivities();

*/
/* Combining Async / Await with Closures to Ensure All Processes Have Run

const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('User logged in...');
        }, 2000);
    })
}

const updateAccount = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('updating last login...');
        }, 2000);
    })
}

async function loginActivities(login, updateAccount) {
    const returnedLogin = await login;
    console.log(returnedLogin);

    const returnedUpdateAccount = await updateAccount;
    console.log(returnedUpdateAccount);
}

loginActivities(login(), updateAccount());

*/
/* Using Async / Await for Communicating with Outside APIs in JavaScript

async function queryApis() {
    const postsPromise = fetch('https://api.dailysmarty.com/posts');
    const posts = await postsPromise.then(res => res.json());
    console.log(posts);

    const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
    const repos = await reposPromise.then(res => res.json());
    console.log(repos);
}

queryApis();

*/
/* Implementing Error Handling In a JavaScript Async / Await Function

async function queryApis() {
    try {
        const postsPromise = fetch('http://api.dailysmarty.com/posts');
        const posts = await postsPromise.then(res => res.json());
        console.log(posts);
    } catch (err) {
        console.log(err);
        console.log('There was an error with the DailySmarty API');
    }

    try {
        const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
        const repos = await reposPromise.then(res => res.json());
        console.log(repos);
    } catch (err) {
        console.log(err);
        console.log('There was an error with the GitHub API');
    }
}

queryApis();

*/
/*

// title
// type of heading

const headingGenerator = (title, typeOfHeading) => {
    return `
        <h${typeOfHeading}>${title}</h${typeOfHeading}>
    `
}

// <h1> Title </h1>

*/
/* Build a Manual Exponent Function in JavaScript

const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (total, currentValue) => total * currentValue;
    return items.reduce(reducer);
}

console.log(Array(3).fill(2));
console.log(toThePowerOf(2, 10))

*/


