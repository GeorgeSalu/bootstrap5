(function() {

  $.fn.load = function(action= 'load', params ) {

    let defaults = {
      divClass: 'hourglass',
      divQtd: 0
    }

    let options = $.extend(defaults, params);

    return this.each(function() {

      switch(action) {

        case 'load' :
          let divToAppend = document.createElement('div');
          divToAppend.id = 'loader';

          $(divToAppend).css({
            width: "100%",
            height: "100%",
            position: "fixed", 
            top: 0,
            left: 0,
            "text-align": "center",
            "background-color": "rgba(0, 0, 0, 0.4)"
          })

          let divLoad = document.createElement('div');
          divLoad.className = 'lds-' + options.divClass;

          $(divLoad).css({
            position: "absolute",
            top: "50%",
            left: "50%"
          })

          for(let i = 1;i <= options.divQtd;i++) {

            $(divLoad).append('<div></div>');

          }
          
          $(divToAppend).append(divLoad);

          $(this).append(divToAppend)
        break;

        case 'unload':
          
          $('#loader').fadeOut(function() {

            $(this).remove()

          });

        break;

        default:
          console.log('informe uma acao valida');

      } 

      

    })

  }

})(jQuery)