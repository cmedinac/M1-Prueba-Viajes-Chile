//Jquery para smoothScrolling
$(document).ready(function () {
  $("a").click(function (event) {
    event.preventDefault();

    var dest = 0;
    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
      dest = $(document).height() - $(window).height();
    } else {
      dest = $(this.hash).offset().top - 86;
    }

    //go to destination
    $("html,body").animate({ scrollTop: dest }, 800, "swing");
  });

  // Funcionalidad a los iconos del footer para abrir los documentos en nuevas pestañas con la funcion openInNewTab
  $("#facebook").click(function () {
    openInNewTab("http://www.facebook.com");
  });
  $("#github").click(function () {
    openInNewTab("http://www.github.com");
  });
  $("#twitter").click(function () {
    openInNewTab("http://www.twitter.com");
  });
  $("#linkedin").click(function () {
    openInNewTab("http://www.linkedin.com");
  });
});

// Funcionalidad a los tooltip y popovers
$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover();

//Función para tomar los click en los iconos de footer y abrir los enlaces en un nuevo tab
function openInNewTab(href) {
  Object.assign(document.createElement("a"), {
    target: "_blank",
    href: href,
  }).click();
}