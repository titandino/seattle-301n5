'use strict';

var articleView = {};

articleView.toggleNavDisplay = function() {
  // #DONE: if you want a challenge, write an event handler to toggle the display property of the nav menu.
  // hint: create a 'hidden' class that can be applied to or removed from the nav ul
  $('.icon-menu').on('click', function(e) {
    var List = $('.main-nav ul');
    List.toggle();
    // if( List.hasClass('shown')){
    //   List.removeClass('shown');
    // } else {
    //   List.addClass('shown');
    // }
  });
};

articleView.toggleNavDisplay();
