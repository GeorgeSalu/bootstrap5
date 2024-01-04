// escondendo um elemento com a animação "fadeOut"
$('.courses_list .course_item_inner:eq(3)').fadeOut('fast')


// exibindo um elemento com a animacao "fadeIn"
$('.courses_list .course_item_inner:eq(3)').fadeIn(3000, function() {

    $(this).css('border', 'solid red 2px')

})


// alterando a opacidade de um elemento com a animação
$('.logo img').fadeTo(1000, 0.9);


$('.btn_toggle_item').on('click', function() {

    $(this).prev('.course_item_inner').fadeToggle('slow', function() {
        console.log('sumi ou apareci')
    })

})