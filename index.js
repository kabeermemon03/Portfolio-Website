const phrases = ["Web Developer","Video Editor","Graphic Designer"];
let i = 0;
const textElement = document.getElementById("changing-text");

function changeText(){
    textElement.style.opacity = 0;
    textElement.style.transform = "scale(0.95)";

setTimeout(() => {
      textElement.textContent = phrases[i];

      textElement.style.opacity = 1;
      textElement.style.transform = "scale(1)";

      i = (i + 1) % phrases.length;
    }, 400); 
  }

  setInterval(changeText, 2500);
  changeText(); 
