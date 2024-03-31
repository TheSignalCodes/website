import "./styles";

document.addEventListener("DOMContentLoaded", () => {
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
    })
  );

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (previousScroll < currentScroll) {
      header.style.top = "-100px";
    } else {
      header.style.top = "0px";
    }

    previousScroll = currentScroll;
  });
});
