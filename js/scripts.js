let menu = document.querySelector('nav ul');
let menuBar = document.querySelector('nav .menu-icon');
let iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click', function(){

    if (iconMenu.getAttribute("src") == 'image/menu.png'){
        iconMenu.setAttribute("src", "image/close.png")
    }else {
        iconMenu.setAttribute("src", "image/menu.png")
    }

    menu.classList.toggle('active');
});