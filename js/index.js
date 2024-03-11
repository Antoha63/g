const passwordNavLink = document.getElementById("password-nav-link"),
    qrCodeNavLink = document.getElementById("qr-code-nav-link"),
    uuidNavLink = document.getElementById("uuid-nav-link"),
    numberNavLink = document.getElementById("number-nav-link"),

    mainDiv = document.getElementById("main-div"),

    passwordMainDiv = document.getElementById("password-main-div"),
    qrCodeMainDiv = document.getElementById("qr-code-main-div"),
    uuidMainDiv = document.getElementById("uuid-main-div"),
    numberMainDiv = document.getElementById("number-main-div");

const icon = document.querySelector('.icon-1');
const arrow = document.querySelector('.arrow-1');;

passwordNavLink.addEventListener("click", () => {
    mainDiv.hidden = true;
    passwordMainDiv.hidden = false;
    qrCodeMainDiv.hidden = true;
    uuidMainDiv.hidden = true;
    numberMainDiv.hidden = true;
});

qrCodeNavLink.addEventListener("click", () => {
    mainDiv.hidden = true;
    passwordMainDiv.hidden = true;
    qrCodeMainDiv.hidden = false;
    uuidMainDiv.hidden = true;
    numberMainDiv.hidden = true;
});

uuidNavLink.addEventListener("click", () => {
    mainDiv.hidden = true;
    passwordMainDiv.hidden = true;
    qrCodeMainDiv.hidden = true;
    uuidMainDiv.hidden = false;
    numberMainDiv.hidden = true;
});

numberNavLink.addEventListener("click", () => {
    mainDiv.hidden = true;
    passwordMainDiv.hidden = true;
    qrCodeMainDiv.hidden = true;
    uuidMainDiv.hidden = true;
    numberMainDiv.hidden = false;
});

window.addEventListener("load", () => {
    let href = window.location.href;
    if (href.indexOf("/password") > -1) {
        mainDiv.hidden = true;
        passwordMainDiv.hidden = false;
        qrCodeMainDiv.hidden = true;
        uuidMainDiv.hidden = true;
        numberMainDiv.hidden = true;
    } else if (href.indexOf("/qr-code") > -1) {
        mainDiv.hidden = true;
        passwordMainDiv.hidden = true;
        qrCodeMainDiv.hidden = false;
        uuidMainDiv.hidden = true;
        numberMainDiv.hidden = true;
    } else if (href.indexOf("/uuid") > -1) {
        mainDiv.hidden = true;
        passwordMainDiv.hidden = true;
        qrCodeMainDiv.hidden = true;
        uuidMainDiv.hidden = false;
        numberMainDiv.hidden = true;
    } else if (href.indexOf("/number") > -1) {
        mainDiv.hidden = true;
        passwordMainDiv.hidden = true;
        qrCodeMainDiv.hidden = true;
        uuidMainDiv.hidden = true;
        numberMainDiv.hidden = false;
    } else {
        mainDiv.hidden = false;
        passwordMainDiv.hidden = true;
        qrCodeMainDiv.hidden = true;
        uuidMainDiv.hidden = true;
        numberMainDiv.hidden = true;
    }

    arrow.animate([
        { left: '0' },
        { left: '10px' },
        { left: '0' }
    ], {
        duration: 700,
        iterations: Infinity
    });
});
