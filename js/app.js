var selection = document.querySelectorAll(".selection");

selection.forEach((choice) => {
  choice.addEventListener("click", () => {
    selection.forEach((s) => s.classList.remove("selected")) 
    choice.classList.add("selected");
  });
});
