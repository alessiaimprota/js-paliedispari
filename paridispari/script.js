/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const userNumber=parseInt(prompt("Inserisci un numero da 1 a 5"))
console.log("Numero utente è", userNumber)
let randomNumber = generaterRandomNumber();
console.log("Numero random del computer", randomNumber)


sumEvenGame=sumIsEven(userNumber, randomNumber)

function generaterRandomNumber(){
    return Math.floor(Math.random() * 5)+ 1;
}



function sumIsEven (num1, num2){
 const sumFunction= num1 + num2;
 return sumFunction % 2 === 0;
}

console.log("La somma è pari?", sumEvenGame)