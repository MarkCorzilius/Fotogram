function getImagesHTML(imgIndex) {
  return `<img onclick="openDialog(${imgIndex})" class="content_imgs" src="./assets/img/${images[imgIndex]}" alt="img${imgIndex}">`;
}

function getDialogTemplate(dialogIndex) {
  return `<div class="dialogHeader_and_img">
        <div class="dialog_header">
          <div class="img_name">${imageNames[dialogIndex]}</div>
          <img
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
        <img src="./assets/icons/leftNotHovered.png" alt="left" />
        <p>1/12</p>
        <img src="./assets/icons/rightNotHovered.png" alt="right" />
      </div>`;
}
