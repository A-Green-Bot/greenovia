document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');
    const firstnameInput = document.getElementById('firstname');
    const lastnameInput = document.getElementById('lastname');
    const emailInput = document.getElementById('email');
  
    // Password requirements elements
    const lengthReq = document.getElementById('length');
    const lowercaseReq = document.getElementById('lowercase');
    const uppercaseReq = document.getElementById('uppercase');
    const numberReq = document.getElementById('number');
  
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
  
    mobileMenuBtn?.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  
    // Password visibility toggle
    let passwordVisible = false;
    passwordToggle.addEventListener('click', () => {
      passwordVisible = !passwordVisible;
      passwordInput.type = passwordVisible ? 'text' : 'password';
      passwordToggle.textContent = passwordVisible ? '🙈' : '👀';
    });
  
    // Real-time password validation
    passwordInput.addEventListener('input', validatePassword);

    function validatePassword() {
      const password = passwordInput.value;

      // Update requirements
      lengthReq.classList.toggle('valid', password.length >= 8);
      lowercaseReq.classList.toggle('valid', /[a-z]/.test(password));
      uppercaseReq.classList.toggle('valid', /[A-Z]/.test(password));
      numberReq.classList.toggle('valid', /[0-9]/.test(password));
    }
  
    // Form validation
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;

      // Reset error messages
      document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');
  
      // Validate first name
      if (firstnameInput.value.trim() === '') {
        document.getElementById('firstname-error').textContent = 'First name is required';
        isValid = false;
      } else if (/\s/.test(firstnameInput.value)) {
        document.getElementById('firstname-error').textContent = 'First name should not contain spaces';
        isValid = false;
      }
  
      // Validate last name
      if (lastnameInput.value.trim() === '') {
        document.getElementById('lastname-error').textContent = 'Last name is required';
        isValid = false;
      } else if (/\s/.test(lastnameInput.value)) {
        document.getElementById('lastname-error').textContent = 'Last name should not contain spaces';
        isValid = false;
      }
  
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        isValid = false;
      }
  
      // Validate password
      const password = passwordInput.value;
      if (password.length < 8 ||
          !/[a-z]/.test(password) ||
          !/[A-Z]/.test(password) ||
          !/[0-9]/.test(password)) {
        document.getElementById('password-error').textContent = 'Password does not meet requirements';
        isValid = false;
      }
  
      // If all validations pass, submit the form
      if (isValid) {
        form.submit();
      }
    });
  
    // Clear error message on input
    [firstnameInput, lastnameInput, emailInput, passwordInput].forEach(input => {
      input.addEventListener('input', function() {
        const errorId = input.id + '-error';
        document.getElementById(errorId).textContent = '';
      });
    });
  });