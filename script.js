// ==========================================
// SCROLL SUAVE Y NAVEGACIÓN
// ==========================================

// Agregar evento a los enlaces de navegación para scroll suave
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') !== '#') {
            e.preventDefault();
        }
    });
});

// ==========================================
// BOTÓN "VER PRODUCTOS"
// ==========================================

const verProductosBtn = document.getElementById('verProductosBtn');

verProductosBtn.addEventListener('click', () => {
    const productosSection = document.getElementById('productos');
    productosSection.scrollIntoView({ behavior: 'smooth' });
    
    // Agregar animación al botón
    verProductosBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        verProductosBtn.style.transform = 'scale(1)';
    }, 200);
    
    // Mostrar confirmación visual
    showNotification('¡Mira nuestros deliciosos productos! 🤤');
});

// ==========================================
// BOTÓN "IR AL INICIO"
// ==========================================

const btnTop = document.getElementById('btnTop');

// Mostrar/ocultar botón según scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTop.classList.add('visible');
    } else {
        btnTop.classList.remove('visible');
    }
});

// Acción del botón ir al inicio
btnTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// EFECTOS HOVER EN TARJETAS
// ==========================================

const productCards = document.querySelectorAll('.producto-card');

productCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        // Efecto de rotación sutil
        card.style.perspective = '1000px';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});

// ==========================================
// FUNCIÓN DE NOTIFICACIÓN
// ==========================================

function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #FFB6D9;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        font-weight: 600;
        animation: slideInRight 0.3s ease;
        z-index: 1000;
        max-width: 300px;
    `;

    // Agregar el programa de estilos para la animación
    if (!document.querySelector('style[data-notification]')) {
        const style = document.createElement('style');
        style.setAttribute('data-notification', 'true');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @keyframes slideOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Remover notificación después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ==========================================
// INTERACTIVIDAD CON REDES SOCIALES
// ==========================================

const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const titles = {
            'Facebook': '¡Síguenos en Facebook! 👍',
            'Instagram': '¡Síguenos en Instagram! 📸',
            'WhatsApp': '¡Chatea con nosotros! 💬'
        };
        
        const title = link.getAttribute('title');
        showNotification(titles[title] || '¡Gracias por tu interés!');
    });
});

// ==========================================
// EFECTO PARALLAX EN HERO SECTION
// ==========================================

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition < 600) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// ==========================================
// CONTADOR DE VISITAS (OPCIONAL)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    let visits = localStorage.getItem('agrigento-visits') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('agrigento-visits', visits);

    // Log en consola (para desarrollo)
    console.log(`Bienvenido a Agrigento! Visitas: ${visits}`);
});

// ==========================================
// VALIDACIÓN DE FORMULARIO DE CONTACTO (PREPARADO)
// ==========================================

// Si se agrega un formulario en el futuro, puede usarse:
/*
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
*/

// ==========================================
// INICIALIZACIÓN
// ==========================================

console.log('✨ Agrigento Pastelería & Cafetería está lista!');
console.log('🎂 Bienvenido a nuestra página');

// Agregar clase 'loaded' al body cuando el documento esté completamente cargado
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});