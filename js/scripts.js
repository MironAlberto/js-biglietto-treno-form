
const km = document.getElementById("km");
const eta = document.getElementById("eta");
const buttonTicket = document.getElementById("button-ticket");

buttonTicket.addEventListener("click", function(){

    const etaInNumero = parseInt(eta.value);
    const kmInNumero = parseInt(km.value);

    const kmCost = 0.21;
    let fullPrice = (kmInNumero * kmCost); 

    if (etaInNumero < 18) {

        fullPrice = (kmCost * kmInNumero) - ((kmCost * kmInNumero) * 20) / 100;
    
    }
    
    else if (kmInNumero > 65) {
        fullPrice = (kmCost * kmInNumero) - ((kmCost * kmInNumero) * 40) / 100;
    }

    fullPrice = fullPrice.toFixed(2);

    console.log('fullPrice', fullPrice, typeof fullPrice);
});

