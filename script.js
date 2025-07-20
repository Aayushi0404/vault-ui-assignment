document.getElementById("projectSearch").addEventListener("input", e => {
    const filter = e.target.value.toLowerCase();
    document.querySelectorAll("#projectList li").forEach(li => {
      li.style.display = li.textContent.toLowerCase().includes(filter) ? "block" : "none";
    });
  });
  const accordionBtns = document.querySelectorAll(".accordion-btn");
  accordionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });
    