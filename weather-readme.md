✨ # flow_y7k Weather Dashboard ✨

## 🌤️ Tu Dashboard de Clima con Estilo

Un hermoso dashboard de clima en línea con diseño **Pink Y2K + Verde Menta** que fetch datos en tiempo real de la API pública de OpenWeatherMap.

---

## 🎨 Características

✨ **Diseño Aesthetic Pink Y2K + Verde Menta**
- Paleta de colores: rosa pastel, pink fuerte, verde menta y crema
- Fuentes decorativas handwriting
- Puntos decorativos en el fondo
- Animaciones suaves y adorables

🌡️ **Funcionalidades Principales**
- 🌍 **Búsqueda por ciudad** - Encuentra el clima de cualquier lugar
- 📍 **Geolocalización automática** - Detecta tu ubicación automáticamente
- 🌤️ **Clima actual** - Temperatura, descripción y condiciones
- 📊 **Detalles completos** - Humedad, viento, presión, visibilidad
- 📅 **Pronóstico de 5 días** - Temperaturas máxima y mínima
- 🔄 **Actualización en tiempo real** - Datos siempre frescos

---

## 📁 Estructura de Archivos

```
mi-proyecto-tienda-online/
├── index.html              # Tienda de ropa flow_y7k
├── style.css               # Estilos de la tienda
├── script.js               # Lógica de la tienda
├── weather.html            # Dashboard de clima
├── weather-style.css       # Estilos del dashboard
├── weather-script.js       # Lógica y API del clima
└── README.md               # Este archivo
```

---

## 🚀 Cómo Usar

### 1. **Ver el sitio en vivo:**
   - **Tienda:** `https://5lolcum.github.io/mi-proyecto-tienda-online`
   - **Clima:** `https://5lolcum.github.io/mi-proyecto-tienda-online/weather.html`

### 2. **Funciones del Dashboard:**

#### 🔍 **Buscar por Ciudad**
- Escribe el nombre de cualquier ciudad
- Presiona Enter o haz click en "Buscar"
- El clima se actualiza automáticamente

#### 📍 **Mi Ubicación**
- Click en el botón "Mi Ubicación"
- Permite el acceso a tu ubicación
- Muestra el clima de donde estés

#### 📊 **Información Detallada**
- **Temperatura actual** - En °C
- **Descripción del clima** - Con emoji
- **Humedad** - Porcentaje
- **Viento** - En km/h
- **Presión** - En mb
- **Visibilidad** - En km

#### 📅 **Pronóstico de 5 Días**
- Temperatura máxima y mínima
- Descripción del clima
- Emojis decorativos

---

## 🎨 Paleta de Colores

```css
:root {
    --primary-pink: #FFB6D9;      /* Rosa pastel principal */
    --dark-pink: #FF6BA6;         /* Rosa oscuro */
    --light-pink: #FFE5F0;        /* Rosa muy claro */
    --mint-green: #98D8C8;        /* Verde menta principal */
    --dark-mint: #6BC5A4;         /* Verde menta oscuro */
    --light-mint: #E8F9F5;        /* Verde menta claro */
    --cream: #FFF5F7;             /* Crema/background */
    --text-dark: #8B4F7A;         /* Texto principal */
    --text-light: #D4A5C3;        /* Texto secundario */
    --accent: #FF1493;            /* Acento (hot pink) */
}
```

---

## 🔌 API Usada

### OpenWeatherMap (Gratuita)
- **Endpoint:** `api.openweathermap.org`
- **API Key:** Incluida en el código
- **Datos:** Clima actual y pronóstico
- **Idioma:** Español

**Funcionalidades:**
- Geolocalización (lat/lon)
- Búsqueda por ciudad
- Pronóstico de 5 días
- Condiciones detalladas

---

## 💡 Cómo Funciona

### 1. **Búsqueda por Ciudad**
```javascript
- Usuario escribe ciudad
- Convertir ciudad → coordenadas (lat/lon)
- Fetch clima en esas coordenadas
- Mostrar datos
```

### 2. **Geolocalización**
```javascript
- Usuario da permiso de ubicación
- Obtener lat/lon del navegador
- Fetch clima en esa ubicación
- Mostrar datos
```

### 3. **Pronóstico**
```javascript
- Agrupar datos por día
- Calcular max/min de temperatura
- Mostrar 5 días principales
- Animar entrada
```

---

## 🛠️ Personalización

### Cambiar Ciudad por Defecto
En `weather-script.js`, línea ~150:
```javascript
searchWeather('Madrid'); // Cambia 'Madrid' por otra ciudad
```

### Cambiar API Key
En `weather-script.js`, línea ~1:
```javascript
const API_KEY = 'tu-api-key-aqui';
```
[Obtén tu API Key gratuita aquí](https://openweathermap.org/api)

### Cambiar Colores
En `weather-style.css`, líneas 9-19:
```css
:root {
    --primary-pink: #tu-color;
    --mint-green: #tu-color;
    /* etc */
}
```

### Cambiar Idioma
En `weather-script.js`, search requests:
```javascript
// Cambia &lang=es por:
&lang=en  // Inglés
&lang=fr  // Francés
&lang=de  // Alemán
```

---

## 📱 Responsive

✅ **100% Mobile Friendly**
- Se adapta a cualquier tamaño de pantalla
- Botones optimizados para touch
- Grid flexible para productos
- Menú responsivo

---

## 🎁 Próximas Mejoras

- 💾 Guardar ciudades favoritas
- 📊 Gráficos de temperatura
- 🗺️ Mapa interactivo
- 🔔 Alertas de clima
- 📱 App de escritorio (Electron)
- 🌍 Soporte para más idiomas
- 🎵 Sonidos interactivos

---

## ❓ Preguntas Frecuentes

**P: ¿Funciona sin API Key?**
R: No, necesitas una gratuita de OpenWeatherMap (muy fácil de obtener)

**P: ¿Qué pasa si no permito geolocalización?**
R: No hay problema, puedes buscar ciudades manualmente

**P: ¿Funciona en móvil?**
R: ¡Sí! 100% responsivo

**P: ¿Qué datos muestra?**
R: Clima actual + pronóstico de 5 días + detalles (humedad, viento, etc)

---

## 📞 Créditos

Hecho con mucho amor ✨ para **flow_y7k**

**Datos del clima:** OpenWeatherMap API
**Diseño:** Pink Y2K + Verde Menta Aesthetic
**Responsivo:** 100%

---

¡Disfruta tu dashboard de clima! 🌤️💕🌿

Made with 💕 by 5lolcum
