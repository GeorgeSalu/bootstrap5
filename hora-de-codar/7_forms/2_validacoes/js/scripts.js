(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validations');

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {

                if (!form.checkValidity()) {

                    event.preventDefault();
                    event.preventPropagation();

                }

                form.classList.add('was-validated');

            }, false)
        })

})()