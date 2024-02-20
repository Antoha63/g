const passwordNavLink = document.getElementById("password-nav-link"),
    qrCodeNavLink = document.getElementById("qr-code-nav-link"),
    uuidNavLink = document.getElementById("uuid-nav-link"),
    numberNavLink = document.getElementById("number-nav-link"),

    passwordMainDiv = document.getElementById("password-main-div"),
    qrCodeMainDiv = document.getElementById("qr-code-main-div"),
    uuidMainDiv = document.getElementById("uuid-main-div"),
    numberMainDiv = document.getElementById("number-main-div");

passwordNavLink.addEventListener("click", () => {
    passwordMainDiv.hidden = false;
    qrCodeMainDiv.hidden = true;
    uuidMainDiv.hidden = true;
    numberMainDiv.hidden = true;
});

qrCodeNavLink.addEventListener("click", () => {
    passwordMainDiv.hidden = true;
    qrCodeMainDiv.hidden = false;
    uuidMainDiv.hidden = true;
    numberMainDiv.hidden = true;
});

uuidNavLink.addEventListener("click", () => {
    passwordMainDiv.hidden = true;
    qrCodeMainDiv.hidden = true;
    uuidMainDiv.hidden = false;
    numberMainDiv.hidden = true;
});

numberNavLink.addEventListener("click", () => {
    passwordMainDiv.hidden = true;
    qrCodeMainDiv.hidden = true;
    uuidMainDiv.hidden = true;
    numberMainDiv.hidden = false;
});

window.addEventListener("load", () => {
    let href = window.location.href;
    if (href.indexOf("/password") > -1) {
        passwordMainDiv.hidden = false;
        qrCodeMainDiv.hidden = true;
        uuidMainDiv.hidden = true;
        numberMainDiv.hidden = true;
    } else if (href.indexOf("/qr-code") > -1) {
        passwordMainDiv.hidden = true;
        qrCodeMainDiv.hidden = false;
        uuidMainDiv.hidden = true;
        numberMainDiv.hidden = true;
    } else if (href.indexOf("/uuid") > -1) {
        passwordMainDiv.hidden = true;
        qrCodeMainDiv.hidden = true;
        uuidMainDiv.hidden = false;
        numberMainDiv.hidden = true;
    } else if (href.indexOf("/number") > -1) {
        passwordMainDiv.hidden = true;
        qrCodeMainDiv.hidden = true;
        uuidMainDiv.hidden = true;
        numberMainDiv.hidden = false;
    }
});
