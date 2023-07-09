// select html elements

const navToggle = document.querySelector(".nav-toggle");
const navSection = document.querySelector(".nav-section");
const navbar = document.querySelector(".navbar");
const mobileNav = document.querySelector(".nav-menu-items");
const mobileNavLists = mobileNav.querySelectorAll(
  ".products, .abouts, .connects"
);

// toggle nav menu on mobile
navToggle.addEventListener("click", () => {
  navSection.classList.toggle("show-menu");
});

// display mobile nav lists on click
mobileNavLists.forEach(function (navListsItem) {
  const navListHeader = navListsItem.querySelector(".nav-lists-header");
  navListHeader.addEventListener("click", () => {
    mobileNavLists.forEach(function (navList) {
      if (navList !== navListsItem) {
        navList.classList.remove("show-lists");
      }
    });
    navListsItem.classList.toggle("show-lists");
  });
});
