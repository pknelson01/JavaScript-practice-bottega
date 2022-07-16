function print(x) {
    console.log(x);
};

// attempt 1

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

// attempt 2

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

// attempt 3

// var myThirdFunc = function (arrayThree, snipe) {
//     for (let i = 1; i < arrayThree.length; i++) {
//         print(i)
//     }
// }
// let d = [1, 2, 2, 3, 4, 5, 6, 7, 9]
// myThirdFunc(d)

function weReal(numNew) {
    for (let a = 1; a < numNew; a++) {
        let b = "";
        for (let c = 1; c <= a; c++) {
            b += c + " ";
        }
        print(b)
    }
}
print(weReal(8))