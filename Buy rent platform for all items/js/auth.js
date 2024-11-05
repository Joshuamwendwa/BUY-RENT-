// Authentication JavaScript file: auth.js

/**
 * Initializes authentication-related events.
 */
function initAuth() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }
}

/**
 * Processes the login form submission.
 * @param {Event} event - The submit event.
 */
function handleLogin(event) {
    event.preventDefault();
    const username = event.target.username.value.trim();
    const password = event.target.password.value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Example placeholder login logic
    if (username === "user" && password === "pass") {
        alert("Login successful!");
        localStorage.setItem("loggedIn", "true");
        toggleModal(document.getElementById("loginModal"), false);
    } else {
        alert("Invalid credentials. Try again.");
    }
}

/**
 * Checks if a user is logged in and updates UI accordingly.
 */
function checkAuthStatus() {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    const loginBtn = document.getElementById("loginBtn");

    if (loginBtn) {
        loginBtn.textContent = isLoggedIn ? "Logout" : "Login / Register";
        loginBtn.onclick = isLoggedIn ? handleLogout : () => toggleModal(document.getElementById("loginModal"), true);
    }
}

/**
 * Logs the user out by clearing session data.
 */
function handleLogout() {
    localStorage.removeItem("loggedIn");
    alert("Logged out successfully!");
    checkAuthStatus();
}

document.addEventListener("DOMContentLoaded", () => {
    initAuth();
    checkAuthStatus();
});
