// evento para qunado o elemento receber o foco
/*
$('[name]').focus(function() {

    $(this).css('background', 'yellow');

})
*/


// evento para quando o elemento perder o foco
/*
$('[name]').blur(function() {

    alert('voce digitou '+$(this).val())

})
*/

// evento para quando o elemento receber o foco, mesmo que seja um elemento filho
/*
$('.form-group').focusin(function() {

    console.log('voce selecionou um campo')

});

$('.form-group').focusout(function() {

    console.log('voce deixou um elemento')

});
*/

// evento para quando o campo mudar seu valor
$('[name]').change(function() {

  console.log(`valor do campo : ${$(this).val()}`)

});


// evento para quando selecionarmos o valor de um campo do formulario
$('[type=text]').select(function() {

  console.log('voce selecionou o valor deste campo')

})

$('form').submit(function(event) {

  event.preventDefault();

  console.log($(this).serializeArray());

});

$('#link_logo').click(function(event) {

  event.preventDefault();

  $(this).find('img').attr('src', 'img/jquery.jpg')

})