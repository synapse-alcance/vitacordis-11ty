  document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.cabecalho-transicao');

    function toggleHeaderBackground() {
      if (window.scrollY > 50) {
        navbar.classList.add('rolado');
      } else {
        navbar.classList.remove('rolado');
      }
    }

    window.addEventListener('scroll', toggleHeaderBackground);
    toggleHeaderBackground(); // executar uma ver no carregamento
  });
