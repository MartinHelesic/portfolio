import $ from 'jquery'

export default scrollTo => {
  $("a[href^='#']").on("click", function(e) {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 90
    }, 1000);
    return false;
  });
  
  if ($(window.location.hash).length > 1) {
    $("html, body").animate({
      scrollTop: $(window.location.hash).offset().top - 90
    }, 1000);
  }
}
