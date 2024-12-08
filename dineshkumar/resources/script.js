document.addEventListener("DOMContentLoaded", () => {
    const lastUpdatedElement = document.getElementById("last-updated-time");
    const lastUpdatedElement2 = document.getElementById("last-updated-time2");

    const now = new Date();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const now2 = new Date();
    const options2 = {
        hour: "2-digit",
        minute: "2-digit"
    };

    // Format the time and display
    lastUpdatedElement.textContent = now.toLocaleString("en-US", options);
    lastUpdatedElement2.textContent = now2.toLocaleString("en-US", options2);
});

document.querySelectorAll('.dropdown-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const description = e.target.closest('figure').querySelector('.image-description');
        const isOpen = description.classList.toggle('open');
        btn.classList.toggle('rotate', isOpen);
    });
});

