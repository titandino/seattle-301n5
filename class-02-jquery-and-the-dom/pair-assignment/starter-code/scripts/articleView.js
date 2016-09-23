'use strict';

var articleView = {};

articleView.toggleNavDisplay = function() {
  $('icon-menu').on('click', function() {
    $('main-nav ul').toggle(500);
  });
  // DONE: if you want a challenge, write an event handler to toggle the display property of the nav menu.
  // hint: create a 'hidden' class that can be applied to or removed from the nav ul
};

articleView.toggleNavDisplay();
