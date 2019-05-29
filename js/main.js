// Make it rain!
//when user hovers over star
//star to change to darker color
//on click addclass fill in star color
//when user clicks on a star
//$(this).previousSiblings().addclass filled
//.prev = previous
$('nav a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body, html').animate({
    scrollTop: targetOffset
  }, 600);
});

$('button').on('click', function() {
  $(this).addClass('wiggly');
});