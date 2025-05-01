const toggleButton = document.getElementById('toggle-button');
const sidebar = document.querySelector('.sidebar');
const sidebarMenu = document.getElementById('sidebar-menu');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  toggleButton.setAttribute('aria-expanded', sidebar.classList.contains('open'));
});

document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
    sidebar.classList.remove('open');
  }
});