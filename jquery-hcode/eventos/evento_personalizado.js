// criando um evento personalizado
$('header').on('initPage', function() {

  $(this).find('h1').append(' - seja bem-vindo ').css({
      color: 'blue',
      left: '100px'
  });

  $(this).find('img').animate({
      width: '400px'
  })

})

setTimeout(function() {
  $('header').trigger('initPage')
}, 1500)
