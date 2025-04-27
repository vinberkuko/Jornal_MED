// JavaScript principal para o Jornal_MED

document.addEventListener('DOMContentLoaded', function() {
  // Menu mobile toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav ul');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mainNav.classList.toggle('active');
    });
  }
  
  // Botão Voltar ao Topo
  const backToTopButton = document.getElementById('back-to-top');
  
  if (backToTopButton) {
    // Mostrar/ocultar botão com base na posição de rolagem
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    // Ação de clique para voltar ao topo com animação suave
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Animações de entrada para cards
  const animateElements = document.querySelectorAll('.post-card, .featured-card, .category-card');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    animateElements.forEach(element => {
      observer.observe(element);
    });
  } else {
    // Fallback para navegadores que não suportam IntersectionObserver
    animateElements.forEach(element => {
      element.classList.add('animated');
    });
  }
});
