  document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.header-transition');

    function toggleHeaderBackground() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', toggleHeaderBackground);
    toggleHeaderBackground(); // executar uma ver no carregamento
  });
