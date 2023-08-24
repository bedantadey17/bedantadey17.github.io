const dropdowns = document.querySelectorAll("details");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("toggle", (event) => {
    if (!dropdown.open) {
      const content = dropdown.querySelector("ul");
      content.scrollTop = 0; // Reset the scroll position to the top
    }
  });
});
