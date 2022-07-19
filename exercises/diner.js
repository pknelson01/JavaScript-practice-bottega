function dinerJavaScript() {
    var entre = '';
    var sideOne = '';
    var sideTwo = '';
    var total = 0;

    custName = window.prompt("what is your name?")
    console.log(
        `Welcome ${custName}! What can I do for you?
        Main Menu:
        -Grilled Chicken- $15.50 (1)
        -Grilled Shrimp- $17.50 (2)
        
        Sides:
        -Fries- (3)
        -Fried Pickles- + $1.50 (4)
        -Mashed Potatoes- (5)
        `)
    var answerOne = window.prompt('Would you like, Grilled Chicken or Shrimp? (option 1 or 2?)')

    if (answerOne == 1) {
        var entre = 'Grilled Chicken'
        console.log('Grilled Chicken...')
        total = 15.50;
    }
    else if (answerOne == 2) {
        var entre = 'Grilled Shrimp'
        console.log('ugh, Grilled Shrimp...')
        total = 17.50;
    }


    var answerTwo = window.prompt('That comes with two sides... (options 3, 4 or 5?)')

    if (answerTwo == 3) {
        sideOne += 'Fries'
        console.log('Really? With a side of fries? Basic Bitch...')
    }
    else if (answerTwo == 4) {
        sideOne += 'Fried Pickles'
        console.log('With a side of Fried Pickles, those are my favorite, you\'re a man of taste...')
        total += 1.50;
    }
    else if (answerTwo == 5) {
        sideOne += 'Mashed Potatoes'
        console.log('With a side of shit...')
    }

    var answerThree = window.prompt('And for the second? (options 3, 4 or 5?)')

    if (answerThree == 3) {
        sideTwo += 'Fries'
        console.log('and a side of fries? Basic Bitch...')
    }
    else if (answerThree == 4) {
        sideTwo += 'Fried Pickles'
        console.log('and a side of Fried Pickles, those are my favorite, you\'re a man of taste...')
        total += 1.50;
    }
    else if (answerThree == 5) {
        sideTwo += 'Mashed Potatoes'
        console.log('and a pile of white hot shit.')
    }

    console.log(`
    You ordered:
    ${entre} for the entre with ${sideOne} and ${sideTwo}.
    
    Your total is:
    $${total}
    `)
}
dinerJavaScript()