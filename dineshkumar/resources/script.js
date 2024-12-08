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
});
