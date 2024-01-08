/* eventos para quando pressionamos o mouse
$('h1').mousedown(function() {

    console.log("apertei o mouse")

})
*/

// evento para quando soltamos o mouse
/*
$('h1').mouseup(function() {

    console.log('soltei o mouse')

})
*/


// evento para quando pressionarmos e soltarmos o mouse
/*
$('h1').click(function() {
    console.log('apertei e soltei o botao')
})

$('h3.books').click(function() {

    $(this).text('fui clicado')

})
*/

//simulando o click de um elemento
// $('h3.books').click()

// evento para o botao direito do mouse
/*
$('img').contextmenu(function() {

    alert('clicamos com o botao direito')

})
*/

// simulando o clique do botao direito
// $('img').contextmenu()

// evento para duplo click
/*
$('table tbody tr').dblclick(function() {

    $(this).css({
        background: 'black',
        color: 'white'
    })

})
*/

// simulando o duplo clique
// $('table tbody tr:eq(2)').dblclick();

// evento para quando o mouse "passa por cima" entra em algum elemento
/*
$('table tbody tr').mouseenter(function() {

    $(this).addClass('trselected')

})
*/

// evento para quando o cursos "deixa" um elemento
/*
$('table tbody tr').mouseleave(function() {

    $(this).removeClass('trselected')

})
*/

// evento para quando o curso "entra" e "deixa" um elemento
/*
$('table tbody tr').hover(function() {
    
    $(this).addClass('trselected');

}, function() {

    $(this).removeClass('trselected');

})
*/

// evento para quando o mouse se movimenta dentro de um elemento
/*
$('table tbody tr').mousemove(function(event) {

    $('h1').text(`voce esta na posicao x ${event.pageX} y ${event.pageY}`)

})
*/