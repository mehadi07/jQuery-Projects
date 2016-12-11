var main = function() {
  $('.notification img').click(function(){
    $('.notification-menu').toggle();
    
  });
  
  $('.btn').click(function(){
    $(this).toggle('btn-like');
    
  });
  
};

$(document).ready(main);