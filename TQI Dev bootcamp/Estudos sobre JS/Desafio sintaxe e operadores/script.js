
  
function logica(a, b) {
    
    a = Number(prompt("Digite o primeiro valor."));
    b = Number(prompt("Digite o segundo valor."));

  if ( a == null || b == null || a == undefined || b == undefined) {
    alert("ERRO - Valores de entrada inválidos!");
  } else {

     alert(`Os números ${a} e ${b} ${(a === b) ? "são iguais." : "Não são iguais."}. Sua soma é ${a + b}, que é ${(a + b > 10) ? "maior" : "menor"} que 10 e ${(a + b > 20) ? "maior" : "menor"} que 20.`);

    console.log("Os números " + a + " e "+ b + ((a === b) ? " são iguais." : "não são iguais.") + "Sua soma é " + (a + b) + ", que é " + ((a + b > 10) ? "maior que 10" : "menor que 10") + " e " + ((a + b > 20) ? "maior que 20." : "menor que 20."));
  }

}

logica();