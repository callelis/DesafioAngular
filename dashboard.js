const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

if (hamburgerBtn && sidebar && overlay) {
  hamburgerBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
}