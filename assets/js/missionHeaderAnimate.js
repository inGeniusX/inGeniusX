var x = 0;
var text = 'Our Mission';
var speed = 200;

function typeWriterAnimation() {
  if (x < text.length) {
    document.getElementById("missionTitle").innerHTML += text.charAt(x);
    x++;
    setTimeout(typeWriterAnimation, speed);
  }
}


window.onload = typeWriterAnimation()