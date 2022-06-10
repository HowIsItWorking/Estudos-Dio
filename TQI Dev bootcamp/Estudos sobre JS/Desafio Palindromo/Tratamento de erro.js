function tratamento(arr, num) {

  try {
    if (!arr || !num) throw new ReferenceError("Envie os parametros.");
    if (typeof arr !== "object") throw new TypeError("Array precisa ser do tipo object.");
    if (typeof num !== "number") throw new TypeError("Num precisa ser do tipo number.");
    if (arr.length !== num) throw new RangeError("Tamanho invalido.");
  }
  catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Erro de referência");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Erro de tipagem!");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Erro de tamanho!");
      console.log(e.message);
    } else {
      console.log("Tipo de erro não esperado: " + e);
    }

  }

}

console.log(tratamento([1, 2, 4], 2));