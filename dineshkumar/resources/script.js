document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    // Sidebar Toggle Functionality
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggle-button");
    const toggleIcon = document.getElementById("toggle-icon");
    const mainContent = document.querySelector(".main-content");

    if (sidebar && toggleButton && toggleIcon && mainContent) {
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
    } else {
        console.error("Sidebar or related elements not found");
    }

    // Update Last Updated Time
    const lastUpdatedElement = document.getElementById("last-updated-time");
    if (lastUpdatedElement) {
        const now = new Date();
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        lastUpdatedElement.textContent = now.toLocaleString("en-US", options);
    } else {
        console.error("Last updated element not found");
    }
});
