// contact.js

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    // Disable the submit button to prevent multiple submissions
    document.querySelector("button[type='submit']").disabled = true;

    // Send form data using fetch to Formspree
    fetch(form.action, {
        method: "POST",
        body: formData,
    })
        .then(response => {
            if (response.ok) {
                // Success message
                document.getElementById("response").innerHTML = "<p>Thank you! Your message has been sent.</p>";
                form.reset();  // Reset the form fields after submission
            } else {
                // Error message
                document.getElementById("response").innerHTML = "<p>There was an error sending your message. Please try again later.</p>";
            }
        })
        .catch(error => {
            // Catching any errors during the fetch process
            document.getElementById("response").innerHTML = "<p>There was an error sending your message. Please try again later.</p>";
        })
        .finally(() => {
            // Re-enable the submit button after the request is completed
            document.querySelector("button[type='submit']").disabled = false;
        });
});
