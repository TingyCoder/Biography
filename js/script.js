



const sections = document.querySelectorAll('.main');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

function updateSections(index) {
  sections.forEach((section, idx) => {
    section.classList.toggle('active', idx === index);
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sections.length;
  updateSections(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + sections.length) % sections.length;
  updateSections(currentIndex);
});