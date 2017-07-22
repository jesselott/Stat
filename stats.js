$('#btn1').click(function(){
  $('#vanish1').toggleClass('show');
  $('body').animate({
        scrollTop: $("#vanish1").offset().top
    }, 2000);
  
});

$('#btn2').click(function(){
  $('#vanish2').toggleClass('show');
  $('html, body').animate({
        scrollTop: $("#vanish2").offset().top
    }, 2000);
});

$('#btn3').click(function(){
  $('#vanish3').toggleClass('show');
  $('html, body').animate({
        scrollTop: $("#vanish3").offset().top
    }, 2000);
});

$('#btn4').click(function(){
  $('#vanish4').toggleClass('show');
  $('html, body').animate({
        scrollTop: $("#vanish4").offset().top
    }, 2000);
});

$('#btn5').click(function(){
  $('#conclusion').toggleClass('show');
  $('html, body').animate({
        scrollTop: $("#conclusion").offset().top
    }, 2000);
});

