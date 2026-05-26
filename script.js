document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const appNav = document.getElementById("appNav");

  if (navToggle && appNav) {
    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("menu-open");
    });

    appNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
      });
    });
  }

  document.querySelectorAll(".dropdown-btn").forEach((btn) => {
    const figure = btn.closest("figure");
    const description = figure.querySelector(".image-description");

    if (!description) return;

    description.style.maxHeight = "0";
    description.style.overflow = "hidden";

    btn.addEventListener("click", () => {
      const isOpen = btn.classList.toggle("rotate");
      if (isOpen) {
        description.style.maxHeight = description.scrollHeight + "px";
        description.classList.add("open");
      } else {
        description.style.maxHeight = "0";
        description.classList.remove("open");
      }
    });
  });

  document.querySelectorAll(".dropdown-button-bbocw").forEach((btn) => {
    const figure = btn.closest("figure");
    const description = figure.querySelector(".image-description");

    if (!description) return;

    description.style.maxHeight = "0";
    description.style.overflow = "hidden";

    btn.addEventListener("click", () => {
      const isOpen = btn.classList.toggle("rotate");
      if (isOpen) {
        description.style.maxHeight = description.scrollHeight + "px";
        description.classList.add("open");
      } else {
        description.style.maxHeight = "0";
        description.classList.remove("open");
      }
    });
  });

  const lastUpdatedElement = document.getElementById("last-updated-time");
  const lastActiveElement = document.getElementById("last-updated-time2");

  const manualDate = "September 1, 2025";
  const manualTime = "10:00 AM";

  if (lastUpdatedElement) lastUpdatedElement.textContent = manualDate;
  if (lastActiveElement) lastActiveElement.textContent = manualTime;

  const calculateExperience = () => {
    const startDate = new Date("2023-04-12");
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (currentDate.getDate() < startDate.getDate()) {
      months--;
      if (months < 0) {
        years--;
        months += 12;
      }
    }

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

    const experienceElement = document.getElementById("experience");
    if (experienceElement) {
      experienceElement.textContent = experienceString;
    }
  };

  calculateExperience();
});
