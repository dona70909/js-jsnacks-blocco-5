/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */

const player =  {
    code: "",
    name:"Donatella",
    surname:"Campaniello",
    eta:"25" ,
    media:"",
    accurancy: "",
}



function randomElements(length,elements) {
    let result = '';
    for (let i = length; i > 0; i--) {
        result += elements[Math.floor(Math.random() * elements.length)];
    }
    return result;
}

let threeNumbers = randomElements(3,"0123456789");
console.log(threeNumbers);
let threeChar = randomElements(3, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
console.log(threeChar);


player.code = threeChar + threeNumbers;
player.media += Math.floor(Math.random() * 50) + " points";
player.accurancy += Math.floor(Math.random() * 100) + "%";
console.log(player);