const arrow = document.querySelector('.arrow-1');

window.addEventListener("load", () => {
    arrow.animate([
        { left: '0' },
        { left: '10px' },
        { left: '0' }
    ], {
        duration: 700,
        iterations: Infinity
    });
});
