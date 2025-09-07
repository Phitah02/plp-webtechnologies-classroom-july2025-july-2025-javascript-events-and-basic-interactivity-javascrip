// script.js - JavaScript for Interactive Web Page

// Part 1: Event Handling
// Add event listener to the button to demonstrate basic event handling
document.getElementById('event-btn').addEventListener('click', function() {
    document.getElementById('event-message').textContent = 'Button clicked! Event handled successfully.';
});

// Part 2: Interactive Elements

// Light/Dark Mode Toggle
// Toggle the 'dark-mode' class on the body to change theme
document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Counter
// Initialize counter value
let count = 0;
document.getElementById('counter').textContent = count;

// Increment counter
document.getElementById('increment').addEventListener('click', function() {
    count++;
    document.getElementById('counter').textContent = count;
});

// Decrement counter
document.getElementById('decrement').addEventListener('click', function() {
    count--;
    document.getElementById('counter').textContent = count;
});

// Collapsible FAQ
// Add event listeners to FAQ questions to toggle answers
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Dropdown Menu
// Toggle visibility of dropdown menu
document.getElementById('dropdown-btn').addEventListener('click', function() {
    const menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('hidden');
});

// Tabbed Interface
// Add event listeners to tab buttons to switch content
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all tabs and contents
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Add active class to clicked tab and corresponding content
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Part 3: Form Validation
// Add event listener to form submit
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    let isValid = true;

    // Validate name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('email-error').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email.';
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    // Show success or error message
    const message = document.getElementById('form-message');
    if (isValid) {
        message.textContent = 'Form submitted successfully!';
        message.style.color = 'green';
        // Reset form
        this.reset();
    } else {
        message.textContent = 'Please fix the errors above.';
        message.style.color = 'red';
    }
});
