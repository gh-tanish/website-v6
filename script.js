document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("theme-toggle");

  /* =========================
     1. SYSTEM THEME SUPPORT
  ========================= */

  const savedTheme = localStorage.getItem("theme");

  if (!savedTheme) {
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

    if (prefersLight) {
      document.body.classList.add("light-mode");
    }
  } else if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }

  /* =========================
     2. UPDATE BUTTON TEXT
  ========================= */

  function updateButton() {
    if (!toggleBtn) return;

    if (document.body.classList.contains("light-mode")) {
      toggleBtn.textContent = "⏾ Dark Mode";
    } else {
      toggleBtn.textContent = "𖤓 Light Mode";
    }
  }

  updateButton();

  /* =========================
     3. THEME TOGGLE
  ========================= */

  if (toggleBtn) {

    toggleBtn.addEventListener("click", () => {

      document.body.classList.toggle("light-mode");

      if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
      }

      updateButton();
    });

  }

  /* =========================
     4. ACTIVE NAV LINK HIGHLIGHT
  ========================= */

  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    if (link.href === window.location.href) {
      link.style.opacity = "1";
      link.style.textDecoration = "underline";
    }
  });

  /* =========================
     5. SMOOTH PAGE READY STATE
  ========================= */

  document.body.classList.add("loaded");

});

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});