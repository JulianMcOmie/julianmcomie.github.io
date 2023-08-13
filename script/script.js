// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

document.addEventListener('click', function(event) {
    var isClickInsideNavbar = document.querySelector('.navbar').contains(event.target);
    var isNavbarToggler = event.target.classList.contains('navbar-toggler');
    var isNavbarOpen = document.querySelector('.navbar-collapse').classList.contains('show'); // Change 'show' to 'showing' if 'show' doesn't work

    if (!isClickInsideNavbar && isNavbarOpen && !isNavbarToggler) {
        document.querySelector('.navbar-toggler').click();
    }
});

