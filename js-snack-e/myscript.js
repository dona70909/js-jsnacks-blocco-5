/**
*
*
Crea un array di oggetti che rappresentino delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
*/

const people = [
   {
      name:"Brad",
      surname:"Pitt",
      eta:58,
   },

   {
      name:"Leonardo",
      surname:"Di Caprio",
      eta:47,

   },

   {
      name:"Tom",
      surname:"Hanks",
      eta:65,
   },

   {
      name:"Rober",
      surname:"De Niro",
      eta:78,
   },

   {
      name:"Fran",
      surname:"Lebowitz",
      eta:71,
   },

   {
      name:"Uma",
      surname:"Thurman",
      eta:51,
   },

   {
      name:"Sarah",
      surname:"Paulson",
      eta:47,
   },
]


const drivers = people.filter((person) => {
   if(person.eta > 18){
      return true;
   }
});



for(let i = 0; i < drivers.length;i++){
   drivers[i].phrase = drivers[i].name + " " + " " + drivers[i].surname + " can drive";;
}

console.table(drivers);