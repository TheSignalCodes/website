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

    if (previousScroll < currentScroll) {
      header.style.top = "-100px";
    } else {
      header.style.top = "0px";
    }

    previousScroll = currentScroll;
  });
};

const setupContactForm = () => {
  const contactForm = document.getElementById("contact");
  const contactOverlay = document.getElementById("contact-form-overlay");
  const contactButtons = document.querySelectorAll(".contact-button");
  const close = document.getElementById("close-contact-form");
  const contactMessage = <HTMLTextAreaElement>(
    document.getElementById("contact-message")
  );
  const contactMessageCharacterCount = <HTMLParagraphElement>(
    document.getElementById("contact-message-character-count")
  );

  contactButtons.forEach((item) =>
    item.addEventListener("click", () => {
      contactOverlay.style.opacity = "100";
      contactOverlay.style.pointerEvents = "all";
      contactForm.style.opacity = "100";
      contactForm.style.transform = "translateY(0vh)";
    }),
  );

  [contactOverlay, close].forEach((element) =>
    element.addEventListener("click", () => {
      contactOverlay.style.opacity = "0";
      contactOverlay.style.pointerEvents = "none";
      contactForm.style.opacity = "0";
      contactForm.style.transform = "translateY(100vh)";
    }),
  );

  contactMessage.addEventListener("input", (ev) => {
    contactMessageCharacterCount.innerText = `${contactMessage.value.length} / 225`;
  });

  contactForm.classList.remove("hidden");
  contactForm.classList.add("flex");
};

const setupTransitions = () => {
  const body = document.querySelector(".preload");

  setTimeout(() => body.classList.remove("preload"), 100);
};

document.addEventListener("DOMContentLoaded", () => {
  setupTransitions();
  setupMenu();
  setupContactForm();
});
