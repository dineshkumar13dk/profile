document.addEventListener("DOMContentLoaded", () => {
  // Existing dropdown functionality
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

  document.querySelectorAll(".dropdown-button-bbocw").forEach((btn) => {
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

  const manualDate = "September 1, 2025";
  const manualTime = "10:00 AM";

  if (lastUpdatedElement) lastUpdatedElement.textContent = manualDate;
  if (lastActiveElement) lastActiveElement.textContent = manualTime;

  // Calculate and display real-time experience
  const calculateExperience = () => {
    const startDate = new Date("2023-04-12"); // Start date: April 2023
    const currentDate = new Date(); // Current date

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    // Adjust if the current month is before the start month
    if (months < 0) {
      years--;
      months += 12;
    }

    // If the current day is before the start day, adjust months
    if (currentDate.getDate() < startDate.getDate()) {
      months--;
      if (months < 0) {
        years--;
        months += 12;
      }
    }

    // Format the experience string
    let experienceString = "";
    if (years > 0) {
      experienceString += `${years} year${years > 1 ? "s" : ""}`;
    }
    if (months > 0) {
      experienceString += `${years > 0 ? " and " : ""}${months} month${months > 1 ? "s" : ""}`;
    }
    if (years === 0 && months === 0) {
      experienceString = "Less than a month";
    }

    // Update the experience element
    const experienceElement = document.getElementById("experience");
    if (experienceElement) {
      experienceElement.textContent = experienceString;
    }
  };

  // Call the function to calculate and display experience
  calculateExperience();
});