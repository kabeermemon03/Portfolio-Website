const phrases = ["Web Developer", "Video Editor", "Graphic Designer"];
let i = 0;
const textElement = document.getElementById("changing-text");

function changeText() {
  textElement.style.opacity = 0;
  textElement.style.transform = "scale(0.95)";

  setTimeout(() => {
    i = (i + 1) % phrases.length;
    textElement.textContent = phrases[i];
    textElement.style.opacity = 1;
    textElement.style.transform = "scale(1)";
  }, 400);
}

setInterval(changeText, 2500);

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Optional: close menu on link click (mobile UX)
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});
