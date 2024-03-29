/* Narcassistic Numbers
    - split the value into single digits and take each digit and raise it to the power of how many digits are in the value.
    - after that add each new value together and if the value is the same as the first value then it return 'true'. if not, return 'false'.


    // function narcissistic(value) {
    //     total = 0;

    //     var digits = value.toString().split('').map(iValue => parseInt(iValue, 10));
    //     console.log(digits)
    //     const numStr = `${value}`
    //     console.log(numStr.split(''))
    //     let len = numStr.length
    //     console.log(len)
    //     console.log(typeof numStr)

    //     // for (let x in numStr) {
    //     // console.log(x)
    //     // console.log(parseInt(x) ** len)

    //     // }

    //     value.forEach(total += Math.pow(value, numStr.length));
    // }


    // narcissistic(153);


    // function isNarcissistic(n) {
    //         const numStr = `${n}`;
    //         let somme = 0;
    //         numStr.split("").forEach((x) => {
    //                 somme += Math.pow(+x, numStr.length);
    //             });
    //             return somme === n
    //         }

    //         isNarcissistic(153)
*/

/* 10 Minute Walk

    // x - axis = west and east
    // y - axis = north and south

    function isValidWalk(walk) {
        let ns = 0
        let ew = 0;
        if (walk.length === 10) {
            for (let i of walk) {
                if (i == 'n') ns += 1;
                if (i == 's') ns -= 1;
                if (i == 'e') ew += 1;
                if (i == 'w') ew -= 1;
            }
        }
        else
            console.log(false)
        console.log(ns === 0 && ew === 0)
    }

    isValidWalk('nsnsswewns')

*/

/* Create a Phone Number

function CreatePhoneNumber(numbers) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]} - ${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

// console.log(CreatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

*/

/* Decode the Morse Code

decodeMorse = function (morseCode) {
    let sentence = '';
    let splitArray = morseCode.split(" ")
    for (let i in splitArray) {
        if (splitArray[i] === '.-') {
            sentence += 'A'
        }
        if (splitArray[i] === '-...') {
            sentence += 'B'
        }
        if (splitArray[i] === '-.-.') {
            sentence += 'C'
        }
        if (splitArray[i] === '-..') {
            sentence += 'D'
        }
        if (splitArray[i] === '.') {
            sentence += 'E'
        }
        if (splitArray[i] === '..-.') {
            sentence += 'F'
        }
        if (splitArray[i] === '--.') {
            sentence += 'G'
        }
        if (splitArray[i] === '....') {
            sentence += 'H'
        }
        if (splitArray[i] === '..') {
            sentence += 'I'
        }
        if (splitArray[i] === '.---') {
            sentence += 'J'
        }
        if (splitArray[i] === '-.-') {
            sentence += 'K'
        }
        if (splitArray[i] === '.-..') {
            sentence += 'L'
        }
        if (splitArray[i] === '--') {
            sentence += 'M'
        }
        if (splitArray[i] === '-.') {
            sentence += 'N'
        }
        if (splitArray[i] === '---') {
            sentence += 'O'
        }
        if (splitArray[i] === '.--.') {
            sentence += 'P'
        }
        if (splitArray[i] === '--.-') {
            sentence += 'Q'
        }
        if (splitArray[i] === '.-.') {
            sentence += 'R'
        }
        if (splitArray[i] === '...') {
            sentence += 'S'
        }
        if (splitArray[i] === '-') {
            sentence += 'T'
        }
        if (splitArray[i] === '..-') {
            sentence += 'U'
        }
        if (splitArray[i] === '...-') {
            sentence += 'V'
        }
        if (splitArray[i] === '.--') {
            sentence += 'W'
        }
        if (splitArray[i] === '-..-') {
            sentence += 'X'
        }
        if (splitArray[i] === '-.--') {
            sentence += 'Y'
        }
        if (splitArray[i] === '--..') {
            sentence += 'Z'
        }
        if (splitArray[i] === '') {
            sentence += ' '
        }
        if (splitArray[i] === '-.-.--') {
            sentence += '!'
        }
        if (splitArray[i] === '.-.-.-') {
            sentence += '.'
        }
        if (splitArray[i] === '...---...') {
            sentence += 'SOS'
        }

    };
    return sentence.trim().split('  ').join(' ');
}

console.log(decodeMorse('... --- ... -.-.--   .-'));

*/

/* Remove string spaces

    function noSpace(x) {
        let string = x.split(' ').join('')
        return string
    }

    console.log(noSpace('Hello There'))

*/

/* Lost without a map

function maps(x) {
    return x.map(i => i * 2);
}

maps([1, 2, 3]);

*/

/* Well of Ideas - Easy Version

function well(x) {
    let counterGood = 0;
    for (let i in x) {
        if (x[i] === 'good') {
            counterGood += 1
        }
    }
    if (counterGood === 0) {
        return 'Fail!'
    }
    if (counterGood === 1 || counterGood === 2) {
        return 'Publish!'
    }
    if (counterGood >= 3) {
        return 'I smell a series!'
    }
}

console.log(well(['bad', 'bad', 'bad', 'good', 'good']))

*/

/* Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {

    if (bool === true) {
        return 'Yes'
    }
    if (bool === false) {
        return 'No'
    }
}

console.log(boolToWord(true))

*/

/* Beginner - Reduce but Grow

function grow(x) {
    counter = 1;
    for (let i in x) {
        counter = counter * x[i]
        console.log(counter);
    }
    return counter;
}

console.log(grow([1, 2, 3, 4]))

*/

/* Even or Odd

function even_or_odd(number) {
    if (number % 2 === 0) {
        return 'Even'
    }
    if (number % 2 != 0) {
        return 'Odd'
    }
}

console.log(even_or_odd(11));

*/

/* Count of positives / sum of negatives
    // function countPositivesSumNegatives(input) {
    //     let counter = 0;
    //     let multiplier = 0;

    //     for (let i in input) {
    //         if (input[i] < 0) {
    //             multiplier += input[i]
    //         };
    //         if (input[i] > 0) {
    //             counter += 1
    //         };
    //         if (input.length === 0 || input === null) {
    //             return []
    //         };
    //     };
    //     return [counter, multiplier];
    // };

    // console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));

function countPositivesSumNegatives(input) {
    let counter = 0;
    let multiplier = 0;

    if (input === null || input.length === 0) {
        return []
    } else {
        input.forEach((num) => num > 0 ? counter++ : multiplier += num);
    }
    return [counter, multiplier];
};

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
*/

/* Positive or Negative
function posNeg(x) {
    if (x > 0) {
        return 'Positive'
    }
    if (x < 0) {
        return 'Negative'
    }
    if (x === 0) {
        return 'Zero'
    }
}

console.log(posNeg(0))
*/

/* Volume of a Cuboid
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        let volume = width * length * height;
        return volume
    }
}
console.log(new Kata())
*/

/* Square(n) Sum
function squareSum(numbers) {
    counter = 0;
    for (let i in numbers) {
        let sum = numbers[i] ** 2
        counter += sum
    }
    return counter
}

console.log(squareSum([1, 2, 3, 4, 5]))
*/

/* Count by X
function countBy(x, n) {
    let z = [];

    for (let i = 1; i <= n; i++) {
        z.push(x * i)
    }

    return z;
}

console.log(countBy(2, 5));
*/

/* Return a Negative Number
function makeNegative(num) {
    if (num > 0) {
        return -Math.abs(num);
    } else {
        return (num);
    };
};

console.log(makeNegative(8))
*/

function negativeNumber(x) {
    if (x > 0) {
        num = -Math.abs(x)
    }
    return num
}

console.log(negativeNumber(8));

function posNeg(y) {
    if (y > 0) {
        return 'Positive'
    }
    if (y < 0) {
        return 'Negative'
    } else {
        return 'Zero'
    }
}

console.log(posNeg(11));

function evenOrOdd(z) {
    if (z % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}

console.log(evenOrOdd(11));

function volumeCuboid(a, b, c) {
    // height = a ... length = b ... width = c
    return a * b * c
}

console.log(volumeCuboid(7, 7, 2));

function multipleOfEleven(i) {
    if (i % 11 === 0) {
        return 'is a multiple of 11'
    } else {
        return 'is not a multiple of 11'
    }
}

console.log(multipleOfEleven(110));

function trueOrFalse(t) {
    if (t === true) {
        return 'correct.'
    }
    else if (t === false) {
        return 'incorrect.'
    }
}

console.log(trueOrFalse(5 + 5 === 10));
console.log(trueOrFalse(9 + 10 === 21));

function Kenobi(h) {
    if (h === 'Hello there') {
        return 'GeNeRaL kEnObI'
    } else {
        return '...'
    }
}

console.log(Kenobi('Hello there'));



