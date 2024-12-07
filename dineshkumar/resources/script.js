// Sidebar Toggle Functionality
const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("toggle-button");
const toggleIcon = document.getElementById("toggle-icon");
const mainContent = document.querySelector(".main-content");

toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
    mainContent.classList.toggle("expanded");

    // Update icon
    if (sidebar.classList.contains("closed")) {
        toggleIcon.classList.remove("fa-arrow-left");
        toggleIcon.classList.add("fa-arrow-right");
    } else {
        toggleIcon.classList.remove("fa-arrow-right");
        toggleIcon.classList.add("fa-arrow-left");
    }
});

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
