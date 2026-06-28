// Carrito de compras
let carrito = [];
const cartCount = document.querySelector('.cart-count');

// Event listener para botones "Añadir al Carrito"
document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.producto-card');
        const producto = {
            nombre: card.querySelector('h4').textContent,
            precio: card.querySelector('.precio').textContent,
            id: Date.now()
        };
        
        carrito.push(producto);
        actualizarCarrito();
        
        // Efecto visual
        this.textContent = '✨ ¡Agregado! ✨';
        setTimeout(() => {
            this.textContent = 'Añadir al Carrito 🛍️';
        }, 1500);
    });
});

function actualizarCarrito() {
    cartCount.textContent = carrito.length;
    console.log('Carrito actualizado:', carrito);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Cargar carrito desde localStorage
window.addEventListener('load', () => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        cartCount.textContent = carrito.length;
    }
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación de carga
window.addEventListener('load', () => {
    document.querySelectorAll('.producto-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
    });
});

// Agregar estilos de animación
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Formulario de contacto
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! 💌 Te responderemos pronto.');
        this.reset();
    });
}

// Efecto parallax en hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// Cambio de color en hover para decoraciones
document.querySelectorAll('.decoration').forEach(dec => {
    dec.addEventListener('mouseenter', function() {
        this.style.fontSize = '2.5rem';
    });
    dec.addEventListener('mouseleave', function() {
        this.style.fontSize = '2rem';
    });
});

// Botón "Ver Colección" scroll a productos
const btnPrincipal = document.querySelector('.btn-primary');
if (btnPrincipal) {
    btnPrincipal.addEventListener('click', function() {
        document.querySelector('#productos').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

console.log('✨ ¡Bienvenida a flow_y7k! ✨');
