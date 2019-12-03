var x = 0;
var text = 'INGENIUS X';
var speed = 150;

function ingeniusAnimation() {
  if (x < text.length) {
    document.getElementById("inGeniusX").innerHTML += text.charAt(x);
    x++;
    setTimeout(ingeniusAnimation, speed);
  }
}


window.onload = ingeniusAnimation()