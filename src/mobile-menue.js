export function toggleMobileMenu() {
  const openBtn = document.getElementById("open-menu");
  const closeBtn = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");


  
  if (mobileMenu && openBtn && closeBtn) {
    openBtn.addEventListener("click", () => {
      mobileMenu.style.left = "0"; // إظهار المينيو
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.style.left = "-100%"; // إخفاء المينيو
    });
  } else {
    console.warn("Mobile menu elements not found in the DOM.");
  }
}
