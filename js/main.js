$(function() {
  
// bxSlider functionality
  $('.bxslider').bxSlider({
    pager: true,
    pagerType: 'short',
    adaptiveHeight: true,
    mode: 'fade'
  });

// plus sign button and bx-slider show and hide.
  $('.buttonMain').on("click", (e) => {
  e.preventDefault();
  $('.buttonMain').toggleClass('buttonMainAfter');
  $('#sliderContainer').toggleClass('sliderContainerToggle');
  })

});

