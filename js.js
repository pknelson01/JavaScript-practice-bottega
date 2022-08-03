// db.createUser({
//   user: 'Ava',
//   pwd: '123',
//   customData: { startDate: new Date() },
//   roles: [{
//     role: 'clusterAdmin', db: 'admin',
//     role: 'readAnyDatabase', db: 'admin'
//   },
//     'readWrite'
//   ]
// })

// db.books.insert({
//   "name": "OOP Programming",
//   "publishedDate": new Date(),
//   "authors": [
//     { "name": "Parker Nelson" },
//     { "name": "Ava Nelson" },
//   ]
// })

// db.books.insertMany([
//   {
//     "name": "The Light of the Jedi",
//     "publishedDate": new Date(),
//     "authors": [
//       { "name": "Charles Soule" }
//     ]
//   },
//   {
//     "name": "Rising Storm",
//     "publishedDate": new Date(),
//     "authors": [
//       { "name": "Cavan Scott" }
//     ]
//   },
//   {
//     "name": "Tempest Runner",
//     "publishedDate": new Date(),
//     "authors": [
//       { "name": "Cavan Scott" }
//     ]
//   }
// ])

// db.books.find(
//   {
//     name: "The Light of the Jedi"
//   },
//   {
//     _id: 0,
//     name: 1,
//     authors: 1
//   }
// ).pretty()

// db.books.insert({
//   "name": "Into the Dark",
//   "publishedDate": new Date(),
//   "authors": [
//     { "name": "Claudia Gray" }
//   ]
// })

// db.books.insert({
//   "name": "Blink",
//   "publishedDate": new Date(),
//   "authors": [
//     { "name": "Malcolm Gladwell", "active": "true" },
//     { "name": "Ghost Writer", "active": "true" }
//   ]
// });

// db.books.find(
//   {
//     name: "Blink"
//   },
//   {
//     name: 1,
//     _id: 0,
//     "authors.name": 1
//   }
// ).pretty()

// db.books.find({ reviews: { $exists: true } })


console.log("Hello")


const x = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---.',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    one: '.----',
    two: '..---',
    three: '...--',
    four: '....-',
    five: '.....',
    six: '-....',
    seven: '--...',
    eight: '---..',
    nine: '----.',
    zero: '-----'
}

function DecodeMorseCode(str) {
    // console.log(`${x.h} ${x.e} ${x.y}   ${x.j} ${x.u} ${x.d} ${x.e}`)
    // console.log(str.split(''))

    let sentence = '';

    for (let i in str) {
        console.log(str[i])
        if (str[i] === 'a') {
            sentence += x.a
        }
        if (str[i] === 'A') {
            sentence += x.a
        }
        if (str[i] === 'b') {
            sentence += x.b
        }
        if (str[i] === 'B') {
            sentence += x.b
        }
        if (str[i] === 'c') {
            sentence += x.c
        }
        if (str[i] === 'C') {
            sentence += x.c
        }
        if (str[i] === 'd') {
            sentence += x.d
        }
        if (str[i] === 'D') {
            sentence += x.d
        }
        if (str[i] === 'e') {
            sentence += x.e
        }
        if (str[i] === 'E') {
            sentence += x.e
        }
        if (str[i] === 'f') {
            sentence += x.f
        }
        if (str[i] === 'F') {
            sentence += x.f
        }
        if (str[i] === 'g') {
            sentence += x.g
        }
        if (str[i] === 'G') {
            sentence += x.g
        }
        if (str[i] === 'h') {
            sentence += x.h
        }
        if (str[i] === 'H') {
            sentence += x.h
        }
        if (str[i] === 'i') {
            sentence += x.i
        }
        if (str[i] === 'I') {
            sentence += x.i
        }
        if (str[i] === 'j') {
            sentence += x.j
        }
        if (str[i] === 'J') {
            sentence += x.j
        }
        if (str[i] === 'k') {
            sentence += x.k
        }
        if (str[i] === 'K') {
            sentence += x.k
        }
        if (str[i] === 'l') {
            sentence += x.l
        }
        if (str[i] === 'L') {
            sentence += x.l
        }
        if (str[i] === 'm') {
            sentence += x.m
        }
        if (str[i] === 'M') {
            sentence += x.m
        }
        if (str[i] === 'n') {
            sentence += x.n
        }
        if (str[i] === 'N') {
            sentence += x.n
        }
        if (str[i] === 'o') {
            sentence += x.o
        }
        if (str[i] === 'O') {
            sentence += x.o
        }
        if (str[i] === 'p') {
            sentence += x.p
        }
        if (str[i] === 'P') {
            sentence += x.p
        }
        if (str[i] === 'q') {
            sentence += x.q
        }
        if (str[i] === 'Q') {
            sentence += x.q
        }
        if (str[i] === 'r') {
            sentence += x.r
        }
        if (str[i] === 'R') {
            sentence += x.r
        }
        if (str[i] === 's') {
            sentence += x.s
        }
        if (str[i] === 'S') {
            sentence += x.s
        }
        if (str[i] === 't') {
            sentence += x.t
        }
        if (str[i] === 'T') {
            sentence += x.t
        }
        if (str[i] === 'u') {
            sentence += x.u
        }
        if (str[i] === 'U') {
            sentence += x.u
        }
        if (str[i] === 'v') {
            sentence += x.v
        }
        if (str[i] === 'V') {
            sentence += x.v
        }
        if (str[i] === 'w') {
            sentence += x.w
        }
        if (str[i] === 'W') {
            sentence += x.w
        }
        if (str[i] === 'x') {
            sentence += x.x
        }
        if (str[i] === 'X') {
            sentence += x.x
        }
        if (str[i] === 'y') {
            sentence += x.y
        }
        if (str[i] === 'Y') {
            sentence += x.y
        }
        if (str[i] === 'z') {
            sentence += x.z
        }
        if (str[i] === 'Z') {
            sentence += x.z
        }
        if (str[i] === ' ') {
            sentence += '   '
        }
    } return sentence;
}

console.log(DecodeMorseCode('Hey Jude'))
