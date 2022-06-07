var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

function checkButtons(){
  if (currentNumber >= 10) {
    document.getElementById("plus").style.visibility = "hidden";
  }
  else if (currentNumber < 10 ){
    document.getElementById("plus").style.visibility = "visible";
  }

  if (currentNumber <= 0) {
    document.getElementById("minus").style.visibility = "hidden";
  }
  else if (currentNumber > -1){
    document.getElementById("minus").style.visibility = "visible";
    
  }

}

document.getElementById("plus").addEventListener("click", increment);
document.getElementById("plus").addEventListener("click", checkButtons);

document.getElementById("minus").addEventListener("click", decrement);
document.getElementById("minus").addEventListener("click", checkButtons);


