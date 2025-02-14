
function promptNumber() {
    let saisie = prompt('Donne moi un nombre compris entre 0 et 50');
    saisie = parseInt(saisie);
    if (isNaN(saisie) || saisie < 0 || saisie > 50 ) {
        console.log('Not a Number !')
       saisie = alert("Il me faut vraiment un nombre compris entre 0 et 50 !")
       return promptNumber()
    }
    //console.log(saisie);
    return saisie;
}

function findNumber() {
    let saisie = prompt('Devine un nombre');
    saisie = parseInt(saisie);
    if (isNaN(saisie) || saisie < 0 || saisie > 50) {
        console.log('Not a Number !')
       saisie = alert("Ce n'est pas un nombre !")
       return promptNumber()
    }
    //console.log(saisie);
    return saisie;
}

function didIWin(number, rightNumber) {
    let result;
    let message;
    if (number === rightNumber) {
        message = 'Bravo ! Vous avez deviné le nombre';
        result = true;
    } else if (number > rightNumber) {
        message = 'Plus petit !';
        result = false;
    } else if (number < rightNumber) {
        message = 'Plus grand !';
        result = false;
    } else {} 
    alert(message)
    console.log(result)
    return result
}

function gamePlay(){
    const rightNumber = promptNumber();
    let gameResult = false;

    while (!gameResult){
        let givenNumber = findNumber();
        gameResult = didIWin(givenNumber, rightNumber);
        //gamePlay()  // appel récursif : appelle la fonction dans la fonction 
    } 
    console.log("C'est fini !")
 
}

gamePlay()





