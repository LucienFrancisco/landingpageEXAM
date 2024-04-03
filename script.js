const menuItems = document.querySelectorAll('nav ul li a');
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        menuItem.classList.toggle('active');
    });
});