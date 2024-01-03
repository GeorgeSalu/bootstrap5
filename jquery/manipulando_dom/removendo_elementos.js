// removendo elementos
// $('.cars_list li:eq(1)').remove()

// removendo o conteudo do elemento
// $('.cars_list li:eq(1)').empty()

// removendo um elemento, mas mantendo seus eventos associados
// let txt = $('.paragrafo').detach();

// removendo os elementos em volta de outro
// $('.cars_list li').unwrap();

$('.paragrafo').click(function() {
  $(this).html('voce clickou em mim')
})

let txt = $('.paragrafo').detach();

$('section main p').before(txt)
