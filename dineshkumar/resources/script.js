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
