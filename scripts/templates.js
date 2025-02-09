function getImagesHTML(dialogIndex) {
  return `<img onclick="openDialog(${dialogIndex})" class="content_imgs" src="./assets/img/${images[dialogIndex]}" alt="img${dialogIndex}">`;
}

function getDialogTemplate(dialogIndex) {
  return `<div class="dialogHeader_and_img">
        <div class="dialog_header">
          <div class="img_name">${imageNames[dialogIndex]}</div>
          <img id="closeDialogButton"
            onclick="closeDialog()"
            src="./assets/img/closeButton.png"
            alt="close"
          />
        </div>
        <div class="dialogImg_and_imgInfo">
          <img
            id="dialog_img"
            src="./assets/img/${images[dialogIndex]}"
            alt="img"
          />
          <p id="img_info">${imageDescriptions[dialogIndex]}</p>
        </div>
      </div>
      <div class="dialog_footer">
        <img onclick="switchDialogLeft(${dialogIndex})" src="./assets/icons/leftNotHovered.png" alt="left" />
        <p>${dialogIndex + 1}/12</p>
        <img onclick="switchDialogRight(${dialogIndex})" src="./assets/icons/rightNotHovered.png" alt="right" />
      </div>`;
}
