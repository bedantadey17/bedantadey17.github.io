const modePreference = localStorage.getItem('darkMode');


if (modePreference === 'true') {
  document.body.classList.add('dark-mode');
}


const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});