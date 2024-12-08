document.addEventListener("DOMContentLoaded", () => {
    const lastUpdatedElement = document.getElementById("last-updated-time");

    const now = new Date();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    // Format the time and display
    lastUpdatedElement.textContent = now.toLocaleString("en-US", options);

    // Fetch and display explanation content
    window.loadExplanation = (url) => {
        const explanationContainer = document.getElementById("explanation-container");
        const explanationContent = document.getElementById("explanation-content");

        // Clear previous content
        explanationContent.innerHTML = "Loading...";
        explanationContainer.classList.remove("hidden");

        // Fetch content from the specified URL
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                explanationContent.innerHTML = data;
            })
            .catch(error => {
                explanationContent.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            });
    };

    // Hide explanation and show the project list
    window.goBackToProjects = () => {
        document.getElementById("explanation-container").classList.add("hidden");
    };
});
