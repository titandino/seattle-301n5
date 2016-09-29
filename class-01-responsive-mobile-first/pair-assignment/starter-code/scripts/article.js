'use strict';

var articles = [];

function Article (opts) {
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone(); //class next to element selector article.template
  $newArticle.removeClass('template');
  if (!this.publishedOn) {
    $newArticle.addClass('draft');
  }
  $newArticle.attr('data-category', this.category);
  $newArticle.attr('data-author', this.author);
//Finding .byline a
  $newArticle.find('.byline a').html(this.author);
//Finding .byline a
  $newArticle.find('.byline a').attr('href', this.authorUrl);
//Getting the zero index of that array
  $newArticle.find('h1:first').html(this.title); //.textContent = this.title
//Loocking for the class .article-body and changing it to html
  $newArticle.find('.article-body').html(this.body); //.innerHTML = this body
//adding the attribute of day time
  $newArticle.find('time[pubdate]').attr('datetime', this.publishedOn);
// Grabbing time and putting the attribute of title
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
// Grabbing time and adding to HTML and tying in a new date.
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};
//Going through an array and picking which one is newer and selecting the new one
rawData.sort(function(a,b) {
//
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});
//ele represents each item at an index
rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){

  $('#articles').append(a.toHtml());
});
