var accordionWrap = $('.js-accordion-wrap');

accordionWrap.each(function() {
  
  var _this = $(this);
  var accordionBtn = _this.find('.js-accordion-btn');
  var accordionBlock = _this.find('.js-accordion-block');
  var allContentBlocks = _this.find('.js-hide-text');

  accordionBtn.on('click', function() {
    var parent = $(this).parents('.js-accordion-block');
    var contentBlock = parent.find('.js-hide-text');
    if (!parent.hasClass('is-active')) {
      accordionBlock.removeClass('is-active');
      parent.addClass('is-active');
      allContentBlocks.slideUp(350);
      contentBlock.slideDown(350);
    } else {
      parent.removeClass('is-active');
      contentBlock.slideUp(350);
    }
  });
});
