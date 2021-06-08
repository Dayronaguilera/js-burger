var userBurger = prompt("Inserisci il nome del tuo Panino: ");
var nameBurger = document.getElementsByClassName("burgherName")[0];

nameBurger.innerHTML = userBurger;

// bottone che genera il prezzo
var generatePrice = document.getElementsByClassName("create-boxes")[0];
// il prezzo generato 
var outputPrice = document.getElementById("price-burger");

var userCupon = document.getElementsByClassName("discount")[0];

generatePrice.addEventListener('click', function() { 
    // costo del panino + ingredienti!
    var resultSumInt = 25;
    var check = document.getElementsByClassName("check-ingre");

    for (var i = 0; i < check.length; i++){
        if (check[i].checked){
            resultSumInt += parseInt(check[i].value)
        }    
    }
    var discountCupon = 10;
    var sconto10 = "sconto10";

    if (userCupon.value.length > 0 && userCupon.value === sconto10){
        resultSumInt -= resultSumInt * discountCupon / 100;

    }
    outputPrice.innerHTML = "$ "  + resultSumInt.toFixed(2);
   })
