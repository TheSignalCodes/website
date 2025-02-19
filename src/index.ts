import "./styles";

const setupMenu = () => {
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  const navigation = document.getElementById("navigation");
  const navLinks = document.querySelectorAll("nav a");
  const header = document.getElementById("header");

  let previousScroll = window.scrollY;

  openMenu.addEventListener("click", () => {
    navigation.style.right = "0";
  });

  closeMenu.addEventListener("click", () => {
    navigation.style.right = "-100vw";
  });

  navLinks.forEach((navLink) =>
    navLink.addEventListener("click", () => {
      navigation.style.right = "-100vw";
    }),
  );

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    const isWithinPageBounds =
      currentScroll > 0 &&
      currentScroll < document.body.scrollHeight - window.innerHeight;

    if (isWithinPageBounds && previousScroll < currentScroll) {
      header.style.top = "-100px";
    } else {
      header.style.top = "0px";
    }

    previousScroll = currentScroll;
  });
};

const setupTransitions = () => {
  const body = document.querySelector(".preload");

  setTimeout(() => body.classList.remove("preload"), 100);
};

document.addEventListener("DOMContentLoaded", () => {
  setupTransitions();
  setupMenu();
});
