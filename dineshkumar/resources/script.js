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
        const isHidden = description.style.display === 'none' || description.style.display === '';
        description.style.display = isHidden ? 'block' : 'none';
        btn.classList.toggle('rotate', isHidden);
    });
});
