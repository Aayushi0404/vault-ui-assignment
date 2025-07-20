document.querySelector(".btn").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#features").scrollIntoView({ behavior: "smooth" });
  });
  