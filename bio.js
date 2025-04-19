document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Handle contact form submit
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Example: You could send data to a backend here using fetch()
        alert(`Thank you ${name}, your message has been sent!\n\nSubject: ${subject}\nEmail: ${email}\nMessage: ${message}`);

        // Reset the form
        form.reset();
    });
});