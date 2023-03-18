const menuButton = document.querySelector("#menu-toggle");
// show-full-menu
const menu = document.querySelector(".menu");
menuButton.addEventListener("click", () => {
    menu.classList.toggle("show-full-menu");
})