const userWordInput= prompt("Inserisci una parola per vedere se è palindroma!")

const reverseWordUser= reverseWord(userWordInput)
console.log(reverseWordUser)

    ////Faccio prima funzione che mi ridia la parola invertita
        function reverseWord(word){
        let result=""
        for(let i=word.length-1; i>=0; i--){
            result= result+ word[i];
        }
        return result;
    }

///////////////Seconda funzione per verificare che parole siano uguali con una variabile let per esportare il true false

function isPalindrome(userWord, reverseWord){
    let palindromeWord;
    
        if (userWord===reverseWord){
            return palindromeWord=true;
        }
        else{
            return palindromeWord===false;
        }
    }

const palindromeResult= isPalindrome(userWordInput , reverseWordUser)
console.log(palindromeResult)

    

