(function() {

  $.fn.load = function() {

    return this.each(function() {

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
      divLoad.className = 'lds-hourglass'

      $(divLoad).css({
        position: "absolute",
        top: "50%",
        left: "50%"
      })
      
      $(divToAppend).append(divLoad);

      $(this).append(divToAppend)

    })

  }

})(jQuery)