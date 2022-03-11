/**
*
*
Crea un array composto da 12 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

Infine stampa separatamente i 3 array.

*
*/

const cars = [
    {
        marca:"Audi",
        modello:"A3",
        alimentazione:"benzina",
    },
    {
        marca:"Mercedes",
        modello:"slk 200",
        alimentazione:"benzina",
    },
    {
        marca:"Tesla",
        modello:"Model 3",
        alimentazione:"diesel",
    },

    {
        marca:"Volkswagen",
        modello:"Golf",
        alimentazione:"gpl",
    },

    {
        marca:"Alfa Romeo",
        modello:"Giulietta",
        alimentazione:"gpl",
    },

    {
        marca:"Ford",
        modello:"Eco sport",
        alimentazione:"elettrico",
    },

    {
        marca:"Fiat",
        modello:"Panda",
        alimentazione:"metano",
    },
];


const benzinaCars = cars.filter((car) => {
    if(car.alimentazione == "benzina"){
        return true;
    }
});

console.log(benzinaCars);

const dieselCars = cars.filter((car) => {
    if(car.alimentazione == "diesel"){
        return true;
    }
});

console.log(dieselCars);

const otherCars = cars.filter((car) => {
    if((car.alimentazione != "diesel") && (car.alimentazione != "benzina")){
        return true;
    }
});

console.log(otherCars);