// evento para quando o navegador mudar seu tamanho
$(window).resize(function() {

  console.info(`a largura do navegador é ${$(window).width()}. altura é ${$(window).height()}`)

});

// evento para quando a barra de rolagem se mover
$(window).scroll(function() {

  console.log(`voce esta na posicao ${$(window).scrollTop()}`)

})