// Opcional: si desea ocultar y mostrar las subcategorías al hacer clic en lugar de al hacer hover
document.querySelectorAll('.header-categorias').forEach(item => {
  item.addEventListener('click', e => {
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.classList.toggle('show');
    }
  });
});
