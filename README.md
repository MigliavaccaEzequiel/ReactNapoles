# ReactNapoles

Proyecto desarrollado en el curso de React JS de Coderhouse. Se trata de una tienda online que permite navegar por categorías de productos, ver detalles y gestionar un carrito de compras de forma dinámica utilizando React y Firebase.

---

## 📦 Funcionalidades principales

- Navegación SPA con React Router DOM.
- Filtrado de productos por categoría y visualización de detalle individual.
- Formulario de checkout con envío de orden a Firebase y timestamp.
- Sistema de carrito con:
  - Agregado y eliminación de productos.
  - Visualización de cantidad total.
  - Vaciar carrito.
  - Alerta de confirmación mediante SweetAlert.
- Uso de contexto global (`React Context API`) para manejar el carrito de manera centralizada.
- Comunicación con Firebase/Firestore para obtener productos.
- Diseño responsivo básico y menú hamburguesa funcional.
- Alternancia de vistas mediante rutas dinámicas (`/categoria/:categoriaProducto` y `/item/:id`).

---

## 🛠️ Tecnologías y librerías

- [React](https://react.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Firebase / Firestore](https://firebase.google.com/)
- [Bootstrap](https://getbootstrap.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Vite](https://vitejs.dev/) (para el entorno de desarrollo)

---

## 🌐 Deploy

Podés ver el proyecto en línea en Vercel:  
🔗 [https://react-napoles.vercel.app](https://react-napoles.vercel.app)

---

## 👨‍💻 Autor

Ezequiel Migliavacca  
Proyecto realizado para el curso de **React JS** de [Coderhouse](https://www.coderhouse.com/).

---

## 🔧 Posibles mejoras

- Validar stock en tiempo real desde Firestore.

---