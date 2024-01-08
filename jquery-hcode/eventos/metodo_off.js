let entries = 100;

$('.register').append(`<ul> - ainda restam um ${100 - entries} vagas </ul>`);

$('#form_login [type=submit]').on('click', function(e) {

    e.preventDefault();

    alert('voce foi cadsastrado com sucesso, parabens !!!!');

});

if(entries >= 100) {
    $('#form_login [type=submit]').off('click');
}