let BtnMenuMob = document.querySelector("#btn-menu-mob");
let Line1 = document.querySelector(".line-menumob-1");
let Line2 = document.querySelector(".line-menumob-2");
let MenuMobile = document.querySelector("#menu-mobile");

let boby = document.querySelector("body");

BtnMenuMob.addEventListener("click", () => {
  Line1.classList.toggle("ativo1");
  Line2.classList.toggle("ativo2");
  MenuMobile.classList.toggle("abrir");

  boby.classList.toggle("no-overflow");
});
