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
  
  // Add floating leaves dynamically
  function createFloatingLeaves() {
    const container = document.querySelector('.floating-leaves');
    const numberOfLeaves = 10;
  
    for (let i = 0; i < numberOfLeaves; i++) {
      const leaf = document.createElement('i');
      leaf.className = 'lucide-leaf';
      leaf.style.left = `${Math.random() * 100}%`;
      leaf.style.animationDelay = `${Math.random() * 15}s`;
      leaf.style.fontSize = `${Math.random() * 2 + 1}rem`;
      container.appendChild(leaf);
    }
  }
  
  createFloatingLeaves();
  
  // Navbar Scroll Effect
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navbar.classList.remove('scroll-up');
      return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
      // Scroll Down
      navbar.classList.remove('scroll-up');
      navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
      // Scroll Up
      navbar.classList.remove('scroll-down');
      navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
  });
  
  // JavaScript check
  if (!document.cookie.includes('js_enabled=true')) {
    document.cookie = "js_enabled=true; path=/";
    location.reload();
  }