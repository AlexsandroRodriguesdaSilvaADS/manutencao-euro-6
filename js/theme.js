function updateThemeUI(theme) {
    const btnText = document.getElementById('themeText');
    const btnIcon = document.getElementById('themeIcon');
    if (theme === 'dark') {
        btnText.textContent = 'Modo Claro';
        btnIcon.textContent = '☀️';
    } else {
        btnText.textContent = 'Modo Escuro';
        btnIcon.textContent = '🌙';
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'dark';

    if (currentTheme === 'dark') {
        newTheme = 'light';
    } else if (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        newTheme = 'light';
    }

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeUI(newTheme);
}

// Inicialização do Tema baseado no LocalStorage ou Preferência do Sistema
(function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeUI(savedTheme);
    } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        updateThemeUI(systemPrefersDark ? 'dark' : 'light');
    }
})();