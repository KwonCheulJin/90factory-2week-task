const toggleBtn = document.querySelector('.navbar-toggleBtn');
console.log(toggleBtn);
const menu = document.querySelector('.navbar-menu');
const icons = document.querySelector('.navbar-login');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});