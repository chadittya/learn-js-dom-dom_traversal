// 1.solo event close card
// const btnClose = document.querySelector(".close");
// btnClose.addEventListener("click", function () {
//   const cards = document.querySelector(".card");
//   cards.style.display = "none";
// });

// 2. dom transversal
// const btnClose = document.querySelectorAll(".close");
// btnClose.forEach(function (btn) {
//   btn.addEventListener("click", function (ec) {
//     // btn.parentElement.style.display = "none"; //dari button close[i](btn) ambil parentnya dan set style displaynya jado = none
//     // atau
//     ec.target.parentElement.style.display = "none"; //karena dari variabel ec nantinya bisa mendapatkan informasi macam2
//     ec.preventDefault();
//     ec.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

// const nama = document.querySelector(".nama");
// console.log(nama.nextElementSibling);

// 3. efektif untuk dinamyc card
const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  // console.log(e.target); //js tau apa yang kita click disini, ini yang kita manfaatkan
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
    e.stopPropagation();
  }
});
