function changeCheckedState() {
  var k = document.getElementById("item-checkbox");
  console.log(k.checked);
  k.checked = !k.checked;
}


function addListItem() {
  var input = document.getElementById("input").value;

  const i = document.createElement("div");
  i.setAttribute("class", "item-lista");

  var j = document.createElement("p");
  j.setAttribute("class", "texto-item");
  j.innerHTML = input;

  const k = document.createElement("button");
  k.setAttribute("id", "item-checkbox")
  k.setAttribute("type", "checkbox");
  k.setAttribute("onclick", "changeCheckedState()")

  i.appendChild(k);
  i.appendChild(j);
  document.body.appendChild(i);
}