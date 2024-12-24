// Show Welcome Screen initially
document.getElementById('welcome-screen').style.display = 'block';

// Step 1: Show Social Login Options
document.getElementById('signup-button').addEventListener('click', () => {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('social-login-screen').style.display = 'block';
});

// Step 2: Show Email Signup Form when 'Sign up with Email' is clicked
document.getElementById('email-signup').addEventListener('click', () => {
    document.getElementById('social-login-screen').style.display = 'none';
    document.getElementById('email-signup-form').style.display = 'block';
});

// Step 3: Handle Email & Password Signup with validation
document.getElementById('next-button').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Password strength validation
    const passwordStrength = checkPasswordStrength(password);
    document.getElementById('strength-level').textContent = passwordStrength;
    if (passwordStrength === 'Weak') {
        errorMessage.textContent = "Password is too weak. Try including numbers and symbols.";
        return;
    }

    document.getElementById('email-signup-form').style.display = 'none';
    document.getElementById('verification-screen').style.display = 'block';
    updateProgress(50); // Update progress bar
});

// Function to check password strength
function checkPasswordStrength(password) {
    if (password.length < 6) return 'Weak';
    const strongPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
    return strongPattern.test(password) ? 'Strong' : 'Medium';
}

// Step 4: Handle Verification Code
document.getElementById('verify-button').addEventListener('click', () => {
    const verificationCode = document.getElementById('verification-code').value;
    if (verificationCode.length === 6) {
        document.getElementById('verification-screen').style.display = 'none';
        document.getElementById('terms-screen').style.display = 'block';
        updateProgress(75); // Update progress bar
    } else {
        alert('Please enter a valid 6-digit code.');
    }
});

// Step 5: Handle Terms & Conditions Agreement
document.getElementById('agree').addEventListener('change', (e) => {
    document.getElementById('agree-button').disabled = !e.target.checked;
});

document.getElementById('agree-button').addEventListener('click', () => {
    document.getElementById('terms-screen').style.display = 'none';
    document.getElementById('profile-screen').style.display = 'block';
    updateProgress(90); // Update progress bar
});

// Step 6: Complete Profile Setup
document.getElementById('profile-continue').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    if (name) {
        document.getElementById('profile-screen').style.display = 'none';
        document.getElementById('success-screen').style.display = 'block';
        updateProgress(100); // Final progress bar update
    } else {
        alert('Please enter your full name.');
    }
});

// Step 7: Success Screen and Start Using the App
document.getElementById('start-button').addEventListener('click', () => {
    alert('Welcome to the App!');
});

// Function to update progress bar
function updateProgress(percentage) {
    document.getElementById('progress').style.width = `${percentage}%`;
}
