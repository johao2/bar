// main.js - Para incluir en la carpeta public

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // ==================== Navegación ====================
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Función para actualizar el enlace activo basado en la posición de desplazamiento
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY;
        
        // Obtener todas las secciones
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remover la clase activa de todos los enlaces
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Agregar la clase activa al enlace correspondiente
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Evento de desplazamiento para actualizar el enlace activo
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Desplazamiento suave para los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Actualizar URL con hash sin desplazamiento
                history.pushState(null, null, targetId);
                
                // Actualizar enlace activo
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // ==================== Formulario de Contacto ====================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores del formulario
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value || 'Consulta desde el sitio web',
                message: document.getElementById('message').value
            };
            
            // Mostrar indicador de carga
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            // En una aplicación real, enviarías estos datos al servidor mediante fetch
            // Simulación de envío para este ejemplo
            setTimeout(() => {
                // Mostrar mensaje de éxito
                alert(`¡Gracias ${formData.name}! Tu mensaje ha sido enviado. Te responderemos pronto en ${formData.email}.`);
                
                // Restablecer el formulario y el botón
                contactForm.reset();
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }, 1500);
            
            // Código para enviar datos reales al servidor usando fetch:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Mostrar mensaje de éxito
                    alert(data.message);
                    // Restablecer el formulario
                    contactForm.reset();
                } else {
                    // Mostrar error
                    alert('Error: ' + data.message);
                }
            })
            .catch(error => {
                alert('Error al enviar el formulario. Por favor, intente de nuevo.');
                console.error('Error:', error);
            })
            .finally(() => {
                // Restablecer el botón
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
            */
        });
    }
    
    // ==================== Cargar Productos Dinámicamente ====================
    // Función para cargar productos desde la API (simulado para esta demo)
    function loadProductsForSection(sectionId, categoryEndpoint) {
        const section = document.getElementById(sectionId);
        
        if (!section) return;
        
        // En una aplicación real, aquí harías una solicitud a tu API
        // fetch(`/api/products/${categoryEndpoint}`)...
        
        // Para esta demo, simularemos que los productos ya están cargados
        console.log(`Productos de ${categoryEndpoint} cargados correctamente`);
    }
    
    // Cargar productos para cada sección cuando sean visibles
    loadProductsForSection('bar', 'bar');
    loadProductsForSection('papeleria', 'papeleria');
    loadProductsForSection('cyber', 'cyber');
    loadProductsForSection('utiles', 'utiles');
    
    // ==================== Animaciones al desplazarse ====================
    // Función para animar elementos cuando entran en la vista
    function animateOnScroll() {
        const elements = document.querySelectorAll('.card, .service-item, .menu-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight * 0.8) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Aplicar estilos iniciales para animación
    const animatedElements = document.querySelectorAll('.card, .service-item, .menu-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Evento de desplazamiento para animar elementos
    window.addEventListener('scroll', animateOnScroll);
    
    // Ejecutar la animación cuando se carga la página
    animateOnScroll();
    
    // ==================== Modo Oscuro ====================
    // Esta funcionalidad se podría implementar en el futuro
    
    // ==================== Inicialización Final ====================
    // Actualizar el enlace de navegación activo al cargar la página
    updateActiveNavLink();
});