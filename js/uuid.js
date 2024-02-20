const uuidInput = document.getElementById("uuid-result"),
  uuidCopyIcon = document.querySelector(".uuid-box .copy-icon"),
  uuidGenerateButton = document.getElementById("generate-uuid-button");

//this function will be called on, page reload, uuidGenerateButton clicked & rangeInput slide
const generateUuid = () => {
  uuidInput.innerText = crypto.randomUUID();
  uuidCopyIcon.classList.replace("uil-file-check-alt", "uil-copy"); //replace icon
};

//copy passInput's value on uuidCopyIcon click
uuidCopyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(uuidInput.innerText);
  uuidCopyIcon.classList.replace("uil-copy", "uil-file-check-alt"); //replace icon
});

generateUuid();
uuidGenerateButton.addEventListener("click", generateUuid);

/*const generateUuid = document.getElementById("generate-uuid");

generateUuid.addEventListener("click", () => {
  document.getElementById("uuid-result").innerText = crypto.randomUUID();
});*/




function downloadFile(count, content) {
  if (count > 0) {
    const element = document.createElement('a');
    const blob = new Blob([content], { type: 'plain/text' });

    const fileUrl = URL.createObjectURL(blob);

    let fileName = count + " random ";
    if (count == 1) {
      fileName = fileName + "UUID";
    } else {
      fileName = fileName + "UUIDs";
    }

    element.setAttribute('href', fileUrl);
    element.setAttribute('download', fileName);
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();

    document.body.removeChild(element);
  }
};

window.onload = () => {
  document.getElementById('download-uuid-button').
    addEventListener('click', e => {
      let count = document.getElementById('uuid-input').value;
      if (count) {
        let content = "";

        if (count > 0) {

          if(count > 1000) {
            count = 1000;
          }

          for (let step = 0; step < count; step++) {
            content = content + crypto.randomUUID() + "\n";
          }

          downloadFile(count, content);
        }
      }
    });
};
