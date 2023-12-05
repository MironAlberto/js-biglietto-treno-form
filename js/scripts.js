
const name = document.getElementById("name");
const km = document.getElementById("km");
const eta = document.getElementById("eta");
const buttonTicket = document.getElementById("button-ticket");
const buttonForm = document.querySelector("form");

buttonForm.addEventListener("submit", function(evento){

    evento.preventDefault();

    const etaInNumero = parseInt(eta.value);
    const kmInNumero = parseInt(km.value);

    const kmCost = 0.21;
    let fullPrice = (kmInNumero * kmCost); 

    if (etaInNumero < 18) {

        fullPrice = (kmCost * kmInNumero) - ((kmCost * kmInNumero) * 20) / 100;
    
    }
    
    else if (etaInNumero > 65) {
        fullPrice = (kmCost * kmInNumero) - ((kmCost * kmInNumero) * 40) / 100;
    }

    fullPrice = fullPrice.toFixed(2);

    console.log('fullPrice', fullPrice, typeof fullPrice);

    const resultTicket = document.querySelector('h2');
    resultTicket.innerHTML = 'Il prezzo totale del tuo biglietto è di ' + fullPrice + ' €';

});

