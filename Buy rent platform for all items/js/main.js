document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click", () => {
        // Display login modal
    });

    const newsletterForm = document.getElementById("newsletterForm");
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Subscribed successfully!");
    });
});
