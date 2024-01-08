$('#books_list tbody').on('click', 'tr', function(e) {

  $(e.delegateTarget).find('tr').removeClass('trselected');
  $('#books_list tbody td').removeClass('trselected');

  $(this).addClass('trselected');

})

$('#btn_add_book').on('click', function() {
  
  let tr = `
      <tr>
          <td>Til</td>
          <td>Jose de alencar</td>
      </tr>
  `;

  $('#books_list tbody').append(tr);

})

// parando a propagacao de eventos
$('#form_login').on('change', '[name]', function() {

  alert('elemento mudou, seu valor : '+$(this).val())

})

$('#form_login [name=bio]').on('change',function(event) {

  event.stopPropagation();

  $(this).css('background', 'red')

} )