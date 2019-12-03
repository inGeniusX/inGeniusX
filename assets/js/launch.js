var i = 0;
var txt = 'COMING SOON!';
var speed = 200;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("comingsoon").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


window.onload = typeWriter()