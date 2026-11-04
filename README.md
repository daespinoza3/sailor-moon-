# 🌙 Sailor Moon App - Ionic & Angular

Aplicación móvil desarrollada con **Ionic Framework** y **Angular** que rinde homenaje a la legendaria serie animada **Sailor Moon**, aplicando una arquitectura limpia (Modelos, Servicios y Páginas) y una estética visual cósmica cromada y metálica.

---

## ✨ Características

* **Arquitectura Limpia:**
  * **Modelos (`src/app/models/`):** Tipado estricto con interfaces de TypeScript (`Character`, `CharacterStats`, `CharacterCategory`).
  * **Servicios (`src/app/services/`):** `SailorService` con datos simulados y llamadas reactivas asíncronas mediante `Observable` y RxJS.
  * **Páginas (`src/app/pages/`):** Componentes Standalone desacoplados con lazy loading.
* **Elenco de la Serie Animada (12 Personajes):**
  * **Inner Senshi:** Sailor Moon, Sailor Mercury, Sailor Mars, Sailor Jupiter, Sailor Venus, Sailor Chibi Moon.
  * **Outer Senshi:** Sailor Uranus, Sailor Neptune, Sailor Pluto, Sailor Saturn.
  * **Aliados:** Tuxedo Mask (Endymion), Luna & Artemis.
  * Nombres originales y del doblaje latinoamericano, elementos, roles, frases célebres y estadísticas de combate.
* **Filtro por Categorías en Tiempo Real:** Selector mediante `ion-segment` para explorar por grupos.
* **Diseño y Estética Visual:**
  * Modo Oscuro por defecto (*Dark Mode*).
  * Acabados cromados y metálicos con reflejos de luz y bordes biselados.
  * Animaciones 3D fluidas con CSS (`perspective`, `rotateX`, tarjetas interactivas).
  * Soporte visual con avatares astronómicos de fallback ante lentitud de red.
* **Pantalla de Detalle:**
  * Navegación por ID (`/detail/:id`) mediante `ActivatedRoute`.
  * Cabecera con botón de retorno (`ion-back-button`).
  * Tarjetas de estadísticas interactivas con `ion-progress-bar`.

---

## 🚀 Requisitos Previos

* **Node.js** (versión 18 o superior)
* **npm**
* **Ionic CLI** (opcional, instalable globalmente con `npm install -g @ionic/cli`)

---

## 🛠️ Instalación y Ejecución

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd sailor-moon-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo local:
   ```bash
   ionic serve
   ```
   *(o alternativamente `npm start`)*

---

## 🧪 Pruebas y Calidad de Código

* **Ejecutar Pruebas Unitarias (Vitest):**
  ```bash
  npm run test:unit
  ```
* **Verificar Linting y Formato:**
  ```bash
  npm run lint
  ```
* **Compilación para Producción:**
  ```bash
  npm run build
  ```

