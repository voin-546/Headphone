$('.hero__scroll').on('click', function(e) {
    $('html, body').animate({
        scrollTop: $(window).height()
    }, 1200);
});
let header = document.querySelector("header");
let body = document.querySelector("body");
header.addEventListener("click", () => {
    let header = document.querySelector("header");
    header.classList.toggle("show");
});
AOS.init({
    duration: 1200,
})