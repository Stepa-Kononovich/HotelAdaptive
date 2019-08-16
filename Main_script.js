function handleClick(e) {
    if(e.target.classList.contains('burger_button') || e.target.classList.contains('burger')) {
        const footer_menu = document.querySelector('.footer_menu');
        footer_menu.classList.toggle('footer_menu_activ');
    }
}

document.addEventListener('click', handleClick);
document.addEventListener('touch', handleClick);
