var main = function() {
  /* Push the body and the nav over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push it back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};
$(document).ready(main);

/*events*/

var main = function() {
$('.article').click(function() {
  $('.article').removeClass('current');
  $('.description').hide();

  $(this).addClass('current');
  $(this).children('.description').show();
});
}
$(document).ready(main);

/*gallery*/

$(document).ready(function(){
  $('.img-zoom').hover(function() {
      $(this).addClass('transition');

  }, function() {
      $(this).removeClass('transition');
  });
});
