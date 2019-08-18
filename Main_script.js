function handleClick(e) {
    if(e.target.classList.contains('burger_button') || e.target.classList.contains('burger')) {
        const footer_menu = document.querySelector('.footer_menu');
        footer_menu.classList.toggle('footer_menu_activ');
    }

    if(e.target.classList.contains('button_range')) {

    }
}

document.addEventListener('click', handleClick);
document.addEventListener('touch', handleClick);

const container = document.querySelector('.range_container');
const range = document.querySelector('.button_range');
let shiftX = null;
let difference = null;
let rangeX = null;
let containerValueCost = document.querySelector('.end_value');


console.dir(range)
function movRange(event){
    shiftX = event.pageX || event.touches[0].pageX;
    let x = shiftX-container.getBoundingClientRect().left-difference;
    if(x < 0) {
        x = 0;
    }

    if(x > container.getBoundingClientRect().width) {
        x = container.getBoundingClientRect().width;
    }
    range.style.left =`${x}px`;
    let max = 3000;
    let min = 0;
    containerValueCost.innerHTML = Math.round((max/100)*((range.offsetLeft/container.getBoundingClientRect().width)*100));
}


function mouhtMoveAdd(event) {
    rangeX = range.getBoundingClientRect().left;
    shiftX = event.pageX || event.touches[0].pageX;
    difference = shiftX - rangeX;
    document.addEventListener('mousemove', movRange);
    document.addEventListener('touchmove', movRange);
}

function mouhtMoveRemove() {
    document.removeEventListener('mousemove', movRange);
    document.removeEventListener('touchmove', movRange);
}

range.addEventListener('mousedown', mouhtMoveAdd);
range.addEventListener('touchstart', mouhtMoveAdd);

document.addEventListener('mouseup', mouhtMoveRemove);
document.addEventListener('touchend', mouhtMoveRemove);