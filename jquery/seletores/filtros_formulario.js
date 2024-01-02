$('[type=radio]').change(function() {
  let value = $('input:checked').val();
  let gender = (value == 'M') ? 'masculino': 'feminino';

  alert(`voce selecionou o sexo ${gender}`)


})

$('input').focus(function() {

  $('input:focus').val('ola vc clicou aqui')


})

$('#register :submit').click(function(event) {

  event.preventDefault();

  console.log('vc clickou no botao submit')

})

// selecionando um botao
// $('#register :button').text()

// selecionando um checkbox
// $('#register :checkbox').trigger('click')

// selecionando os elementos "checados"
// $('input:checked').val()

// selecionando os elementos desabilitados
// $('#register :disabled').val('marcos@gmail.com.br').prop('disabled', false);

// selecionando o botao submit
// $('#register :submit').css('background-color', 'orange')
