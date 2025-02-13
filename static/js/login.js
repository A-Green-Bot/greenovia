// // document.addEventListener('DOMContentLoaded', function() {
// //     const form = document.getElementById('loginForm');
// //     const passwordInput = document.getElementById('password');
// //     const passwordToggle = document.querySelector('.password-toggle');
// //     const emailInput = document.getElementById('email');

// //     // Mobile menu functionality
// //     const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
// //     const navLinks = document.querySelector('.nav-links');

// //     mobileMenuBtn?.addEventListener('click', () => {
// //       mobileMenuBtn.classList.toggle('active');
// //       navLinks.classList.toggle('active');
// //     });

// //     // Password visibility toggle with smooth transition
// //     let passwordVisible = false;
// //     passwordToggle.addEventListener('click', () => {
// //       passwordVisible = !passwordVisible;
// //       passwordInput.type = passwordVisible ? 'text' : 'password';
// //       passwordToggle.textContent = passwordVisible ? '🙈' : '👀';
// //       passwordToggle.style.transform = 'translateY(-50%) scale(1.1)';
// //       setTimeout(() => {
// //         passwordToggle.style.transform = 'translateY(-50%) scale(1)';
// //       }, 100);
// //     });

// //     // Form validation
// //     form.addEventListener('submit', function(e) {
// //       e.preventDefault();
// //       let isValid = true;

// //       // Reset error messages
// //       document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

// //       // Validate email
// //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //       if (!emailRegex.test(emailInput.value)) {
// //         document.getElementById('email-error').textContent = 'Please enter a valid email address';
// //         isValid = false;
// //       }

// //       // Validate password
// //       if (passwordInput.value.length < 8) {
// //         document.getElementById('password-error').textContent = 'Password must be at least 8 characters';
// //         isValid = false;
// //       }

// //       // If all validations pass, submit the form
// //       if (isValid) {
// //         form.submit();
// //       }
// //     });

// //     // Clear error message on input
// //     [emailInput, passwordInput].forEach(input => {
// //       input.addEventListener('input', function() {
// //         const errorId = input.id + '-error';
// //         document.getElementById(errorId).textContent = '';
// //       });
// //     });

// //     // Add focus styles for better visual feedback
// //     const inputs = document.querySelectorAll('input');
// //     inputs.forEach(input => {
// //       input.addEventListener('focus', () => {
// //         input.parentElement.classList.add('focused');
// //       });
// //       input.addEventListener('blur', () => {
// //         input.parentElement.classList.remove('focused');
// //       });
// //     });
// //   });

// //   // Add a general error message if credentials are invalid
// // const generalError = document.getElementById('general-error');

// // form.addEventListener('submit', function(e) {
// //   e.preventDefault();
// //   let isValid = true;

// //   // Reset previous error messages
// //   document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');
// //   generalError.style.display = 'none';

// //   // Validate email
// //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //   if (!emailRegex.test(emailInput.value)) {
// //     document.getElementById('email-error').textContent = 'Please enter a valid email address';
// //     isValid = false;
// //   }

// //   // Validate password
// //   if (passwordInput.value.length < 8) {
// //     document.getElementById('password-error').textContent = 'Password must be at least 8 characters';
// //     isValid = false;
// //   }

// //   // Show general error message if any validation fails
// //   if (!isValid) {
// //     generalError.textContent = 'Invalid email or password';
// //     generalError.style.display = 'block';
// //   } else {
// //     form.submit();
// //   }
// // });

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('loginForm');
//     const passwordInput = document.getElementById('password');
//     const passwordToggle = document.querySelector('.password-toggle');
//     const emailInput = document.getElementById('email');
//     const generalError = document.getElementById('general-error');

//     // Mobile menu functionality
//     const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//     const navLinks = document.querySelector('.nav-links');

//     mobileMenuBtn?.addEventListener('click', () => {
//       mobileMenuBtn.classList.toggle('active');
//       navLinks.classList.toggle('active');
//     });

//     // Password visibility toggle
//     let passwordVisible = false;
//     passwordToggle.addEventListener('click', () => {
//       passwordVisible = !passwordVisible;
//       passwordInput.type = passwordVisible ? 'text' : 'password';
//       passwordToggle.textContent = passwordVisible ? '🙈' : '👀';
//       passwordToggle.style.transform = 'translateY(-50%) scale(1.1)';
//       setTimeout(() => {
//         passwordToggle.style.transform = 'translateY(-50%) scale(1)';
//       }, 100);
//     });

//     // Form validation
//     form.addEventListener('submit', function (e) {
//       e.preventDefault();
//       let isValid = true;

//       // Reset previous error messages
//       document.querySelectorAll('.error-message').forEach(msg => msg.classList.remove('show'));
//       generalError.style.display = 'none';

//       // Validate email
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(emailInput.value)) {
//         document.getElementById('email-error').textContent = 'Please enter a valid email address';
//         document.getElementById('email-error').classList.add('show');
//         isValid = false;
//       }

//       // Validate password
//       if (passwordInput.value.length < 8) {
//         document.getElementById('password-error').textContent = 'Password must be at least 8 characters';
//         document.getElementById('password-error').classList.add('show');
//         isValid = false;
//       }

//       // Show general error message if any validation fails
//       if (!isValid) {
//         generalError.textContent = 'Invalid email or password';
//         generalError.style.display = 'block';
//       } else {
//         form.submit();
//       }
//     });

//     // Clear error message when user starts typing again
//     [emailInput, passwordInput].forEach(input => {
//       input.addEventListener('input', function () {
//         const errorId = input.id + '-error';
//         document.getElementById(errorId).classList.remove('show');
//         generalError.style.display = 'none';
//       });
//     });

//     // Add focus styles for better visual feedback
//     const inputs = document.querySelectorAll('input');
//     inputs.forEach(input => {
//       input.addEventListener('focus', () => {
//         input.parentElement.classList.add('focused');
//       });
//       input.addEventListener('blur', () => {
//         input.parentElement.classList.remove('focused');
//       });
//     });
//   });


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');
    const emailInput = document.getElementById('email');
    const generalError = document.getElementById('general-error');
    const flashMessage = document.getElementById('flash-message');

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
        passwordToggle.style.transform = 'translateY(-50%) scale(1.1)';
        setTimeout(() => {
            passwordToggle.style.transform = 'translateY(-50%) scale(1)';
        }, 100);
    });

    // Form validation
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Reset previous error messages
        document.querySelectorAll('.error-message').forEach(msg => msg.classList.remove('show'));
        generalError.style.display = 'none';

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address';
            document.getElementById('email-error').classList.add('show');
            isValid = false;
        }

        // Validate password
        if (passwordInput.value.length < 8) {
            document.getElementById('password-error').textContent = 'Password must be at least 8 characters';
            document.getElementById('password-error').classList.add('show');
            isValid = false;
        }

        // Show general error message if any validation fails
        if (!isValid) {
            generalError.textContent = 'Invalid email or password';
            generalError.style.display = 'block';
        } else {
            sessionStorage.setItem('flashMessage', 'Invalid email or password');
            form.submit();
        }
    });

    // Display Flash Message After Page Reload
    const flashMessageText = sessionStorage.getItem('flashMessage');
    if (flashMessageText) {
        flashMessage.textContent = flashMessageText;
        flashMessage.style.display = 'block';

        setTimeout(() => {
            flashMessage.style.opacity = '0';
            setTimeout(() => {
                flashMessage.style.display = 'none';
                sessionStorage.removeItem('flashMessage');
            }, 500);
        }, 5000);
    }
});
