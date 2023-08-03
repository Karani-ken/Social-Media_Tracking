const toggleButton = document.getElementById('theme-toggle-button');
const root = document.documentElement;

toggleButton.addEventListener('click', () => {
  root.classList.toggle('dark-theme');
  root.classList.toggle('light-theme');
});
