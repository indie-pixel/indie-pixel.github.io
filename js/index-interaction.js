$(document).ready(function () {
    // show nav when hovering the hamburger
    $(".hamburger-icon").mouseenter(function () {
        $(".main-navigation nav").show();
    });

    // hide nav when leaving the nav area (fixed selector)
    $(".main-navigation nav").mouseleave(function () {
        $(".main-navigation nav").hide();
    });

    /* change h1 text on hover — safely select after DOM ready */
    const header = document.querySelector('.header h1');
    if (header) {
        header.addEventListener("mouseenter", () => {
            header.textContent = "welcome";
        });

        header.addEventListener("mouseleave", () => {
            header.textContent = "indefatigable's lair";
        });
    }
});