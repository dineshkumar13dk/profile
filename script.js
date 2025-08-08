document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown-btn").forEach((btn) => {
    const figure = btn.closest("figure");
    const description = figure.querySelector(".image-description");

    // Initially collapse the content
    description.style.maxHeight = "0";
    description.style.overflow = "hidden";

    btn.addEventListener("click", () => {
      const isOpen = btn.classList.toggle("rotate");

      if (isOpen) {
        // Expand
        description.style.maxHeight = description.scrollHeight + "px";
        description.classList.add("open");
      } else {
        // Collapse
        description.style.maxHeight = "0";
        description.classList.remove("open");
      }
    });
  });

  // Manual timestamp setup
  const lastUpdatedElement = document.getElementById("last-updated-time");
  const lastActiveElement = document.getElementById("last-updated-time2");

  const manualDate = "August 9, 2025";
  const manualTime = "12:00 AM";

  if (lastUpdatedElement) lastUpdatedElement.textContent = manualDate;
  if (lastActiveElement) lastActiveElement.textContent = manualTime;
});
