function dinerJavaScript() {
    var entre = 0;
    var sideOne = 0;
    var sideTwo = 0;
    var entrePrice = 0;
    var sidePrice = 0;
    var total = parseInt(entrePrice) + parseInt(sidePrice);

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
    // console.log('Would you like Grilled Chicken or Shrimp? (option 1 or 2?)')
    var answerOne = window.prompt('Would you like, Grilled Chicken or Shrimp? (option 1 or 2?)')

    if (answerOne == 1) {
        var entre = 'Grilled Chicken'
        var entrePrice = '15.50';
    }
    else if (answerOne == 2) {
        var entre = 'Grilled Shrimp'
        var entrePrice = '17.50';
    }


    // console.log('That comes with two sides... what would you like for the first? (options 3, 4 or 5?)')
    var answerTwo = window.prompt('And for the second? (options 3, 4 or 5?)')

    if (answerTwo == 3) {
        var sideOne = 'Fries'
    }
    else if (answerTwo == 4) {
        var sideOne = 'Fried Pickles'
        var sidePrice = '1.50'
    }
    else if (answerTwo == 5) {
        var sideOne = 'Mashed Potatoes'
    }

    // console.log('That comes with two sides... (options 3, 4 or 5?)')
    var answerThree = window.prompt('That comes with two sides... (options 3, 4 or 5?)')

    if (answerThree == 3) {
        var sideTwo = 'Fries'
    }
    else if (answerThree == 4) {
        var sideTwo = 'Fried Pickles'
        var sidePrice = '1.50'
    }
    else if (answerThree == 5) {
        var sideTwo = 'Mashed Potatoes'
    }

    console.log(`
    You ordered:
    ${entre} for the entre with ${sideOne} and ${sideTwo}.
    
    Your total is:
    $${total}
    `)

    // console.log(entre)
    // console.log(sideOne)
    // console.log(sideTwo)
}

dinerJavaScript()