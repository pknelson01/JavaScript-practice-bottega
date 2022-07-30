/* exercise one : Create a JavaScript Object called movies, inside of this object create a few nested objects that each have a title, year, and a status (if you have seen it or if you want to see it). Use a for loop to loop through the movies object and console.log “I have seen MOVIE NAME” or “I want to see MOVIE NAME”.

    let movies = {
        movieOne: {
            name: 'Star Wars: The Phantom Menace',
            year: 1999,
            status: 'watched'
        },
        movieTwo: {
            name: 'Star Wars: Attack of the Clones',
            year: 2002,
            status: 'watched'
        },
        movieThree: {
            name: 'Star Wars: The Clone Wars',
            year: 2008,
            status: 'watched'
        },
        movieFour: {
            name: 'Star Wars: Revenge of the Sith',
            year: 2005,
            status: 'watched'
        },
        movieFive: {
            name: 'Solo: A Star Wars Story',
            year: 2018,
            status: 'watched'
        },
        movieSix: {
            name: 'Rogue One: A Star Wars Story',
            year: 2016,
            status: 'watched'
        },
        movieSeven: {
            name: 'Star Wars: A New Hope',
            year: 1977,
            status: 'watched'
        },
        movieEight: {
            name: 'Star Wars: The Empire Strikes Back',
            year: 1980,
            status: 'watched'
        },
        movieNine: {
            name: 'Star Wars: Return of the Jedi',
            year: 1983,
            status: 'watched'
        },
        movieTen: {
            name: 'Star Wars: The Force Awakens',
            year: 2015,
            status: 'watched'
        },
        movieEleven: {
            name: 'Star Wars: The Last Jedi',
            year: 2017,
            status: 'watched'
        },
        movieTwelve: {
            name: 'Star Wars: The Rise of Skywalker',
            year: 2019,
            status: 'not watched'
        },
    };

    function MovieStatus(movies) {

        // console.log(movies['movieOne'])

        for (let i in movies) {
            // movies['movieOne'].status
            // console.log(`${movies[i].name}: ${movies[i].status}`)
            (movies[i].status === 'watched' ? console.log(`I have seen ${movies[i].name}`) : console.log(`I want to see ${movies[i].name}`))
        }
    }

    MovieStatus(movies)
*/

/* exercise two : Create a dynamic function that takes the given input and returns it in reverse order. You enter “Hello” it returns “olleH”

    function reverseString(str) {
        var splitString = str.split("");

        var reverseArray = splitString.reverse();

        var joinArray = reverseArray.join("");

        console.log(joinArray);
    }

    reverseString("hello");
*/

/* exercise three : Create a function that takes an argument called item. Use the item to create a diamond shape. Example:  item = “$”
   $
  $$$
 $$$$$
$$$$$$$
 $$$$$
  $$$
   $
*/

// console.log(`
//    $
//   $$$
//  $$$$$
// $$$$$$$
//  $$$$$
//   $$$
//    $
// `)

// exercise four : Use the DOM to fill out the form on this page: File a Complaint - Building or Facility Information (access-board.gov)



// exercise five : In CodePen make an API call using fetch(). Add the data to the HTML page, and style it using SCSS. You may choose any free API that you want. Here is a github page with links to many different API’s. https://github.com/public-api-lists/public-api-lists



/* exercise six : Create a function that will take in a sorted array and an integer as arguments. It will find where in the array the item belongs.
    Example: myInteger = 7, myArray = [1, 2, 3, 4, 5, 6, 8, 9]
    returns -> myArray= [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/