import React from 'react'; // Importa la biblioteca React para construir interfaces de usuario
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar componentes de React en el navegador
import App from './App'; // Importa el componente principal de la aplicación desde el archivo App.js
import './index.css'; // Importa estilos CSS para aplicar a la aplicación

// Renderiza el componente raíz de la aplicación dentro de un componente React.StrictMode,
// lo cual activa verificaciones adicionales y advertencias para ayudar a detectar problemas en la aplicación
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//      <App />
//     </React.StrictMode>,
// )

// Renderiza el componente raíz de la aplicación sin React.StrictMode, 
// que es útil para depurar problemas de compatibilidad en bibliotecas de terceros
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
