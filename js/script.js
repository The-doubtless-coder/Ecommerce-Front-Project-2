"use strict";
// modal settings
const modal = document.querySelector(".modal");
console.log(modal);
const modalCloseBtn = document.querySelector(".modal-close-button");
console.log(modalCloseBtn);
const modalCloseOverlay = document.querySelector(".modal-close-overlay");
console.log(modalCloseOverlay);

const modalCloseFunc = function () {
  modal.classList.add("closed");
};
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

// Notification toast settings
const exitNotifbtn = document.querySelector(".toast-close-btn");
const notifToast = document.querySelector(".notification-toast");

const exitNotifunc = function () {
  notifToast.classList.add("closed");
};
exitNotifbtn.addEventListener("click", exitNotifunc);

// mobile menu settings
// const mobileMenuOpenBtn = document.querySelector("[data-mobile-menu-open-btn]");
// const mobileMenuCloseBtn = document.querySelector(
//   "[data-mobile-menu-close-btn]"
// );
// const mobileMenuNav = document.querySelector("[data-mobile-menu]");
// const overlay = document.querySelector("[data-overlay]");

// const mobileMenuCloseFunc = function () {
//   mobileMenuNav.classList.remove("active");
//   overlay.classList.remove("active");
// };
// const mobileMenuOpenFunc = function () {
//   mobileMenuNav.classList.add("active");
//   overlay.classList.add("active");
// };
// mobileMenuOpenBtn.addEventListener("click", mobileMenuOpenFunc);
// mobileMenuCloseBtn.addEventListener("click", mobileMenuCloseFunc);
// overlay.addEventListener("click", mobileMenuCloseFunc);
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");
console.log("here here here ");
console.log(mobileMenuOpenBtn);
console.log(mobileMenu);
console.log(mobileMenuCloseBtn);
console.log(overlay);

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };
  const mobileMenuOpenFunc = function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  };
  mobileMenuOpenBtn[i].addEventListener("click", mobileMenuOpenFunc);
  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}

// accordion variables
const accordionbtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");
for (let i = 0; i < accordionbtn.length; i++) {
  accordionbtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");
    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;
      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionbtn[i].classList.remove("active");
      }
    }
    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}
