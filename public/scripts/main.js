/* author: Jared Davis <http://haiqus.com> */
(function(){
  $(".nav").each(function(i,el){
    if(el.href.match(location.pathname.split(/\//)[1])){
      $(el).addClass('active-link');
    }
  });
})();

(function(){
  var wHeight = window.innerHeight,
      wWidth = window.innerWidth,
      path = window.location.pathname;
  $('body').css({
      "min-height": wHeight
    });
  $('section[role*="main"]').css({
      "min-height": wHeight - 180
    });
  $('.epigraph').css({
      "padding-top": wHeight / 8,
      "padding-bottom": wHeight / 8
    });
  $('.entrance-button').css({
      "top": wHeight / 4,
      "font-size": wWidth / 24,
      "padding-top": wWidth / 24,
      "padding-bottom": wWidth / 24
    });
   
})();
