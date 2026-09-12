function changeColour() {
  var colours = ["red", "blue", "green", "yellow", "purple", "orange"];
  var randomNumber = Math.floor(Math.random() * colours.length);

  document.body.style.backgroundColor = colours[randomNumber];
}

changeColour();