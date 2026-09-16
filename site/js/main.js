/* Momentum - interacciones minimas: menu movil, filtros del portafolio, anio del footer. */
(function () {
  "use strict";

  /* Menu movil */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Filtros del portafolio */
  var filtros = document.querySelectorAll(".filtro");
  var figuras = document.querySelectorAll(".galeria figure");
  filtros.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var cat = btn.dataset.filter;
      filtros.forEach(function (b) { b.classList.toggle("is-active", b === btn); });
      figuras.forEach(function (fig) {
        fig.classList.toggle("is-hidden", cat !== "all" && fig.dataset.cat !== cat);
      });
    });
  });

  /* Anio en el footer */
  var anio = document.getElementById("anio");
  if (anio) { anio.textContent = String(new Date().getFullYear()); }
})();
