document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevents the form from actually submitting

        // Get input values
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="Email"]').value.trim();
        const message = form.querySelector('textarea[name="Message"]').value.trim();

        // Check if all fields are filled out
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields before submitting.');
        } else {
            // Simple validation for email format
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
            } else {
                // Form is valid
                alert('Thank you for your message! We will get back to you shortly.');

                // Clear form fields after submission (optional)
                form.reset();
            }
        }
    });
});
