let menuElement = document.querySelector('.menu-icon');
menuElement.onclick = function () {
    const element = document.querySelector('.navigation');
    if (element.style.display == 'flex')
        element.style.display = 'none';
    else {
        element.style.display = 'flex';
    }
}

