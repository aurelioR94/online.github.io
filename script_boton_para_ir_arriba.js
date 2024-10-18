// Referencia al botón
const btnIrArriba = document.getElementById('btnIrArriba');

// Mostrar el botón solo si hacemos scroll hacia abajo
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnIrArriba.classList.add('show');
  } else {
    btnIrArriba.classList.remove('show');
  }
});

// Volver al inicio con animación suave
btnIrArriba.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



