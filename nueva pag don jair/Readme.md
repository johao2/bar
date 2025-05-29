# El Bar de Don Jair - Aplicación Web

Aplicación web completa para "El Bar de Don Jair", un negocio universitario que ofrece servicios de bar, papelería, cyber y venta de útiles escolares.

## Características

- 🍔 Menú completo de bar con comidas y bebidas
- 📄 Servicios de papelería (impresiones, fotocopias, etc.)
- 💻 Servicios de cyber (computadoras, escaneo, etc.)
- 📚 Catálogo de útiles escolares
- 📱 Diseño responsivo (adaptable a móviles y tablets)
- 📊 Panel de administración para gestión de inventario

## Tecnologías Utilizadas

- **Frontend**:
  - HTML5
  - CSS3 (con estilos responsivos)
  - JavaScript (vanilla)

- **Backend**:
  - Node.js
  - Express.js

- **Herramientas de Administración**:
  - Python (script para procesamiento de datos)

## Requisitos Previos

- Node.js (v14 o superior)
- npm (viene con Node.js)
- Python 3.6+ (para herramientas de administración)

## Instalación

1. Clonar este repositorio:
   ```bash
   git clone https://github.com/tuusuario/el-bar-de-don-jair.git
   cd el-bar-de-don-jair
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Para las herramientas de administración (opcional):
   ```bash
   pip install -r requirements.txt
   ```

## Ejecución

1. Iniciar el servidor:
   ```bash
   npm start
   ```

2. Para desarrollo (con recarga automática):
   ```bash
   npm run dev
   ```

3. Acceder a la aplicación en el navegador:
   ```
   http://localhost:3000
   ```

## Estructura de la Aplicación

```
el-bar-de-don-jair/
├── public/                 # Archivos estáticos
├── server.js               # Servidor Node.js
├── routes/                 # Rutas de la API
├── models/                 # Modelos de datos
├── utils/                  # Utilidades y herramientas
└── data/                   # Directorio para archivos de datos
```

## Uso de la Herramienta de Administración

La herramienta de administración en Python permite gestionar el inventario, procesar ventas y generar informes.

```bash
# Agregar ítem al inventario
python utils/admin_tool.py add --category bar --name "Café Americano" --price 20 --stock 50 --description "Café negro tradicional"

# Generar informe de ventas
python utils/admin_tool.py report --csv

# Ver alertas de stock bajo
python utils/admin_tool.py alert --threshold 10
```

## Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

## Contacto

Para preguntas o sugerencias:
- Email: info@bardonjair.com
- Teléfono: (123) 456-7890

---

Desarrollado con ❤️ para El Bar de Don Jair