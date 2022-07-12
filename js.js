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