document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burgerBtn");
  const menu = document.getElementById("navMenu");

  if (!burger || !menu) {
    console.warn("Fehlt burgerBtn oder navMenu im HTML!");
    return;
  }

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("open");
  });
});
