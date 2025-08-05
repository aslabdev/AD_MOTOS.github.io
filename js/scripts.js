/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
fetch('productos.json')
  .then(res => res.json())
  .then(productos => {
    const contenedor = document.getElementById('contenedor-productos');
    productos.forEach((p, i) => {
      const id = `carousel-${i}`;
      const videoHTML = p.video
        ? `<div class="carousel-item">
             <video class="d-block w-100 img-ajustada" controls>
               <source src="${p.video}" type="video/mp4">
             </video>
           </div>` : '';

      contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <div id="${id}" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="${p.imagen1}" class="d-block w-100 img-ajustada" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="${p.imagen2}" class="d-block w-100 img-ajustada" alt="...">
                </div>
                ${videoHTML}
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
            <div class="card-body text-center">
              <div class="portfolio-caption-heading">${p.nombre}<br>💰 Precio: $${p.precio}</div>
              <div class="portfolio-caption-subheading text-muted">${p.caracteristicas}</div>
            </div>
          </div>
        </div>
      `;
    });
  });
