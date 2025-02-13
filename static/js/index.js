// // function typeWriter(element, text, speed = 100) {
// //   let i = 0;
// //   element.innerHTML = '';

// //   function type() {
// //     if (i < text.length) {
// //       element.innerHTML += text.charAt(i);
// //       i++;
// //       setTimeout(type, speed);
// //     }
// //   }

// //   type();
// // }

// // // Initialize typing animation
// // const heading = document.querySelector('.typing');
// // typeWriter(heading, heading.textContent);

// // // Fun Facts Button
// // const facts = [
// //   "Recycling one aluminum can saves enough energy to run a TV for three hours.",
// //   "The average person generates over 4 pounds of trash every day.",
// //   "About 80% of what Americans throw away is recyclable.",
// //   "A glass bottle can take up to 1 million years to decompose.",
// //   "Every year, we dump 8 million tons of plastic into our oceans."
// // ];

// // let currentFactIndex = 0;
// // const factBtn = document.getElementById('factBtn');

// // factBtn.addEventListener('click', () => {
// //   const factCards = document.querySelectorAll('.fact-card p');
// //   currentFactIndex = (currentFactIndex + 1) % facts.length;

// //   factCards.forEach((card, index) => {
// //     card.style.opacity = '0';
// //     setTimeout(() => {
// //       card.textContent = facts[(currentFactIndex + index) % facts.length];
// //       card.style.opacity = '1';
// //     }, 300);
// //   });
// // });

// // // Smooth Scroll
// // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// //   anchor.addEventListener('click', function (e) {
// //     e.preventDefault();
// //     document.querySelector(this.getAttribute('href')).scrollIntoView({
// //       behavior: 'smooth'
// //     });
// //   });
// // });

// // // Intersection Observer for animations
// // const observer = new IntersectionObserver((entries) => {
// //   entries.forEach(entry => {
// //     if (entry.isIntersecting) {
// //       entry.target.style.opacity = '1';
// //       entry.target.style.transform = 'translateY(0)';
// //     }
// //   });
// // }, {
// //   threshold: 0.1
// // });

// // document.querySelectorAll('section:not(.hero)').forEach(section => {
// //   section.style.opacity = '0';
// //   section.style.transform = 'translateY(20px)';
// //   section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
// //   observer.observe(section);
// // });

// // Typing Animation for Hero Heading
// const heading = document.querySelector('.typing');
// heading.style.whiteSpace = 'nowrap';
// heading.style.overflow = 'hidden';

// // Random Facts Generator
// const facts = [
//   "Every year, 8 million tons of plastic end up in our oceans.",
//   "It takes 450 years for a plastic bottle to decompose.",
//   "91% of plastic isn't recycled.",
//   "By 2050, there will be more plastic than fish in our oceans.",
//   "Recycling one aluminum can saves enough energy to run a TV for 3 hours.",
//   "The average person generates over 4 pounds of trash every day."
// ];

// const factBtn = document.getElementById('factBtn');

// function addFact() {
//   const factsGrid = document.querySelector('.facts-grid');
//   const randomFact = facts[Math.floor(Math.random() * facts.length)];

//   const factCard = document.createElement('div');
//   factCard.className = 'fact-card';
//   factCard.style.animation = 'fadeInUp 0.5s ease-out';

//   factCard.innerHTML = `
//     <img src="{{ url_for('static', filename='images/recycling.jpg') }}" alt="Recycling Fact">
//     <div class="fact-content">
//       <p>${randomFact}</p>
//     </div>
//   `;

//   factsGrid.appendChild(factCard);
// }

// factBtn.addEventListener('click', addFact);

// // Smooth Scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

// Initialize AOS (Animate On Scroll)
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

// Typing Animation for Hero Heading
const heading = document.querySelector('.typing');
heading.style.whiteSpace = 'nowrap';
heading.style.overflow = 'hidden';

// Random Facts Generator
const facts = [
  "Every year, 8 million tons of plastic end up in our oceans.",
  "It takes 450 years for a plastic bottle to decompose.",
  "91% of plastic isn't recycled.",
  "By 2050, there will be more plastic than fish in our oceans.",
  "Recycling one aluminum can saves enough energy to run a TV for 3 hours.",
  "The average person generates over 4 pounds of trash every day."
];

const factBtn = document.getElementById('factBtn');

function addFact() {
  const factsGrid = document.querySelector('.facts-grid');
  const randomFact = facts[Math.floor(Math.random() * facts.length)];

  const factCard = document.createElement('div');
  factCard.className = 'fact-card';
  factCard.setAttribute('data-aos', 'fade-up');

  factCard.innerHTML = `
    <img src="/static/images/recycling.jpg" alt="Recycling Fact">
    <div class="fact-content">
      <p>${randomFact}</p>
    </div>
  `;

  factsGrid.appendChild(factCard);
  AOS.refresh();
}

factBtn.addEventListener('click', addFact);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

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

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

// JavaScript check
if (!document.cookie.includes('js_enabled=true')) {
  document.cookie = "js_enabled=true; path=/";
  location.reload();
}