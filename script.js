// Plus Minus  //
let inputVal = document.querySelector(".inptValue");
function increment() {
  inputVal.value++;
  let incre = inputVal.value;
  document.getElementById("values").innerHTML = incre;
  document.getElementById("result").innerHTML = "$" + incre * 125.0;
  document.getElementById("bage").innerText = incre;
}
// Minus //
function decrement() {
  if (inputVal.value > 0) {
    inputVal.value--;
  }
  let dec = inputVal.value;
  document.getElementById("values").innerHTML = dec;
  document.getElementById("result").innerHTML = dec * 125.0;
  document.getElementById("bage").innerText = dec;
}
// Cart section  //
let click = true;
function cartSection() {
  if (click) {
    click = false;
    document.getElementById("addCart").style.display = "block";
  } else {
    click = true;
    document.getElementById("addCart").style.display = "none";
  }
}
// add items in cart section //
function addItems() {
  if (inputVal.value == 0) {
    document.getElementById("alert").innerHTML = "Select atleast one item ";
    setTimeout(function alert() {
      document.getElementById("alert").innerHTML = "Add to Cart";
    }, 2000);
  } else {
    document.getElementById("Cartempty").style.display = "none";
    document.getElementById("alert").innerHTML = "Added to Cart";
    document.getElementById("AddCartItem").className = "addCartitem";
    document.getElementById("cartOrder").style.display = "flex";
    document.getElementById("bage").style.display = "block";
  }
}
// checkOut //
function checkout() {
  
  document.getElementById("alert").innerHTML = "Add to Cart";
  document.getElementById("AddCartItem").className = "checkOut";
  document.getElementById("cartOrder").style.display = "none";
  document.getElementById("Cartempty").style.display = "flex";
  document.getElementById("bage").style.display = "none";
  inputVal.value = 0;
}
 

let bgColor = ["#ffffff", "#ffffff"];
document.querySelectorAll(".swiper-button").forEach(function (d, i) {
  d.style.color = bgColor[i];
});
