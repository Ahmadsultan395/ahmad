document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll(".animate-from-left");
    const paragraphs = document.querySelectorAll(".animate-from-right");
    const buttons = document.querySelectorAll(".animate-from-right");

    headings.forEach((heading, index) => {
        setTimeout(() => {
            heading.style.animation = "slideFromLeft 1s both";
        }, 500 * index);
    });

    paragraphs.forEach((paragraph, index) => {
        setTimeout(() => {
            paragraph.style.animation = "slideFromRight 1s both";
        }, 500 * index);
    });

    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.style.animation = "slideFromRight 1s both";
        }, 500 * index);
    });
});
