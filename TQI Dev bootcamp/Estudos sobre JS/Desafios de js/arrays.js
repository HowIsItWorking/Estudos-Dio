function arrayHandler(array) {

  if (!array) return -1;
  if (!array.length) return -1;
  
  for (i = 0; i < array.length; i++){
    if (array[i] === 0) "você já é zero!";

    if (array[i] % 2 === 0) array[i] = 0;
  }

  return array;
}

let arr = [];

console.log(arrayHandler(arr));