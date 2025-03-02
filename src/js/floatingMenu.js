document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const closeMenu = document.getElementById("closeMenu");
    const floatingMenu = document.getElementById("floatingMenu");

    if (hamburger && closeMenu && floatingMenu) {
        hamburger.addEventListener("click", function () {
            floatingMenu.classList.remove("translate-x-full");
        });

        closeMenu.addEventListener("click", function () {
            floatingMenu.classList.add("translate-x-full");
        });
    }
});