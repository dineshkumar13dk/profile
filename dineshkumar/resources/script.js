document.addEventListener("DOMContentLoaded", () => {
    const lastUpdatedElement = document.getElementById("last-updated-time");
    const lastUpdatedElement2 = document.getElementById("last-updated-time2");

    const now = new Date();
    const optionsDate = { year: "numeric", month: "long", day: "numeric" };
    const optionsTime = { hour: "2-digit", minute: "2-digit" };

    // Save the current date and time in local storage if not already set
    if (!localStorage.getItem("lastUpdatedDate")) {
        localStorage.setItem("lastUpdatedDate", now.toLocaleString("en-US", optionsDate));
        localStorage.setItem("lastUpdatedTime", now.toLocaleString("en-US", optionsTime));
    }

    // Retrieve and display the last updated date and time from local storage
    const lastUpdatedDate = localStorage.getItem("lastUpdatedDate");
    const lastUpdatedTime = localStorage.getItem("lastUpdatedTime");

    lastUpdatedElement.textContent = lastUpdatedDate;
    lastUpdatedElement2.textContent = lastUpdatedTime;

    // Update the local storage with the current date and time when the user is active
    localStorage.setItem("lastUpdatedDate", now.toLocaleString("en-US", optionsDate));
    localStorage.setItem("lastUpdatedTime", now.toLocaleString("en-US", optionsTime));
});

// Dropdown button logic remains the same
document.querySelectorAll('.dropdown-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const description = e.target.closest('figure').querySelector('.image-description');
        const isOpen = description.classList.toggle('open');
        btn.classList.toggle('rotate', isOpen);
    });
});
