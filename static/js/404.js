// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true
  });
  
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // JavaScript check
  if (!document.cookie.includes('js_enabled=true')) {
    document.cookie = 'js_enabled=true; path=/';
    location.reload();
  }
  