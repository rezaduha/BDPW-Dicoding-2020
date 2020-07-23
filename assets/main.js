document.addEventListener("DOMContentLoaded", () => {
  const themeStyleSheet = document.getElementById("theme");
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    themeStyleSheet.href = storedTheme;
  }

  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    if (themeStyleSheet.href.includes("light")) {
      themeStyleSheet.href = "./assets/styles/style-dark.css";
    } else {
      themeStyleSheet.href = "./assets/styles/style-light.css";
    }
    localStorage.setItem("theme", themeStyleSheet.href);
  });
});
