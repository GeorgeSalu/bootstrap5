// escondendo um elemento
// $('.courses_list div:first').hide(2000);

// exibindo um elemento
// $('.courses_list div:first').show(2000);

// exibindo ou escondendo um elemento
// $('.courses_list .course_item:eq(2)').toggle()

$('.btn_toggle_item').on('click', function() {

  $(this).prev('.course_item_inner').toggle(500);

});