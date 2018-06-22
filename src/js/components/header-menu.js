var btnNav = $('.js-btn-nav');
var header = $('.header');
var body = $('body');

btnNav.click(function() {
  if (!header.hasClass('is-open')) {
		 header.addClass('is-open');
		 body.addClass('is-open');

  } else {
    header.removeClass('is-open');
    body.removeClass('is-open');
  }
 
});
