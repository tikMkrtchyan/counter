let resul = document.querySelector("#inpCalc ")
  // ***********************************************
let inp = document.querySelectorAll(".btnCalc ");
let ac = document.querySelector(".ac ");
let back = document.querySelector(".back ");
let ecual = document.querySelector(".ecual ");
for (let i = 0; i < inp.length; i++) {
  inp[i].onclick = function() {
    resul.value += inp[i].innerHTML;
  }
}

ac.onclick = function() {
  resul.value = "";
}
for (let i = 0; i < inp.length; i++) {
  back.onclick = function() {
    resul.value = resul.value.slice(0, -1)
  }
}


ecual.onclick = function() {
  if (resul.value) {
    resul.value = eval(resul.value)
  }
};