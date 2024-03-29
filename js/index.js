const passwordNavLink = document.getElementById("password-nav-link"),
    qrCodeNavLink = document.getElementById("qr-code-nav-link"),
    uuidNavLink = document.getElementById("uuid-nav-link"),
    numberNavLink = document.getElementById("number-nav-link"),

    mainDiv = document.getElementById("main-div"),

    passwordMainDiv = document.getElementById("password-main-div"),
    passwordInfoDiv = document.getElementById("password-main-info-div"),
    qrCodeMainDiv = document.getElementById("qr-code-main-div"),
    uuidMainDiv = document.getElementById("uuid-main-div"),
    numberMainDiv = document.getElementById("number-main-div");

const icon = document.querySelector('.icon-1');
const arrow = document.querySelector('.arrow-1');;

passwordNavLink.addEventListener("click", () => {
    mainDiv.hidden = true;
    passwordMainDiv.hidden = false;
    passwordInfoDiv.hidden = false;
    qrCodeMainDiv.hidden = true;
    uuidMainDiv.hidden = true;
    numberMainDiv.hidden = true;
});

qrCodeNavLink.addEventListener("click", () => {
    mainDiv.hidden = true;
    passwordMainDiv.hidden = true;
    passwordInfoDiv.hidden = true;
    qrCodeMainDiv.hidden = false;
    uuidMainDiv.hidden = true;
    numberMainDiv.hidden = true;
});

uuidNavLink.addEventListener("click", () => {
    mainDiv.hidden = true;
    passwordMainDiv.hidden = true;
    passwordInfoDiv.hidden = true;
    qrCodeMainDiv.hidden = true;
    uuidMainDiv.hidden = false;
    numberMainDiv.hidden = true;
});

numberNavLink.addEventListener("click", () => {
    mainDiv.hidden = true;
    passwordMainDiv.hidden = true;
    passwordInfoDiv.hidden = true;
    qrCodeMainDiv.hidden = true;
    uuidMainDiv.hidden = true;
    numberMainDiv.hidden = false;
});

window.addEventListener("load", () => {
    let href = window.location.href;
    let hash = window.location.hash;
    let origin = window.location.origin;

    if (hash === "#/password") {
        mainDiv.hidden = true;
        passwordMainDiv.hidden = false;
        passwordInfoDiv.hidden = false;
        qrCodeMainDiv.hidden = true;
        uuidMainDiv.hidden = true;
        numberMainDiv.hidden = true;
    } else if (hash === "#/qr-code") {
        mainDiv.hidden = true;
        passwordMainDiv.hidden = true;
        passwordInfoDiv.hidden = true;
        qrCodeMainDiv.hidden = false;
        uuidMainDiv.hidden = true;
        numberMainDiv.hidden = true;
    } else if (hash === "#/uuid") {
        mainDiv.hidden = true;
        passwordMainDiv.hidden = true;
        passwordInfoDiv.hidden = true;
        qrCodeMainDiv.hidden = true;
        uuidMainDiv.hidden = false;
        numberMainDiv.hidden = true;
    } else if (hash === "#/number") {
        mainDiv.hidden = true;
        passwordMainDiv.hidden = true;
        passwordInfoDiv.hidden = true;
        qrCodeMainDiv.hidden = true;
        uuidMainDiv.hidden = true;
        numberMainDiv.hidden = false;
    } else if (href === origin || href === origin + "/") {
        mainDiv.hidden = false;
        passwordMainDiv.hidden = true;
        passwordInfoDiv.hidden = true;
        qrCodeMainDiv.hidden = true;
        uuidMainDiv.hidden = true;
        numberMainDiv.hidden = true;
    } else {
        
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
