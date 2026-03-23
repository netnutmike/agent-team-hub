// Agent Team Hub - main.js
const yearSpan = document.querySelector('[data-year]');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
