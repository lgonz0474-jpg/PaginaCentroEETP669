// ==================== ACORDEÓN SUAVE ====================

// Seleccionamos todos los headers del acordeón
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling; // El panel que se abre

        // Si el header ya está activo -> cerramos
        if (header.classList.contains('active')) {
            header.classList.remove('active');
            body.style.maxHeight = body.scrollHeight + "px"; // setea altura antes de colapsar
            setTimeout(() => {
                body.style.maxHeight = null; // colapsa suavemente
            }, 20);
        } else {
            // Cerramos todos los demás
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.style.maxHeight = null;
            });

            // Activamos el actual
            header.classList.add('active');
            body.style.maxHeight = body.scrollHeight + "px"; // se expande suavemente
        }
    });
});
