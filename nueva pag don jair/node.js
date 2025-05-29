// server.js - Servidor para la aplicación web El Bar de Don Jair
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

// Crear la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analizar datos JSON y formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal - Envía el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API para enviar mensajes de contacto
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validación básica
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Por favor, complete todos los campos requeridos.' });
    }
    
    // En una aplicación real, aquí almacenarías los datos en una base de datos
    // o enviarías un correo electrónico
    
    // Para este ejemplo, guardaremos los mensajes en un archivo JSON
    const contactData = {
        id: Date.now(),
        name,
        email,
        subject,
        message,
        date: new Date().toISOString()
    };
    
    // Leer el archivo de mensajes existente o crear uno nuevo
    try {
        let messages = [];
        if (fs.existsSync('messages.json')) {
            const data = fs.readFileSync('messages.json', 'utf8');
            messages = JSON.parse(data);
        }
        
        // Agregar el nuevo mensaje
        messages.push(contactData);
        
        // Guardar de vuelta al archivo
        fs.writeFileSync('messages.json', JSON.stringify(messages, null, 2));
        
        res.json({ success: true, message: 'Mensaje enviado correctamente. ¡Gracias por contactarnos!' });
    } catch (error) {
        console.error('Error al guardar el mensaje:', error);
        res.status(500).json({ success: false, message: 'Error al procesar su solicitud. Por favor, intente de nuevo más tarde.' });
    }
});

// API para obtener productos/servicios
app.get('/api/products/:category', (req, res) => {
    const { category } = req.params;
    let products = [];
    
    // En una aplicación real, estos datos vendrían de una base de datos
    switch (category) {
        case 'bar':
            products = [
                { id: 1, name: 'Café Americano', price: 20, description: 'Café negro tradicional' },
                { id: 2, name: 'Capuchino', price: 30, description: 'Café con leche espumosa' },
                { id: 3, name: 'Sandwich de Jamón y Queso', price: 35, description: 'Pan blanco con jamón y queso' },
                { id: 4, name: 'Torta de Milanesa', price: 45, description: 'Telera con milanesa, lechuga, jitomate y aguacate' },
                // Más productos...
            ];
            break;
        case 'papeleria':
            products = [
                { id: 1, name: 'Impresión B/N', price: 1, description: 'Por página, tamaño carta' },
                { id: 2, name: 'Impresión Color', price: 5, description: 'Por página, tamaño carta' },
                { id: 3, name: 'Fotocopias B/N', price: 0.5, description: 'Por página, tamaño carta' },
                { id: 4, name: 'Encuadernado', price: 25, description: 'Hasta 100 hojas' },
                // Más servicios...
            ];
            break;
        case 'cyber':
            products = [
                { id: 1, name: 'Uso de Computadora', price: 15, description: 'Por hora, incluye internet' },
                { id: 2, name: 'Escaneo', price: 5, description: 'Por página' },
                { id: 3, name: 'Quemado de CD', price: 15, description: 'Incluye CD virgen' },
                { id: 4, name: 'Videollamada', price: 25, description: 'Por hora en cabina privada' },
                // Más servicios...
            ];
            break;
        case 'utiles':
            products = [
                { id: 1, name: 'Libreta Profesional', price: 35, description: 'Cuadro chico, 100 hojas' },
                { id: 2, name: 'Bolígrafo BIC', price: 5, description: 'Negro, azul o rojo' },
                { id: 3, name: 'Lápiz del #2', price: 3, description: 'Con goma incluida' },
                { id: 4, name: 'Calculadora Científica', price: 150, description: 'Casio fx-991EX' },
                // Más productos...
            ];
            break;
        default:
            return res.status(404).json({ success: false, message: 'Categoría no encontrada' });
    }
    
    res.json({ success: true, products });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});