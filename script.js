const menuButton = document.querySelector(".menu-button");
const sideMenu = document.querySelector(".side-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const menuLinks = document.querySelectorAll(".side-menu a");

function openMenu() {
    sideMenu.classList.add("open");
    menuOverlay.classList.add("show");
    menuButton.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
}

function closeMenu() {
    sideMenu.classList.remove("open");
    menuOverlay.classList.remove("show");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
}

if (menuButton) {
    menuButton.addEventListener("click", openMenu);
}

if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenu);
}

menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});
