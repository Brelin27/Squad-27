document.addEventListener("DOMContentLoaded", () => {
  fetch("/B - Cabecalho/cabecalho.html")
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML("afterbegin", html);

      // Verifica se imagens carregaram
      document.querySelectorAll("header img").forEach(img => {
        if (!img.complete || img.naturalWidth === 0) {
          console.warn("Imagem do cabeçalho não carregou:", img.src);
        }
      });

      // Abrir/fechar menu mobile
      const hamburger = document.querySelector(".hamburger");
      const mobileMenu = document.querySelector(".mobile-menu");

      if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", () => {
          const expanded = hamburger.getAttribute("aria-expanded") === "true";
          hamburger.setAttribute("aria-expanded", String(!expanded));
          mobileMenu.setAttribute("aria-hidden", String(expanded));
        });
      }
    })
    .catch(err => console.error("Erro ao carregar cabeçalho:", err));
});
