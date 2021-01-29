const dropCheckbox = document.querySelector('#dropbar');
const dropIcon = document.querySelector('#drop-icon');
let isExit = false;

dropCheckbox.addEventListener('input', function () {
    // Image.
    let image = isExit ? "images/icon-hamburger.svg" : "images/icon-close.svg";
    dropIcon.setAttribute('src', image);
    isExit = !isExit;
    //Disable scroll from body.
    document.querySelector('body').classList.toggle('scroll-disable');
})