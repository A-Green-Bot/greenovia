// Import AOS library (assuming it's available via a CDN or a module bundler)
import AOS from "aos" // Or the correct import path for your setup

// Initialize AOS
AOS.init({
  duration: 800,
  easing: "ease-out",
  once: true,
})

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const navLinks = document.querySelector(".nav-links")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Navbar scroll effect
let lastScroll = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll <= 0) {
    navbar.classList.remove("scroll-up")
    return
  }

  if (currentScroll > lastScroll && !navbar.classList.contains("scroll-down")) {
    navbar.classList.remove("scroll-up")
    navbar.classList.add("scroll-down")
  } else if (currentScroll < lastScroll && navbar.classList.contains("scroll-down")) {
    navbar.classList.remove("scroll-down")
    navbar.classList.add("scroll-up")
  }

  lastScroll = currentScroll
})

