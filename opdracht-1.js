// OPDRACHT 1 - ARRAY METHODEN

// Opdracht 1a:
// Gebruik een array-methode om een array te maken met alle tv-type namen.
// Log de uitkomst in de console.

const tvType = inventory.map((inventory ) => {
    return inventory.type;
});
console.log(tvType);

//----------------------------------------------------------------------------------------------------------------------

// Opdracht 1b:
// Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
// Log de uitkomst in de console.

const outOfStock = inventory.filter((inventory ) => {
    const originalStock = inventory.originalStock
    let soldOut = inventory.sold;
    if (originalStock === soldOut){
        return inventory;
    }
});
console.log(outOfStock);

//----------------------------------------------------------------------------------------------------------------------

// Opdracht 1c:
// Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
// Log de uitkomst in de console.

const hasAmbiLight = inventory.filter((inventory ) => {
    let ambiLight = inventory.options.ambiLight;
    if (ambiLight === true){
        return inventory;
    }
});
console.log(hasAmbiLight);

//----------------------------------------------------------------------------------------------------------------------

// Opdracht 1d:
// Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
// Log de uitkomst in de console.

// CODE STAAT UIT I.V.M. dat het de array definitief sorteert!!

/*

const sortLowerPrices = (inventory = []) => {
    const sorter = (a, b) => {
        return +a.price - +b.price;
    };
    inventory.sort(sorter);
};
sortLowerPrices(inventory);
console.log(inventory);

*/