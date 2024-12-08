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

document.querySelectorAll('.dropdown-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const description = e.target.closest('figure').querySelector('.image-description');
        const isOpen = description.classList.toggle('open');
        btn.classList.toggle('rotate', isOpen);
    });
});

