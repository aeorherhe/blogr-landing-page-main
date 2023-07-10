// select html elements

const navToggle = document.querySelector(".nav-toggle");
const navSection = document.querySelector(".nav-section");
const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");

const mobileNav = document.querySelector(".nav-menu-items");
const mobileNavLists = mobileNav.querySelectorAll(
  ".products, .abouts, .connects"
);

// toggle nav menu on mobile
navToggle.addEventListener("click", () => {
  navSection.classList.toggle("show-menu");

  hero.addEventListener("click", () => {
    navSection.classList.remove("show-menu");
  });
});

// display nav list base on screen size
navSection.addEventListener("mouseover", () => {
  let desktopScreen = window.matchMedia("(min-width:45rem)");
  if (!desktopScreen.matches) {
    showNavLists(mobileNavLists, "click");
  } else {
    showNavLists(mobileNavLists, "mouseover");
  }
});

// display mobile nav lists
function showNavLists(navLists, event) {
  navLists.forEach(function (navListsItem) {
    const navListHeader = navListsItem.querySelector(".nav-lists-header");
    navListHeader.addEventListener(event, () => {
      navLists.forEach(function (navList) {
        if (navList !== navListsItem) {
          navList.classList.remove("show-lists");
        }
      });
      navListsItem.classList.add("show-lists");
      hero.addEventListener(event, () => {
        navListsItem.classList.remove("show-lists");
      });
    });
  });
}
