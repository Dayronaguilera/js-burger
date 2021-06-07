// bottone che genera il prezzo
var generatePrice = document.getElementsByClassName("create-boxes")[0];

// il prezzo generato 
var outputPrice = document.getElementById("price-burger");
var discountCupon = 10;
var userCupon = document.getElementsByClassName("discount")[0];

generatePrice.addEventListener('click', function () { 
    var resultSumInt = 0 + 50;
    var check = document.getElementsByClassName("check-ingre");
    for (var i = 0; i < check.length; i++){
        if (check[i].checked){
            resultSumInt += parseInt(check[i].value)
        }
        if (userCupon.value.length === 6){
            resultSumInt -= resultSumInt * discountCupon / 100;

        }
    }
    
    outputPrice.innerHTML = "$ "  + resultSumInt.toFixed(2);
   })