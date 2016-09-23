'use strict';

// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.toggleNavDisplay = function() {
  $('.icon-menu').on('click', function(e) {
    e.preventDefault();
    $('.main-nav ul').toggle(450);
  });
};

articleView.toggleNavDisplay();
