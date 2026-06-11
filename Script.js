// Hardcoded credentials (for demo)
const VALID_USERNAME = "student";
const VALID_PASSWORD = "csc426";

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    // Input validation
    if (username === '') {
        showMessage('Please enter username', 'error');
        return;
    }
    
    if (password === '') {
        showMessage('Please enter password', 'error');
        return;
    }
    
    if (username.length < 3) {
        showMessage('Username must be at least 3 characters', 'error');
        return;
    }
    
    if (password.length < 4) {
        showMessage('Password must be at least 4 characters', 'error');
        return;
    }
    
    // Authentication
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        showMessage('Login Successful! Welcome ' + username, 'success');
        // Optional: redirect after 2 seconds
        setTimeout(() => {
            alert('Welcome ' + username + '! You are now logged in.');
        }, 500);
    } else {
        showMessage('Invalid username or password. Try: student / csc426', 'error');
    }
});

function resetForm() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('message').innerHTML = '';
}

function showMessage(msg, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = msg;
    messageDiv.className = 'message ' + type;
    
    // Auto clear after 3 seconds
    setTimeout(() => {
        if (messageDiv.innerHTML === msg) {
            messageDiv.innerHTML = '';
            messageDiv.className = 'message';
        }
    }, 3000);
}
