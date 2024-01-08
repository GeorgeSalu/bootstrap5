$('p').click(function(event) {

  // retorna o tipo de evento executado
  // console.log('voce realizou um evento de '+event.type)

  // retorna o nome do elemento que clicamos
  // alert(`voce clicou em uma tag <${event.target.localName}> `)

  // console.log(event.target);
  // console.log(event.currentTarget);

})

// retorna a posicao x e y do elemento onde ocorreu o evento
// event.pageX, event.pageY

$('[name=bio]').keydown(function(e) {

  // retorna o codigo da tecla perssionada
  // console.log(e.keyCode)
  // console.log(e.which)

  // retorna o nome da tecla pressionada
  // console.log(e.key)
  /*
  if(e.key === 'Enter') {
      e.preventDefault();
      alert('voce pressionou o enter')
  }
  */

  // para a execução padrao do evento
  // e.preventDefault();

  // para a propagacao de eventos
  // e.stopPropagation();

})