document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('.dropdown-btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const description = e.target.closest('figure').querySelector('.image-description');
            const isOpen = description.classList.toggle('open');
            btn.classList.toggle('rotate', isOpen);
        });
    });
});
