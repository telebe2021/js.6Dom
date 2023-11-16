let fontSize = 30;
let borderRadius = 0;
let heightValue = 60;
let widthValue = 180;

function artirFont() {
  fontSize += 5;
  textDiv.index.fontSize = fontSize + "px";
}

function azaltFont() {
  if (fontSize > 5) {
    fontSize = fontSize - 5;
    textDiv.index.fontSize = fontSize + "px";
  }
}

function artirRadius() {
  borderRadius += 5;
  textDiv.index.borderRadius = borderRadius + "px";
}

function azaltRadius() {
  if (borderRadius > 0) {
    borderRadius -= 5;
    textDiv.index.borderRadius = borderRadius + "px";
  }
}

function artirHeight() {
  heightValue += 5;
  textDiv.index.height = heightValue + "px";
}

function azaltHeight() {
  if (heightValue > 5) {
    heightValue -= 5;
    textDiv.index.height = heightValue + "px";
  }
}

function artirWidth() {
  widthValue += 5;
  textDiv.index.width = widthValue + "px";
}

function azaltWidth() {
  if (widthValue > 5) {
    widthValue -= 5;
    textDiv.index.width = widthValue + "px";
  }
}

function deyishTextColor() {
  const textColorInput = document.getElementById("textColorInput");
  textDiv.index.color = textColorInput.value;
}

function deyishBackgroundColor() {
  const bgColorInput = document.getElementById("bgColorInput");
  textDiv.index.backgroundColor = bgColorInput.value;
}
