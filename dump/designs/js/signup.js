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
  
  // Form Validation
  const form = document.getElementById('signupForm');
  const submitButton = form.querySelector('button[type="submit"]');
  
  // Validation Rules
  const rules = {
    firstname: {
      test: value => value.trim().length > 0 && !value.includes(' '),
      message: 'First name cannot be empty or contain spaces'
    },
    lastname: {
      test: value => value.trim().length > 0 && !value.includes(' '),
      message: 'Last name cannot be empty or contain spaces'
    },
    email: {
      test: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'Please enter a valid email address'
    },
    password: {
      test: value => {
        const hasLength = value.length >= 8;
        const hasLower = /[a-z]/.test(value);
        const hasUpper = /[A-Z]/.test(value);
        const hasNumber = /\d/.test(value);
        return hasLength && hasLower && hasUpper && hasNumber;
      },
      message: 'Password must meet all requirements'
    }
  };
  
  // Password Requirements
  const requirements = {
    length: str => str.length >= 8,
    lowercase: str => /[a-z]/.test(str),
    uppercase: str => /[A-Z]/.test(str),
    number: str => /\d/.test(str)
  };
  
  // Update password requirements UI
  function updatePasswordRequirements(password) {
    Object.entries(requirements).forEach(([requirement, test]) => {
      const element = document.querySelector(`[data-requirement="${requirement}"]`);
      const icon = element.querySelector('i');
      
      if (test(password)) {
        element.classList.add('met');
        icon.className = 'lucide-check-circle';
      } else {
        element.classList.remove('met');
        icon.className = 'lucide-circle';
      }
    });
  }
  
  // Validate single field
  function validateField(field) {
    const rule = rules[field.id];
    const wrapper = field.closest('.input-wrapper');
    const errorElement = document.getElementById(`${field.id}-error`);
    
    if (rule && !rule.test(field.value)) {
      wrapper.classList.remove('valid');
      wrapper.classList.add('invalid');
      errorElement.textContent = rule.message;
      errorElement.classList.add('visible');
      return false;
    } else {
      wrapper.classList.remove('invalid');
      wrapper.classList.add('valid');
      errorElement.classList.remove('visible');
      return true;
    }
  }
  
  // Real-time validation
  form.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
      validateField(input);
      if (input.id === 'password') {
        updatePasswordRequirements(input.value);
      }
      updateSubmitButton();
    });
  
    input.addEventListener('blur', () => {
      validateField(input);
      updateSubmitButton();
    });
  });
  
  // Password visibility toggle
  const passwordInput = document.getElementById('password');
  const passwordToggle = document.querySelector('.password-toggle');
  const passwordIcon = passwordToggle.querySelector('i');
  
  passwordToggle.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    passwordIcon.className = type === 'password' ? 'lucide-eye' : 'lucide-eye-off';
  });
  
  // Update submit button state
  function updateSubmitButton() {
    const isValid = Array.from(form.querySelectorAll('input')).every(input => {
      const rule = rules[input.id];
      return rule ? rule.test(input.value) : true;
    });
    
    submitButton.disabled = !isValid;
  }
  
  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const isValid = Array.from(form.querySelectorAll('input')).every(input => validateField(input));
    
    if (!isValid) {
      return;
    }
  
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="lucide-loader-2"></i> Creating Account...';
  
    try {
      const formData = new FormData(form);
      const response = await fetch('/signup', {
        method: 'POST',
        body: formData
      });
  
      if (response.redirected) {
        window.location.href = response.url;
      }
    } catch (error) {
      console.error('Signup error:', error);
      submitButton.disabled = false;
      submitButton.innerHTML = '<i class="lucide-user-plus"></i> Create Account';
    }
  });
  
  // JavaScript check
  if (!document.cookie.includes('js_enabled=true')) {
    document.cookie = "js_enabled=true; path=/";
    location.reload();
  }