function renderImages() {
  let contentRef = document.getElementById("photos_div");

  for (let imgIndex = 0; imgIndex < images.length; imgIndex++) {
    contentRef.innerHTML += getImagesHTML(imgIndex);
  }
}
function closeDialog() {
  document.getElementById("overlay").style.display = "none";
}

function openDialog() {
  document.getElementById("overlay").style.display = "flex";
  renderDialogContent();
}

function renderDialogContent() {
  let dialogRef = document.getElementById("dialog");
  dialogRef.innerHTML += getDialogTemplate();
}
