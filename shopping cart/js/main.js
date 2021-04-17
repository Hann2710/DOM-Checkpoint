//like button

var hearts = document.getElementsByClassName("heart");
for (let el of hearts) {
  el.addEventListener("click", function () {
    el.classList.toggle("redding");
  });
}
//plus-button
var incrmnt = document.getElementsByClassName("plus-button");
for (let el of incrmnt)
  el.addEventListener("click", function () {
    el.previousElementSibling.value++;
    total();
  });
//minus-button
var dcrmnt = Array.from(document.getElementsByClassName("minus-button"));
for (let el of dcrmnt)
  el.addEventListener("click", function () {
    let val = el.nextElementSibling.value;
    let num = parseInt(val, 10);

    if (num > 0) {
      num--;
    }
    el.nextElementSibling.value = num;
    total();
  });
//remove-button
var rmv = document.getElementsByClassName("rmve");
for (let el of rmv) {
  el.addEventListener("click", function () {
    var itemdiv = el.closest(".item");
    while (itemdiv.firstChild) {
      itemdiv.firstChild.remove();
    }
    total();
  });
}
//total
function total() {
  let qty = Array.from(document.getElementsByClassName("frame"));
  let prices = Array.from(document.getElementsByClassName("item-price"));
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += parseInt(qty[i].value) * parseInt(prices[i].innerHTML);
  }
  return (document.getElementById("cart-total-price").innerHTML =
    "Total :" + sum);
}
