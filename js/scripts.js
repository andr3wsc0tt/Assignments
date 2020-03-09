var myNav = document.querySelector('nav');
var myNavButton = document.querySelector('.menu-button');

myNavButton.addEventListener('click', function(event){
    event.preventDefault();

    myNav.classList.toggle('nav-open');
})