let fontSize = 30;
let borderRadius = 0;
let heightValue = 60;
let widthValue = 180;

const textDiv = document.getElementById("textDiv");

function artirFont() {
  fontSize += 5;
  textDiv.style.fontSize = fontSize + "px";
}

function azaltFont() {
  if (fontSize > 5) {
    fontSize -= 5;
    textDiv.style.fontSize = fontSize + "px";
  }
}

function artirRadius() {
  borderRadius += 5;
  textDiv.style.borderRadius = borderRadius + "px";
}

function azaltRadius() {
  if (borderRadius > 0) {
    borderRadius -= 5;
    textDiv.style.borderRadius = borderRadius + "px";
  }
}

function artirHeight() {
  heightValue += 5;
  textDiv.style.height = heightValue + "px";
}

function azaltHeight() {
  if (heightValue > 5) {
    heightValue -= 5;
    textDiv.style.height = heightValue + "px";
  }
}

function artirWidth() {
  widthValue += 5;
  textDiv.style.width = widthValue + "px";
}

function azaltWidth() {
  if (widthValue > 5) {
    widthValue -= 5;
    textDiv.style.width = widthValue + "px";
  }
}

function deyisTextColor() {
  const textColorInput = document.getElementById("textColorInput");
  textDiv.style.color = textColorInput.value;
}

function deyisBackgroundColor() {
  const bgColorInput = document.getElementById("bgColorInput");
  textDiv.style.backgroundColor = bgColorInput.value;
}
