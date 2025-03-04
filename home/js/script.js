

window.addEventListener('scroll', function () {
    const section1 = document.querySelector('.section1');
    const section2 = document.querySelector('.section2');

    const section1Bottom = section1.getBoundingClientRect().bottom;
    const section2Top = section2.getBoundingClientRect().top;

    if (section1Bottom < window.innerHeight / 2) {
        // When Section 2 is in view, switch to background2
        document.body.classList.add('section2-triggered');
    } else {
        // When scrolling back up, show background1 again
        document.body.classList.remove('section2-triggered');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menuContainer = document.querySelector(".menu-container");

    menuButton.addEventListener("click", function () {
        menuContainer.classList.toggle("open");
        menuButton.classList.toggle("active");
    });
});
