let section = document.querySelector(".counter");
let spans = document.querySelectorAll(".progress span");


window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 300) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};