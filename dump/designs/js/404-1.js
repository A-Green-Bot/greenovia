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

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add some randomization to the planet's face movement
  const planet = document.querySelector('.planet');
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 20;

    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      planet.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }
  });

  // Easter egg: Click the planet to make it spin faster
  let spinMultiplier = 1;
  planet.addEventListener('click', () => {
    spinMultiplier = Math.min(spinMultiplier + 0.5, 4);
    document.querySelector('.recycle-symbols').style.animationDuration = `${20 / spinMultiplier}s`;
  });

  // JavaScript check
  if (!document.cookie.includes('js_enabled=true')) {
    document.cookie = "js_enabled=true; path=/";
    location.reload();
  }