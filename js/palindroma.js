/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/

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




