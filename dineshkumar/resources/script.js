document.addEventListener("DOMContentLoaded", () => {

    // Dropdown functionality for descriptions
    document.querySelectorAll('.dropdown-btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const description = e.target.closest('figure').querySelector('.image-description');
            const isOpen = description.classList.toggle('open');
            btn.classList.toggle('rotate', isOpen);
        });
    });

    const lastUpdatedElement = document.getElementById('last-updated-time');
    const lastActiveElement = document.getElementById('last-updated-time2');

    // Set your desired values here
    const manualDate = "December 23, 2024"; // Set the Last Updated date
    const manualTime = "1:00 PM";          // Set the Last Active time

    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = manualDate;
    }

    if (lastActiveElement) {
        lastActiveElement.textContent = manualTime;
    }
});
