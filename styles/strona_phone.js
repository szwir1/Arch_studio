// JavaScript dla menu mobilnego
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const body = document.querySelector('body');
  
  // Dodaj obsługę przewijania dla nagłówka
  window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
  
  // Obsługa menu mobilnego
  menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      body.classList.toggle('menu-open');
      
      // Animacja przycisku hamburger
      const spans = menuToggle.querySelectorAll('span');
      if (navLinks.classList.contains('active')) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
      } else {
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
      }
  });
  
  // Zamknij menu po kliknięciu w link
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
      link.addEventListener('click', function() {
          navLinks.classList.remove('active');
          body.classList.remove('menu-open');
          
          const spans = menuToggle.querySelectorAll('span');
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
      });
  });
});