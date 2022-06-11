function palicheck(string1) {
  if (!string1) return;

  return string1.split("").reverse().join("") === string1;

}

console.log(palicheck("asa"));