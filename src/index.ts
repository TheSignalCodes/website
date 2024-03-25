import "./styles";

document.addEventListener("DOMContentLoaded", () => {
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  const navigation = document.getElementById("navigation");
  const navLinks = document.querySelectorAll("nav a");

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
});
