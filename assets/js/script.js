$(document).ready(function () {
  $("a").click(function() {
  var gato = this.hash
  $("html, body").animate(

    {
      scrolltop: $(gato).offset().top
    },
    3000

  )

})
})






//tooltip//

var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})
