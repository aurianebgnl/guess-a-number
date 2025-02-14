const rightNumber = 22

function promptNumber() {
    let saisie = prompt('Devine un nombre');
    saisie = parseInt(saisie);
    while (isNaN(saisie) ) {
        console.log('Not a Number !')
       saisie = alert("Ce n'est pas un nombre !")
       return promptNumber()
    }
    //console.log(saisie);
    return saisie;
}

function didIWin(number) {
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
    let givenNumber = promptNumber();
    let gameResult = didIWin(givenNumber);
    // tester ici le true false, pour le sortir de la fonction didIWin

    while (gameResult === false){
        // appel récursif : appelle la fonction dans la fonction 
        gamePlay()
    } 
    console.log("C'est fini !")
 
}

gamePlay()





