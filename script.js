// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  // Scroll-to-top button
  const scrollTopBtn = document.getElementById("scrollTop");
  window.onscroll = () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  };
  scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  
  // Toggle list (Programs section)
  function toggleSection(id) {
    const el = document.getElementById(id);
    el.classList.toggle("hidden");
  
    if (!el.classList.contains("hidden")) {
      const items = el.querySelectorAll("li");
      items.forEach((item, index) => {
        item.style.animation = `fadeUp 0.4s ease forwards ${index * 0.2}s`;
      });
    }
  }
  
  // FAQ toggle
  function toggleFAQ(btn) {
    const ans = btn.nextElementSibling;
    ans.classList.toggle("hidden");
  }
  
  // Search filter in Projects
  document.getElementById("projectSearch").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll("#projectList li").forEach((li) => {
      li.style.display = li.textContent.toLowerCase().includes(term) ? "" : "none";
    });
  });
  
  // Animate sections on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );
  
  document.querySelectorAll(".animate").forEach((section) => {
    observer.observe(section);
  });
  