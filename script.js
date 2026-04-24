const images = document.querySelectorAll('.images img');
window.addEventListener('scroll', () => {
    images[0].computedStyleMap.top = "-" + (window.scrollY / 2.5) + "px";
    images[1].computedStyleMap.top = "-" + (window.scrollY / 3.5) + "px";
    images[2].computedStyleMap.top = "-" + (window.scrollY / 4) + "px";
    images[3].computedStyleMap.top = "-" + (window.scrollY / 5) + "px";
    images[4].computedStyleMap.top = "-" + (window.scrollY / 6) + "px";
    images[5].computedStyleMap.top = "-" + (window.scrollY / 7) + "px";
    images[6].computedStyleMap.top = "-" + (window.scrollY / 9) + "px";
});