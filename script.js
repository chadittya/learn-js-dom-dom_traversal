// 1.solo event close card
// const btnClose = document.querySelector(".close");
// btnClose.addEventListener("click", function () {
//   const cards = document.querySelector(".card");
//   cards.style.display = "none";
// });

// 2. dom transversal
const btnClose = document.querySelectorAll(".close");
btnClose.forEach(function (btn) {
  btn.addEventListener("click", function (ec) {
    // btn.parentElement.style.display = "none"; //dari button close[i](btn) ambil parentnya dan set style displaynya jado = none
    // atau
    ec.target.parentElement.style.display = "none"; //karena dari variabel ec nantinya bisa mendapatkan informasi macam2
  });
});

const nama = document.querySelector(".nama");
console.log(nama.nextElementSibling);
