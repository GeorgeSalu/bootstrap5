// adicionando uma classe
// $('header .menu ul li:last a').addClass('stylized_menu')

// removendo uma classe
// $('header .menu ul li:last a').removeClass('stylized_menu')


// alternando uma classe
// $(this).toggleClass('stylized_menu')

// verificando se um elemento possui uma classe
// $('header .menu ul li a').hasClass('stylized_menu')

$('header .menu ul li a').click(function(event) {

  event.preventDefault();

  $(this).toggleClass('stylized_menu')

});

$('p').each(function() {

  if($(this).hasClass('paragrafo')) {
      $(this).append(`<span style="color: red"> - eu tenho a classe</span>`)
  }
})