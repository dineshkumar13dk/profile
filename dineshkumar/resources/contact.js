document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json()) // Assuming Formspree responds with JSON data
        .then(data => {
            if (data.success) {
                // Handle success
                alert("Message sent successfully!");
                // Optionally clear the form
                document.getElementById("contact-form").reset();
            } else {
                // Handle failure (this part depends on how Formspree responds)
                alert("There was an error sending your message. Please try again later.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("There was an error sending your message. Please try again later.");
        });
});
