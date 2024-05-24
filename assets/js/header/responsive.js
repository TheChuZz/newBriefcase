const buttonMenu = document.getElementById('btnMenu');
const buttonClose = document.getElementById('btnClouse');
const menuMovil = document.getElementById('linksMenuHeader');

function Responsive (){
    const widthDisplay = window.innerWidth;
    const widthLimit = 911;

    if (widthDisplay > widthLimit){
        buttonMenu.style.visibility = 'hidden';
    } else {
        buttonMenu.style.visibility = 'visible';
    }

    if (widthDisplay < widthLimit){
        menuMovil.style.visibility = 'hidden';
    } else {
        menuMovil.style.visibility = 'visible';
    }
}

Responsive();
window.addEventListener('resize', Responsive);
