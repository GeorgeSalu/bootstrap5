/*
$('h1').on('dblclick', function() {

    $(this).text('hcode treinamentos jquery')

})
*/

// acionando um evento manualmente
// $('h1').trigger('dblclick')

$('#form_login').on('submit', function(event) {

  event.preventDefault();

  console.log('aqui estao os valores do formulario', $(this).serializeArray());

})

$('#form_login [name=bio]').on('blur', function(e) {

  $(e.target.form).trigger('submit');

})
