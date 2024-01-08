// retornando ou definindo o dado de um elemento
// $('.cars_list li:first').data('ano', '1990')

// removendo dados de um elemento
// $('.cars_list li:first').removeData('ano')


$('.cars_list li').click(function() {

  console.log(`esse carro é do ano de ${$(this).data('ano')}`)

})