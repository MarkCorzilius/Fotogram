function renderImages() {
  let contentRef = document.getElementById("photos_div");

  for (let imgIndex = 0; imgIndex < images.length; imgIndex++) {
    contentRef.innerHTML += getImagesHTML(imgIndex);
  }
}
function closeDialog() {
  document.getElementById("overlay").style.display = "none";
}

function openDialog(dialogIndex) {
  document.getElementById("overlay").style.display = "flex";
  renderDialogContent(dialogIndex);
}

function renderDialogContent(dialogIndex) {
  let dialogRef = document.getElementById("dialog");
  dialogRef.innerHTML = getDialogTemplate(dialogIndex);
}

function switchDialogLeft(dialogIndex) {
  if (dialogIndex == 0) {
    openDialog(images.length - 1);
  } else openDialog(dialogIndex - 1);
}

function switchDialogRight(dialogIndex) {
  if (dialogIndex == images.length - 1) {
    openDialog(0);
  } else openDialog(dialogIndex + 1);
}

document.addEventListener("DOMContentLoaded", () => {
  const closingButton = document.getElementById("closeDialogButton");
  if (closingButton) {
    closingButton.addEventListener(
      "mouseover",
      () => (closingButton.src = "./assets/img/closeButtonHovered.png")
    );
    closingButton.addEventListener(
      "mouseout",
      () => (closingButton.src = "./assets/img/closeButton.png")
    );
  }
});
