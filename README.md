# E-Commerce Thesis - Qwik Resumability

Implementación de un sitio web de e-commerce utilizando **Qwik** con el método de renderizado **Resumability** como parte de una investigación de tesis comparativa sobre métodos de renderizado web modernos.

## 📋 Descripción del Proyecto

Este proyecto forma parte de la tesis "Análisis comparativo de los métodos de renderizado web PRR, Islands y Resumability para la elaboración de un e-commerce en 2025" de la Universidad Latinoamericana de Ciencia y Tecnología, Costa Rica.

El objetivo es evaluar el rendimiento del método **Resumability** implementado en Qwik, comparándolo con:
- **Partial Pre-rendering (PPR)** en Next.js
- **Islands Architecture** en Astro

### ¿Qué es Resumability?

Resumability es un método de renderizado que elimina completamente la necesidad de hydration. En lugar de reenviar grandes paquetes de JavaScript para "reactivar" una aplicación en el cliente, Qwik serializa el estado de la aplicación y carga únicamente el código necesario cuando el usuario interactúa con un componente específico.

## 🚀 Características

- ✅ Flujo completo de e-commerce (Home, Products, Product Detail, Checkout)
- ✅ Autenticación de usuario simulada
- ✅ Carrito de compras con persistencia local
- ✅ Historial de órdenes
- ✅ Búsqueda y filtrado de productos
- ✅ Integración con Fake Store API
- ✅ Diseño responsivo con Tailwind CSS
- ✅ Optimizado para mediciones de rendimiento (Core Web Vitals)

## 📊 Métricas Evaluadas

El proyecto fue diseñado específicamente para medir:
- **LCP** (Largest Contentful Paint)
- **INP** (Interaction to Next Paint)
- **CLS** (Cumulative Layout Shift)
- **SI** (Speed Index)
- **TBT** (Total Blocking Time)

## 🛠️ Tecnologías Utilizadas

- **Framework:** Qwik 1.17.1
- **Routing:** Qwik City
- **Estilos:** Tailwind CSS 3.4.1
- **API:** Fake Store API
- **Deployment:** Vercel Edge Functions
- **TypeScript:** 5.3.3

## 📦 Instalación
```bash
# Clonar el repositorio
git clone https://github.com/frankramirezsoto/ecommerce-thesis-qwik-resumable.git

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:5174`

## 🏗️ Scripts Disponibles
```bash
npm run dev          # Modo desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run deploy       # Deploy a Vercel
```

## 📁 Estructura del Proyecto
```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de UI base
│   ├── CartDrawer.tsx
│   ├── Navbar.tsx
│   └── ProductCard.tsx
├── contexts/           # Context API para estado global
├── lib/               # Utilidades y configuraciones
├── routes/            # Páginas de la aplicación
│   ├── index.tsx      # Home
│   ├── products/      # Catálogo
│   ├── product/[id]/  # Detalle de producto
│   ├── checkout/      # Proceso de compra
│   ├── orders/        # Historial de órdenes
│   └── auth/          # Autenticación
└── types.ts           # Definiciones de TypeScript
```

## 🌐 Demo en Vivo

**Sitio desplegado:** [https://e-commerce-thesis-qwik-resumability.vercel.app/](https://e-commerce-thesis-qwik-resumability.vercel.app/)

**Repositorio:** [https://github.com/frankramirezsoto/ecommerce-thesis-qwik-resumable](https://github.com/frankramirezsoto/ecommerce-thesis-qwik-resumable)

## 📝 Metodología de Investigación

### Páginas Implementadas
1. **Home** - Página principal con productos destacados
2. **Products** - Catálogo completo con filtros
3. **Product Detail** - Información detallada del producto
4. **Checkout** - Proceso de pago

### Mediciones Realizadas
- 5 repeticiones por combinación (método × página × dispositivo)
- Mediciones en dispositivos móviles y de escritorio
- Herramientas: Google Lighthouse y Chrome DevTools Performance

## 🔬 Resultados de la Investigación

Según los resultados obtenidos en la tesis:

**Dispositivo Móvil:**
- ✅ Excelente TBT (2.00 ms promedio)
- ✅ Mejor Speed Index (1.41 s promedio)
- ⚠️ INP elevado (147.80 ms promedio)

**Dispositivo Escritorio:**
- ✅ INP óptimo (3.60 ms promedio)
- ✅ TBT perfecto (0.00 ms)
- ✅ Mejor rendimiento general

**Puntuación Final:** 0.74 (el más alto entre los tres métodos evaluados)

## 👨‍🎓 Autor

**Franklin Josué Ramirez Soto**
- Universidad Latinoamericana de Ciencia y Tecnología
- Programa de Bachillerato en Ingeniería Informática
- Año: 2025

## 📄 Licencia

Este proyecto fue desarrollado con fines académicos como parte de un trabajo de investigación de tesis.

## 🔗 Proyectos Relacionados

- [E-Commerce Next.js (PPR)](https://github.com/frankramirezsoto/ecommerce-thesis-nextjs-ppr)
- [E-Commerce Astro (Islands)](https://github.com/frankramirezsoto/ecommerce-thesis-astro-islands)

---

**Nota:** Este proyecto utiliza la Fake Store API para datos de productos de prueba. No se requiere configuración de backend adicional.