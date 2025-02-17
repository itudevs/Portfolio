export function initializeNavigation() {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href) {
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Add scroll event listener for navigation highlighting
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
        currentSection = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-white');
      link.classList.add('text-gray-300');
      if (link.getAttribute('href')?.slice(1) === currentSection) {
        link.classList.remove('text-gray-300');
        link.classList.add('text-white');
      }
    });
  });
}