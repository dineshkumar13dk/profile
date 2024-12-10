document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            if (response.ok) {
                // Handle success
                alert("Message sent successfully!");
                // Clear form or redirect
            } else {
                // Handle error
                alert("There was an error sending your message. Please try again later.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("There was an error sending your message. Please try again later.");
        });
});
