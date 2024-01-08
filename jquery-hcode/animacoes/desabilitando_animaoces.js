jQuery.fx.off = true;

// escondendo um elemento com o efeito de "sliding"
$('.courses_list .course_item_inner:eq(4)').slideUp('fast');

// exibindo um elemento com o efeito de "sliding"
$('.courses_list .course_item_inner:eq(4)').slideDown('fast');

// exibindo ou escondendo um elemento com efeito de "sliding"
$('.btn_toggle_item').on('click', function() {

    $(this).prev('.course_item_inner').slideToggle(3000, function() {

        console.log("sumi ou apareci, agora deslizando")

    })

});

$('#disable_effects').on('click', function() {

    jQuery.fx.off = !jQuery.fx.off;

})