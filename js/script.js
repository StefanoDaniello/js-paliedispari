/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/

/*
let userWord=prompt('inserisci una parola')
console.log(userWord)

function palindroma(){
    if(isNaN(userWord)){
        let splitWord= userWord.split('');
        console.log(splitWord)
        splitWord=splitWord.reverse();
        console.log(splitWord)
        if(userWord === splitWord){
            console.log('laparola è palindroma')
        }else{
            console.log('la parola non è palindroma')
        }
    }else{
        console.log('errore scrivi una parola!')
    }

}
const result=palindroma()
*/



/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
:githubparrot: :githubparrot:  Buon lavoro e buon divertimento!  :githubparrot: :githubparrot:
*/

let userChoise = prompt('scegli pari o dispari')
let userNumber = parseInt(prompt('inserisci un numero compreso tra 1 e 5!'))
if(userNumber > 5 || userNumber <=0){
    console.log('errore inserisci un numero valido tra 1 e 5!')
}else{
    console.log(userNumber)
    let result=oddOreven()
    // console.log(result)
}



function oddOreven(){
    let computerNumber = getRndInteger(1,5)
    console.log(computerNumber)
    let somma= userNumber+computerNumber
    console.log(somma)
    if(somma % 2 === 0 && userChoise % 2 === 0){
        console.log('hai vinto')
    }else{
        console.log('hai perso')
    }
}











function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}