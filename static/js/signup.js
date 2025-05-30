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
  
    // Password visibility toggle with smooth transition
    let passwordVisible = false;
    passwordToggle.addEventListener('click', () => {
      passwordVisible = !passwordVisible;
      passwordInput.type = passwordVisible ? 'text' : 'password';
      passwordToggle.textContent = passwordVisible ? '🙈' : '👀';
      passwordToggle.style.transform = 'translateY(-50%) scale(1.1)';
      setTimeout(() => {
        passwordToggle.style.transform = 'translateY(-50%) scale(1)';
      }, 100);
    });
  
    // Real-time password validation
    passwordInput.addEventListener('input', validatePassword);
  
    function validatePassword() {
      const password = passwordInput.value;
      
      // Update requirements with smooth transitions
      const requirements = [
        { elem: lengthReq, test: password.length >= 8 },
        { elem: lowercaseReq, test: /[a-z]/.test(password) },
        { elem: uppercaseReq, test: /[A-Z]/.test(password) },
        { elem: numberReq, test: /[0-9]/.test(password) }
      ];
  
      requirements.forEach(({ elem, test }) => {
        if (test) {
          elem.classList.add('valid');
        } else {
          elem.classList.remove('valid');
        }
      });
    }
  
    // Form validation
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;
      
      // Reset error messages
      document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');
  
      // Validate first name
      if (firstnameInput.value.trim() === '') {
        document.getElementById('firstname-error').textContent = 'Required';
        isValid = false;
      } else if (/\s/.test(firstnameInput.value)) {
        document.getElementById('firstname-error').textContent = 'No spaces allowed';
        isValid = false;
      }
  
      // Validate last name
      if (lastnameInput.value.trim() === '') {
        document.getElementById('lastname-error').textContent = 'Required';
        isValid = false;
      } else if (/\s/.test(lastnameInput.value)) {
        document.getElementById('lastname-error').textContent = 'No spaces allowed';
        isValid = false;
      }
  
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        document.getElementById('email-error').textContent = 'Valid email required';
        isValid = false;
      }
  
      // Validate password
      const password = passwordInput.value;
      const passwordValid = password.length >= 8 && 
                           /[a-z]/.test(password) && 
                           /[A-Z]/.test(password) && 
                           /[0-9]/.test(password);
      
      if (!passwordValid) {
        document.getElementById('password-error').textContent = 'Password must meet all requirements';
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
  
    // Add focus styles for better visual feedback
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
      });
      input.addEventListener('blur', () => {
        input.parentElement.classList.remove('focused');
      });
    });
  });