Papa.parse("../menu.csv", {
  download: true,
  header: true,

  complete: function(results) {

    const data = results.data;

    const primeros = document.getElementById("primeros");
    const segundos = document.getElementById("segundos");
    const postres = document.getElementById("postres");
    const incluye = document.getElementById("incluye");
    const precio = document.getElementById("precio");

    data.forEach(item => {

      if (!item.nombre) return;

      const li = document.createElement("li");
      li.textContent = item.nombre;

      switch (item.categoria) {

        case "primeros":
          primeros.appendChild(li);
          break;

        case "segundos":
          segundos.appendChild(li);
          break;

        case "postres":
          postres.appendChild(li);
          break;

        case "incluye":
          incluye.appendChild(li);
          break;

        case "precio":
          precio.textContent = item.nombre;
          break;
      }
    });
  }
});

// RESEÑAS

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".tarjeta-testimonio");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let current = 0;

    function mostrar(index) {

        slides.forEach(slide => {
            slide.classList.remove("activa");
        });

        slides[index].classList.add("activa");
    }

    function siguiente() {
        current = (current + 1) % slides.length;
        mostrar(current);
    }

    function anterior() {
        current = (current - 1 + slides.length) % slides.length;
        mostrar(current);
    }

    nextBtn.addEventListener("click", siguiente);
    prevBtn.addEventListener("click", anterior);

    setInterval(siguiente, 12000);

    mostrar(0);

});



// MENU HAMBURGEUSA

(function () {
    const burger  = document.getElementById('lf-burger');
    const overlay = document.getElementById('lf-menu-overlay');

    function toggleMenu() {
      const isOpen = overlay.classList.toggle('is-open');
      burger.classList.toggle('is-open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    function closeMenu() {
      overlay.classList.remove('is-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', toggleMenu);

    overlay.querySelectorAll('.lf-menu-item').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  })();

  // flecha movimiento 

  const descubre = document.getElementById('descubre');
const arrow = document.createElement('div');
arrow.className = 'descubre-arrow';
descubre.appendChild(arrow);

// Se oculta al hacer scroll
window.addEventListener('scroll', () => {
  descubre.style.opacity = window.scrollY > 60 ? '0' : '1';
}, { passive: true });

descubre.style.transition = 'opacity 0.4s ease';

// Header fijo 

const nav = document.querySelector('.lf-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });