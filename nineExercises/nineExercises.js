function print(x) {
    console.log(x);
};

// Exercise 1 - attempt 1

// var myFunction = function (arrayOne, slice) {
//     for (let i = 0; i < arrayOne.length; i++) {
//         if (arrayOne[i] == slice) {
//             arrayOne.splice(i, 1);
//             i--;
//         }
//     }
//     return arrayOne.length;
// };

// let z = [1, 2, 3, 4, 5, 6, 7, 8, 2, 9, 9, 10, 11];
// console.log(myFunction(z, 9));
// console.log(z);

// Exercise 1 - attempt 2

// var mySecondFunc = function (arrayTwo, snipe) {
//     for (let i = 0; i < arrayTwo.length; i++) {
//         if (arrayTwo[i] == snipe) {
//             arrayTwo.splice(i, 1)
//             i--;
//         }
//     }
//     return arrayTwo.length;
// }

// let p = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9]
// print(`The Length is: ${mySecondFunc(p, 2)}`)
// print(p)

// Exercise 1 - attempt 3

// var myThirdFunc = function (arrayThree, snipe) {
//     for (let i = 1; i < arrayThree.length; i++) {
//         print(i)
//     }
// }
// let d = [1, 2, 2, 3, 4, 5, 6, 7, 9]
// myThirdFunc(d)

// Exercise 2 - attempt 1

// function weReal(numNew) {
//     for (let a = 1; a < numNew; a++) {
//         let b = "";
//         for (let c = 1; c <= a; c++) {
//             b += c + " ";
//         }
//         print(b)
//     }
// }
// print(weReal(8))

// Exercise 3 - attempt 1

// var myFunc = function max(x) {
//     let largestNum = 0;
//     for (i = 0; i < x.length; i++) {
//         largestNum < x[i] ? largestNum = x[i] : largestNum = largestNum;
//         // ternary Operator ^
//     } return largestNum
//     //     if (x[i] > largestNum) {
//     //         largestNum = x[i]
//     //     }
//     // }
//     // return largestNum
// }

// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// print(x)
// print(`the largest number is: ${myFunc(x)}`)

// var myName = window.prompt("What is your name?");

// console.log(`hello, ${myName}`);

// Exercise 4 - attempt 1

function Calculator(numOne, numTwo, op) {
    // var numOne = 5;
    // var numTwo = 8;
    // var op = '+';
    total = 0;

    if (op == '*') {
        total += numOne * numTwo
    }
    else if (op == '+') {
        total += numOne + numTwo
    }
    else if (op == '-') {
        total += numOne - numTwo
    }
    else if (op == '/') {
        total += numOne / numTwo
    }
    else if (op == '**') {
        total += numOne ** numTwo
    }

    console.log(total)

}

Calculator(5, 8, '*')

// Exercise 5 - attempt 1



// Exercise 6 - attempt 1

function Temperature(fahrenheit) {
    let sub = fahrenheit - 32
    let div = sub * .5556
    console.log(div)
}

Temperature(96)

// Exercise 7 - attempt 1

function Grading(name, finalGrade) {

    finalGrade >= 80 ? console.log(`${name} passed the exam with a score of ${finalGrade}%`) : console.log(`${name} did not pass.`);
}

Grading('Parker', 80)