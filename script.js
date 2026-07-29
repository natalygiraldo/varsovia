document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Filtrado dinámico por categorías ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const columns = document.querySelectorAll('.category-column');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Cambiar clase activa en los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Mostrar u ocultar columnas según el filtro
            columns.forEach(column => {
                if (filterValue === 'all' || column.getAttribute('data-category') === filterValue) {
                    column.style.display = 'block';
                } else {
                    column.style.display = 'none';
                }
            });
        });
    });

    // --- 2. Alternador de Modo Oscuro / Claro ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('.theme-icon');
    
    // Detectar preferencia del sistema o guardada
    const savedTheme = localStorage.getItem('varsovia-theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('varsovia-theme', newTheme);
        
        // Cambiar icono
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
});
