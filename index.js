function promptNumber() {
    let result = Number(prompt('Devine un nombre'))
    return result
}

function didIWin (number) {
    if (number === 22) {
        console.log('validation passed');
        return true;
    } else {
        console.log('validation failed');
        return false;
    }
}

let givenNumber = promptNumber()
let numberValidation = didIWin(givenNumber)
const resultat = document.querySelector('#winOrNot')

console.log(givenNumber)
console.log(numberValidation)



/* function gamePlay () {    
    console.log(givenNumber)
    console.log(numberValidation)
    while (numberValidation !== true) {
        return resultat.innerText = 'Essaye encore !'
    }
    //return resultat.innerText = didIWin(givenNumber)
    return resultat.innerText = 'Bravo ! Vous avez deviné le nombre'; */



/* 
function didIWin (givenNumber) {
    let result
    if (givenNumber === 22) {
        result = 'Bravo ! Vous avez deviné le nombre';
    } else if (givenNumber > 22) {
        result = 'Plus petit';  
    } else {
        result = 'Plus grand';
    }
    return result;
} */


