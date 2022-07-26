const menuBttns = document.querySelectorAll("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-menu]");
// const menuOverlay = document.querySelector(".menu-overlay");
const menuNav = document.querySelector(".nav__list--group");

menuBttns.forEach((el) => el.addEventListener("click", toggleMenuVisibility));
// menuOverlay.addEventListener("click", toggleMenuVisibility);
menuNav.addEventListener("click", remoteClass);

function toggleMenuVisibility() {
  const expanded = document.body.classList.contains("menu-is-open");

  menuBttns.forEach((el) => el.setAttribute("aria-expanded", !expanded));
  document.body.classList.toggle("menu-is-open");
  expanded
    ? document.body.removeEventListener("keydown", onKeyDown)
    : document.body.addEventListener("keydown", onKeyDown);
}

function onKeyDown(event) {
  event.code === "Escape" ? toggleMenuVisibility() : null;
}

function remoteClass() {
  document.body.classList.remove("menu-is-open");
}

// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector(".menu-btn"),
//     closeMenuBtn: document.querySelector(".close-btn"),
//     menu: document.querySelector(".mob-menu-wrap"),
//     body: document.querySelector("body"),
//     nav: document.querySelector(".mob-menu__list"),
//   };

//   refs.openMenuBtn.addEventListener("click", toggleMenu);
//   refs.closeMenuBtn.addEventListener("click", toggleMenu);
//   refs.nav.addEventListener("click", remoteClass);

//   function toggleMenu() {
//     refs.menu.classList.toggle("is-hidden");
//     refs.body.classList.toggle("no-scroll");
//   }

//   function remoteClass() {
//     refs.menu.classList.add("is-hidden");
//   }
// })();
