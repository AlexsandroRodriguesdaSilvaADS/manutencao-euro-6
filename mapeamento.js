document.addEventListener('DOMContentLoaded', () => {
  const hotspots = document.querySelectorAll('.hotspot');
  const modal = document.getElementById('zoomModal');
  const modalTitle = document.getElementById('modalTitle');
  const zoomView = document.getElementById('zoomView');
  const closeBtn = document.getElementById('closeBtn');

  // Adiciona evento de clique para cada ponto mapeado
  hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', () => {
      const title = hotspot.getAttribute('data-title');
      const zoomX = hotspot.getAttribute('data-zoom-x');
      const zoomY = hotspot.getAttribute('data-zoom-y');

      // Define o título e a posição do foco da imagem no modal
      modalTitle.textContent = title;
      zoomView.style.backgroundPosition = `${zoomX} ${zoomY}`;

      // Abre o modal
      modal.style.display = 'flex';
    });
  });

  // Fechar Modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});