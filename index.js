function promptNumber() {
    let result = Number(prompt('Devine un nombre'))
    return result
}

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
}

let givenNumber = promptNumber()
console.log(givenNumber)

const resultat = document.querySelector('#resultat')
resultat.innerText = didIWin(givenNumber)