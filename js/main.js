var menu = document.getElementById("menu-id");

function menuOpen() {
    menu.classList.remove("menu-slide-out");
    menu.classList.add("menu-slide-in");
}

function menuClose() {
    menu.classList.remove("menu-slide-in");
    menu.classList.add("menu-slide-out");
}