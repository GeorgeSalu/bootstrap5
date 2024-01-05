// criando animacoes personalizadas
$('h1').animate({
  fontSize: '50px'
});

/*
$('.course_item h4').on('click', function() {

  $(this).animate({
      wordSpacing: '+=5px',
  }, 4000)

});
*/

$('.course_item').on('click', function() {

  $(this).animate({
      padding: '+=5px'
  }, 1500)

});

$('footer p').on('click', function() {

  $(this).animate({
      letterSpacing: '+=10px'
  }, 2000, function() {
      alert('aumentou o espacamento das letras')
  })

})