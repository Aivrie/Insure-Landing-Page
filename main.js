// GET ELEMENTS
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');

// EVENT LISTENER
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// FUNCTION

function show() {
    // console.log('fish');
    menu.style.display ='block';
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block';
}

function close(){
    // console.log('fish');
    menu.style.display ='none';
    openIcon.style.display = 'block';
    closeIcon.style.display = 'none';
}