let paginaAtual = 0;
const paginas = document.querySelectorAll('.container .page');
const totalPaginas = paginas.length;

function atualizarLivro() {
    // Esconde todas as páginas e remove a classe ativa
    paginas.forEach((pagina, index) => {
        pagina.classList.remove('ativa');
        if (index === paginaAtual) {
            pagina.classList.add('ativa');
        }
    });

    // Atualiza o contador de páginas
    const contador = document.getElementById('page-counter');
    if (contador) {
        contador.innerText = `Página ${paginaAtual + 1} de ${totalPaginas}`;
    }

    // Habilita ou desabilita os botões de navegação nos extremos
    const btnPrev = document.getElementById('prev-btn');
    const btnNext = document.getElementById('next-btn');
    
    if (btnPrev) btnPrev.disabled = paginaAtual === 0;
    if (btnNext) btnNext.disabled = paginaAtual === totalPaginas - 1;

    // Rola a tela suavemente para o topo ao mudar de página
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mudarPagina(direcao) {
    paginaAtual += direcao;
    
    // Garante que não ultrapasse os limites
    if (paginaAtual < 0) {
        paginaAtual = 0;
    } else if (paginaAtual >= totalPaginas) {
        paginaAtual = totalPaginas - 1;
    }

    atualizarLivro();
}

// Evento para capturar as setas do teclado
document.addEventListener('keydown', (event) => {
    // Evita conflito se o usuário estiver digitando em algum campo de texto (caso adicione um dia)
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        return;
    }

    if (event.key === 'ArrowRight') {
        // Seta para a direita avança a página
        mudarPagina(1);
    } else if (event.key === 'ArrowLeft') {
        // Seta para a esquerda volta a página
        mudarPagina(-1);
    }
});

// Inicializa o livro na primeira página ao carregar
document.addEventListener('DOMContentLoaded', () => {
    atualizarLivro();
});


// Torna os itens do sumário clicáveis com base no atributo data-page
document.querySelectorAll('.toc tr[data-page]').forEach(linha => {
    linha.addEventListener('click', () => {
        const paginaDestino = parseInt(linha.getAttribute('data-page'));
        
        // Verifica se a página é válida
        if (!isNaN(paginaDestino) && paginaDestino >= 0 && paginaDestino < totalPaginas) {
            paginaAtual = paginaDestino;
            atualizarLivro();
        }
    });
});