document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".page");
    const totalPages = pages.length;

    pages.forEach((page, index) => {
        // Se a página tiver a classe 'no-number', nós pulamos ela
        if (page.classList.contains("no-number")) {
            return;
        }

        // Cria o rodapé apenas nas páginas permitidas
        let footer = page.querySelector(".page-footer");
        if (!footer) {
            footer = document.createElement("div");
            footer.className = "page-footer";
            page.appendChild(footer);
        }

        // Insere a numeração
        footer.textContent = `pág. ${index + 1}`;
    });
});