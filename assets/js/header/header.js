const buttonMenu = document.getElementById('btnMenu');
const buttonClose = document.getElementById('btnClouse');
const menuMovil = document.getElementById('linksMenuHeader');

class Header {
    constructor() {
        buttonMenu.addEventListener('click', this.clickBtnMenu.bind(this));
        buttonClose.addEventListener('click', this.clickBtnClose.bind(this));
    }

    clickBtnMenu() {
        if (menuMovil.style.visibility === 'hidden') {
            menuMovil.style.visibility = 'visible';
            buttonClose.style.visibility = 'visible';
        } else {
            menuMovil.style.visibility = 'hidden';
        }
    }
    clickBtnClose() {
        menuMovil.style.visibility = 'hidden';
        buttonClose.style.visibility = 'hidden';
    }
}

export default new Header();