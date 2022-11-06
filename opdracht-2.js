// OPDRACHT 2 - ELEMENTEN IN DE DOM PLAATSEN

// Opdracht 2a:
// Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent.
// Log de uitkomst in de console.

let tvSold = 0;
inventory.forEach(element => {
    tvSold += element.sold;
});
console.log(tvSold);

//----------------------------------------------------------------------------------------------------------------------

// Opdracht 2b:
// Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

const totalOfTvSold = document.getElementById('sold-tv');
totalOfTvSold.textContent = tvSold;
totalOfTvSold.style.color = "green";

//----------------------------------------------------------------------------------------------------------------------

// Opdracht 2c:
// Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent.
// Log de uitkomst in de console.

let inStock = 0;
inventory.forEach(element => {
    inStock += element.originalStock;
});
console.log(inStock);

//----------------------------------------------------------------------------------------------------------------------

// Opdracht 2d:
// Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

const stock = document.getElementById('original-stock');
stock.textContent = inStock;
stock.style.color = "blue";

//----------------------------------------------------------------------------------------------------------------------

// Opdracht 2e:
// Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

function tvLeftToSold() {
    return inStock - tvSold;
}

const remainingStock = document.getElementById('stock-to-sell');
remainingStock.textContent = tvLeftToSold();
remainingStock.style.color = "red";







