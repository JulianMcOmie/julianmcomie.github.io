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

$(window).scroll(function() {
  if ($(window).scrollTop() > 75) {
      $('#navBar').css("opacity", 0.3);
  }
  else {
      $('#navBar').css("opacity", 1);
  }
});

$(document).ready(function(){
  $('#navBar').live("mouseover", function () {
          $(this).css("opacity", 1);
          });

  $('#navBar').live("mouseleave", function () {
      if($(window).scrollTop() > 75) { // this here
          $(this).css("opacity", 0.3);
      }
  });

})