document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'  // This bypasses CORS, but you won't get a response body
    })
        .then(response => {
            if (response.ok) {
                alert("Message sent successfully!");
            } else {
                alert("There was an error sending your message. Please try again later.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("There was an error sending your message. Please try again later.");
        });

});
