document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("theme-toggle");

  /* =========================
     1. MOBILE BROWSER BAR COLOR
  ========================= */

  let themeMeta = document.querySelector('meta[name="theme-color"]');

  if (!themeMeta) {
    themeMeta = document.createElement("meta");
    themeMeta.name = "theme-color";
    document.head.appendChild(themeMeta);
  }

  function updateThemeColor() {

    if (document.body.classList.contains("light-mode")) {
      themeMeta.setAttribute("content", "#dfe5ee");
    } else {
      themeMeta.setAttribute("content", "#0b0b0f");
    }

  }

  /* =========================
     2. LOAD SAVED THEME ONLY
  ========================= */

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    document.documentElement.classList.add("light-mode");
  }

  /* =========================
     3. UPDATE BUTTON TEXT
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
  updateThemeColor();

  /* =========================
     4. THEME TOGGLE
  ========================= */

  if (toggleBtn) {

    toggleBtn.addEventListener("click", () => {

      document.body.classList.toggle("light-mode");
      document.documentElement.classList.toggle("light-mode");

      if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
      }

      updateButton();
      updateThemeColor();

    });

  }

  /* =========================
     5. ACTIVE NAV LINK HIGHLIGHT
  ========================= */

  const links = document.querySelectorAll("nav a");

  links.forEach(link => {

    if (link.href === window.location.href) {
      link.style.opacity = "1";
      link.style.textDecoration = "underline";
    }

  });

  /* =========================
     6. SMOOTH PAGE READY STATE
  ========================= */

  document.body.classList.add("loaded");

});

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

