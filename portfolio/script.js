// Typewriter effect
const roles = ["Web Developers", "DSA Enthusiasts", "System Programmers"];
let i = 0, j = 0, isDeleting = false, current = "", typingSpeed = 100;

function type() {
  const typingElement = document.getElementById("typing");
  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      current = roles[i].substring(0, j++);
    } else if (isDeleting && j > 0) {
      current = roles[i].substring(0, --j);
    }

    typingElement.innerHTML = current;

    if (!isDeleting && j === roles[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

window.onload = type;
