// OPDRACHT 4 -FUNCTIES

// Opdracht 4a:
// Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format
// [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart-tv.

function generateStringNameOf(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}
console.log(generateStringNameOf(inventory[0]));

//----------------------------------------------------------------------------------------------------------------------

// Opdracht 4b:
// Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het
// format €379,- of €159,-.

function generateStringPriceOf(tv) {
    return `€${tv.price},-`;
}
console.log(generateStringPriceOf(inventory[0]));

//----------------------------------------------------------------------------------------------------------------------

// Opdracht 4c:
// Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie
// geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches
// ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm).
// Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58
// inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor
// moeten gebruiken.

function generateStringOfSize(tv) {
    let container = ""
    const screenSize = tv.availableSizes;
    for (let i = 0; i < screenSize.length; i++) {
        const inch = screenSize[i];
        const cm = screenSize[i] * 2.54;
        container = `${container}${inch} inch (${cm}) cm |  `;
    }
    return container;
}
console.log(generateStringOfSize(inventory[0]));

//----------------------------------------------------------------------------------------------------------------------

// Opdracht 4d:
// Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand
// voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

//  Philips 43PUS6504/12 - 4K TV
//  €379,-
//  43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

function printDetails(tv) {
    const selectedTV = document.createDocumentFragment();

    // Hier maak ik een fragment voor snellere reflow van de pagina.
    const tableRowElementName = document.createElement('tr');
    tableRowElementName.textContent = generateStringNameOf(tv);
    selectedTV.appendChild(tableRowElementName);

    const tableRowElementPrice = document.createElement('tr');
    tableRowElementPrice.textContent = generateStringPriceOf(tv);
    selectedTV.appendChild(tableRowElementPrice);

    const tableRowElementSizes = document.createElement('tr');
    tableRowElementSizes.textContent = generateStringOfSize(tv);
    selectedTV.appendChild(tableRowElementSizes);

    // Hier voeg ik het gemaakte fragment in één keer toe aan de table-tag.
    const container = document.getElementById('selected-tv-info');
    container.appendChild(selectedTV);
}
printDetails(inventory[0])

//----------------------------------------------------------------------------------------------------------------------

// Opdracht 4e:
// Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode
// in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

function printAllDetails(Array) {
    Array.map((tv) => {
        const ListOfTv = document.createDocumentFragment();

        const tableRowElementName = document.createElement('tr');
        tableRowElementName.textContent = generateStringNameOf(tv);
        ListOfTv.appendChild(tableRowElementName);

        const tableRowElementPrice = document.createElement('tr');
        tableRowElementPrice.textContent = generateStringPriceOf(tv);
        ListOfTv.appendChild(tableRowElementPrice);

        const tableRowElementSize = document.createElement('tr');
        tableRowElementSize.textContent = generateStringOfSize(tv);
        ListOfTv.appendChild(tableRowElementSize);

        const container = document.getElementById('tv-Info');
        container.appendChild(ListOfTv);
    });
}
printAllDetails(inventory);

//----------------------------------------------------------------------------------------------------------------------

// BONUSOPDRACHT

// Bonusopdracht 1:
// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je
// in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de
// buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de console loggen als de gebruiker op de
// bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!

// Button sold-out:
function giveSoldOutTv(Array) {
    const soldOut = Array.map((inventory) => {
        return inventory.sold === inventory.originalStock;
    });
    console.log(soldOut)
}

// Button hasAmbilight:
function giveAmbilight(Array) {
    const hasAmbilight = Array.filter((inventory) => {
        return inventory.options.ambiLight;
    });
    console.log(hasAmbilight);
}

// Button sort price:
function sortOnPrice(Array) {
    Array.sort((a, b) => a.price - b.price);
    console.log(Array);
}

//----------------------------------------------------------------------------------------------------------------------

// Bonusopdracht 2:
// Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan
// jouw functie uit 4e zodat de resultaten daadwerkelijk op de pagina weergegeven worden!

























