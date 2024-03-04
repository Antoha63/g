/*const wrapper = document.getElementById("qr-code-main-div"),
    qrInput = document.getElementById("qr-code-input"),
    generateBtn = document.getElementById("qr-code-button"),
    qrImg = document.getElementById("qr-code-img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});*/

const textEl = document.querySelector('#data');
const sizeEl = document.querySelector('#qr-code-range');
const logoEl = document.querySelector('#logo');
const clearEl = document.querySelector('#qr-code-clear-button');
const marginEl = document.querySelector('#qr-code-margin-range');
const dotEl = document.querySelector('#dot');
const dotColorEl1 = document.querySelector('#dot-color-1');
const dotColorEl2 = document.querySelector('#dot-color-2');
const bgEl = document.querySelector('#bg-color');
const dlEl = document.querySelector('#btn-dl');

const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");
const options = optionMenu.querySelectorAll(".option");
const sBtn_text = optionMenu.querySelector(".sBtn-text");

const mainImage = document.getElementById("main-image");

let op = {
    width: 300,
    height: 300,
    type: "png",
    data: "https://www.google.com",
    image: "Images/qr/telegram.png",
    dotsOptions: {
        color: "#4267b2",
        type: "rounded",
        gradient: {
            "type": "linear",
            "colorStops": [
                {
                    "offset": 0,
                    "color": "#000000"
                },
                {
                    "offset": 1,
                    "color": "#000"
                }
            ]
        }
    },
    backgroundOptions: {
        color: "#fff"
    }
};

render();

sizeEl.addEventListener('input', e => {
    op.width = 300;
    op.height = 300;
    render();
});

textEl.addEventListener('keyup', e => {
    if(e.target.value == "") {
        op.data = "https://www.google.com";
    } else {
        op.data = e.target.value;
    }
    render();
});

marginEl.addEventListener('input', e => {
    let a1 = e.target.value / op.width;
    let a2 = e.target.value / op.height;
    if (a1 < 0.12 && a2 < 0.12) {
        op.imageOptions = { margin: e.target.value };
        render();
    }
});

dotEl.addEventListener('change', e => {
    op.dotsOptions.type = e.target.value;
    render();
});

dotColorEl1.addEventListener('input', e => {
    op.dotsOptions.gradient.colorStops[0].color = e.target.value;
    render();
});

dotColorEl2.addEventListener('input', e => {
    op.dotsOptions.gradient.colorStops[1].color = e.target.value;
    render();
});

bgEl.addEventListener('input', e => {
    op.backgroundOptions.color = e.target.value;
    render();
});

var qrCode;
function render() {
    op.width = sizeEl.value;
    op.height = sizeEl.value;
    qrCode = new QRCodeStyling(op);
    let canvasEl = document.getElementById('canvas');
    canvasEl.innerHTML = '';


    op.width = 300;
    op.height = 300;
    new QRCodeStyling(op).append(canvasEl);


    canvasEl.nextElementSibling.innerHTML = `${sizeEl.value}px x ${sizeEl.value}px`;
}

function browse() {
    logoEl.click();
}

logoEl.addEventListener('change', e => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
        op.image = reader.result;
        render();
    };
    reader.readAsDataURL(file);
});

clearEl.addEventListener('click', e => {
    logoEl.value = "";
    delete op.image;
    render();
});

dlEl.addEventListener('click', e => {
    qrCode.download({ name: 'qr', extention: 'svg' });
});

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        setImage(selectedOption);

        optionMenu.classList.remove("active");
    })
});

function setImage(selectedOption) {
    if (selectedOption == "Telegram") {
        op.image = "Images/qr/telegram.png";
        mainImage.src = "Images/qr/telegram.png";
    } else if(selectedOption == "Instagram") {
        op.image = "Images/qr/instagram1.png";
        mainImage.src = "Images/qr/instagram1.png";
    } else if(selectedOption == "Facebook") {
        op.image = "Images/qr/facebook.png";
        mainImage.src = "Images/qr/facebook.png";
    } else if(selectedOption == "Youtube") {
        op.image = "Images/qr/youtube.png";
        mainImage.src = "Images/qr/youtube.png";
    } else if(selectedOption == "Twitter") {
        op.image = "Images/qr/twitter.png";
        mainImage.src = "Images/qr/twitter.png";
    }
    else if(selectedOption == "WhatsApp") {
        op.image = "Images/qr/whatsapp.png";
        mainImage.src = "Images/qr/whatsapp.png";
    } else if(selectedOption == "TikTok") {
        op.image = "Images/qr/tiktok.png";
        mainImage.src = "Images/qr/tiktok.png";
    } else if(selectedOption == "Twitch") {
        op.image = "Images/qr/twitch.png";
        mainImage.src = "Images/qr/twitch.png";
    } else if(selectedOption == "GitHub") {
        op.image = "Images/qr/github.png";
        mainImage.src = "Images/qr/github.png";
    } else if(selectedOption == "VK") {
        op.image = "Images/qr/vk.png";
        mainImage.src = "Images/qr/vk.png";
    } else if(selectedOption == "LinkedIn") {
        op.image = "Images/qr/linkedin.png";
        mainImage.src = "Images/qr/linkedin.png";
    } else if(selectedOption == "Bitcoin") {
        op.image = "Images/qr/bitcoin.png";
        mainImage.src = "Images/qr/bitcoin.png";
    } else if(selectedOption == "Apple") {
        op.image = "Images/qr/apple.png";
        mainImage.src = "Images/qr/apple.png";
    } else if(selectedOption == "Android") {
        op.image = "Images/qr/android.png";
        mainImage.src = "Images/qr/android.png";
    } else if(selectedOption == "Windows") {
        op.image = "Images/qr/windows.png";
        mainImage.src = "Images/qr/windows.png";
    } else if(selectedOption == "Ozon") {
        op.image = "Images/qr/Ozon.png";
        mainImage.src = "Images/qr/Ozon.png";
    } else if(selectedOption == "Ozon-classic") {
        op.image = "Images/qr/Ozon1.png";
        mainImage.src = "Images/qr/Ozon1.png";
    } else if(selectedOption == "Wildberries") {
        op.image = "Images/qr/wb.png";
        mainImage.src = "Images/qr/wb.png";
    }
    
    render();
}
