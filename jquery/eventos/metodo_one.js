$('.books').append('<u> - marque seus favoritos (essa ação nao pode ser desfeita)</u>')

$('#books_list tbody tr').one('click', function() {

    if(!$(this).hasClass('trselected')) {
        $(this).addClass('trselected');
    } else {
        $(this).removeClass('trselected');
    }

})