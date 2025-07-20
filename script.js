document.getElementById("projectSearch").addEventListener("input", e => {
    const filter = e.target.value.toLowerCase();
    document.querySelectorAll("#projectList li").forEach(li => {
      li.style.display = li.textContent.toLowerCase().includes(filter) ? "block" : "none";
    });
  });
  