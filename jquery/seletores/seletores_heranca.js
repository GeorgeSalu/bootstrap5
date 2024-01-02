// elementos descendentes
// $('main h1').css('color', 'red')


// elementos descendente direto
// $('main>,title').css('border', 'solid 2px blue')

// elemento irmao mas proximo -> +
// todos os elementos irmaos -> ~
$('.paragrafo~p').css({
  'background-color': 'red',
  'color': 'white'
})