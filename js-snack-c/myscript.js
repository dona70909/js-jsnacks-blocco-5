/**
 * 
   A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

   Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

 * 
 */

const strings = ["ciao","javAScrIPt","biCI","taZZa","timer","booK"];

const formatString = strings.map(element =>{
   return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
});

console.log(formatString);