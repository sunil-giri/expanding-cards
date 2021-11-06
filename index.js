const panels = document.querySelectorAll(".panels");

console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panels.forEach((val) => {
      val.classList.remove("active");
    });
    panel.classList.add("active");
  });
});
