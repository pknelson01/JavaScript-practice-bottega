/*
 - split the value into single digits and take each digit and raise it to the power of how many digits are in the value.
 - after that add each new value together and if the value is the same as the first value then it return 'true'. if not, return 'false'.
*/

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

// 10 Minute Walk

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
