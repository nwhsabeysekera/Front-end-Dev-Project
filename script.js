document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('.inside-container ul');

    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});
