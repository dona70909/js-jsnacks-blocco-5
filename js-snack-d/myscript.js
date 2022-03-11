/* 
    Crea un array di oggetti che rappresentano degli animali.
    Ogni animale ha un nome, una famiglia e una classe.
    Es:

    [
        { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
        { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
        { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ]

    Crea un nuovo array con la lista dei mammiferi. 
    
*/

const animals = [
    {
        nome:"Zebra",
        famiglia:"Equidae",
        classe:"mammiferi",
    },
    {
        nome:"Giraffa",
        famiglia:"Giraffidi",
        classe:"mammiferi",
    },
    {
        nome:"Cane",
        famiglia:"Canidi",
        classe:"mammiferi",
    },

    {
        nome:"Gallina",
        famiglia:"Fasianidi",
        classe:"uccelli",
    }
];


const mammiferi = animals.filter( element => {
    if(element.classe == "mammiferi"){
        return true;
    }
    
});

console.log(mammiferi);