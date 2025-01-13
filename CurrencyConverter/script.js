// Here we add a logic
//
//

let from = document.getElementById("from-currency").value;
let to = document.getElementById("to-currency").value;
let amount = document.getElementById("amount").value;


function showResult(conversion) {
    document.getElementById("conversion-result")
        .innerHTML = conversion

}

function error(){
        document.getElementById("conversion-result")
        .innerHTML = 'ERROR'

}

function convertir() {
let conversion = 0;
    if (from === 'USD') {
        if (to === 'EUR') {
            conversion = amount * 0.98;
            showResult(conversion)
        }else if(to=== 'GBP'){
            conversion = amount * 0.82;
            showResult(conversion)
        }else{
            error();
        }
    }else if(from === 'EUR'){
        if(to === 'USD'){
            conversion = amount * 1.2;
            showResult(conversion)
        }else if(to === 'GBP' ){
            conversion = amount * 0.84
            showResult(conversion)
        }else{
            error();
        }
    }else{
       if(to === 'USD'){
            conversion = amount * 1.22;
            showResult(conversion);
        }else if(to==='EUR'){
            conversion = amount * 1.19;
            showResult(conversion);
        }else{
            error();
        }
    }
}


/* version mejorada sin tantos IFs y con objectos
 let from = document.getElementById("from-currency").value;
let to = document.getElementById("to-currency").value;
let amount = parseFloat(document.getElementById("amount").value);

function showResult(conversion) {
  document.getElementById("conversion-result").innerHTML = conversion.toFixed(2);
}

function error() {
  document.getElementById("conversion-result").innerHTML = "ERROR";
}

function convertir() {
  const conversionRates = {
    USD: { EUR: 0.98, GBP: 0.82 },
    EUR: { USD: 1.2, GBP: 0.84 },
    GBP: { USD: 1.22, EUR: 1.19 },
  };

  if (conversionRates[from] && conversionRates[from][to]) {
    let conversion = amount * conversionRates[from][to];
    showResult(conversion);
  } else {
    error();
  }
}



*/
