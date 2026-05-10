const toggleBtn = document.getElementById("theme-toggle");

/* LOAD SAVED MODE */
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");

  if (toggleBtn) {
    toggleBtn.textContent = "⏾ Dark Mode";
  }
}

/* BUTTON CLICK */
if (toggleBtn) {

  toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    /* SAVE MODE */
    if (document.body.classList.contains("light-mode")) {

      localStorage.setItem("theme", "light");

      toggleBtn.textContent = "⏾ Dark Mode";

    } else {

      localStorage.setItem("theme", "dark");

      toggleBtn.textContent = "𖤓 Light Mode";
    }

  });

}