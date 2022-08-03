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
        //     const numStr = `${n}`;
        //     let somme = 0;
        //     numStr.split("").forEach((x) => {
            //         somme += Math.pow(+x, numStr.length);
            //     });
            //     return somme === n
            // }
            
            // isNarcissistic(153)
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

function CreatePhoneNumber(arr) {
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]} - ${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}

console.log(CreatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

*/

/* Decode the Morse Code

    // 0 and l are empty strings because i dont know how to put down their morse code.
    

*/



function decodeMorse(str) {
    // console.log(`${x.h} ${x.e} ${x.y}   ${x.j} ${x.u} ${x.d} ${x.e}`)
    // console.log(str.split(''))

    let sentence = '';

    let splitArray = str.split(" ")

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
    };

    for ()

        return sentence;
}

let y = decodeMorse('.... . -.--   .--- ..- -.. .');

console.log(y.trim(' '));



// [ '....', '.', '-.--', '', '', '.---', '..-', '-..', '.' ]
