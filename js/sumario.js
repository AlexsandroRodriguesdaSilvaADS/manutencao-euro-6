function toggleSumarioOverlay() {
    const overlay = document.getElementById('sumarioOverlay');
    overlay.classList.toggle('active');
}

function navegarParaPagina(row) {
    const targetPageNum = row.getAttribute('data-page');
    // Fecha o overlay ao clicar em um item
    toggleSumarioOverlay();

    // Lógica para alternar a página ativa (ajuste conforme a função de paginação existente no seu projeto)
    const pages = document.querySelectorAll('.container .page');
    pages.forEach((page, index) => {
        page.classList.remove('ative');
        if (index == targetPageNum) {
            page.classList.add('ative');
        }
    });
}