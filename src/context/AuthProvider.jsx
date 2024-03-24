import axios from "axios"; // Importa axios para realizar peticiones HTTP
import { createContext, useEffect, useState } from "react"; // Importa createContext, useEffect y useState desde React

// Crea el contexto AuthContext
const AuthContext = createContext();

// Define el componente AuthProvider que proporciona el contexto de autenticación a los componentes hijos
const AuthProvider = ({ children }) => {
    // Define el estado 'auth' para almacenar la información de autenticación del usuario
    const [auth, setAuth] = useState({});

    // Función para actualizar la contraseña del usuario
    const actualizarPassword = async (datos) => {
        const token = localStorage.getItem('token'); // Obtiene el token de autenticación del almacenamiento local
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/veterinario/actualizarpassword`; // URL para la solicitud de actualización de contraseña
            const options = {
                headers: {
                    method: 'PUT', // Método de la solicitud
                    'Content-Type': 'application/json', // Tipo de contenido de la solicitud
                    Authorization: `Bearer ${token}` // Encabezado de autorización con el token JWT
                }
            };
            // Realiza la solicitud PUT para actualizar la contraseña
            const respuesta = await axios.put(url, datos, options);
            return { respuesta: respuesta.data.msg, tipo: true }; // Retorna la respuesta de éxito
        } catch (error) {
            return { respuesta: error.response.data.msg, tipo: false }; // Retorna la respuesta de error
        }
    };

    // Función para obtener el perfil del usuario autenticado
    const perfil = async (token) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/perfil`; // URL para la solicitud de perfil
            const options = {
                headers: {
                    'Content-Type': 'application/json', // Tipo de contenido de la solicitud
                    Authorization: `Bearer ${token}` // Encabezado de autorización con el token JWT
                }
            };
            // Realiza la solicitud GET para obtener el perfil del usuario
            const respuesta = await axios.get(url, options);
            setAuth(respuesta.data); // Establece la información de autenticación del usuario en el estado 'auth'
        } catch (error) {
            console.log(error); // Maneja el error en caso de que falle la solicitud
        }
    };

    // Función para actualizar el perfil del usuario
    const actualizarPerfil = async (datos) => {
        const token = localStorage.getItem('token'); // Obtiene el token de autenticación del almacenamiento local
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/veterinario/${datos.id}`; // URL para la solicitud de actualización de perfil
            const options = {
                headers: {
                    method: 'PUT', // Método de la solicitud
                    'Content-Type': 'application/json', // Tipo de contenido de la solicitud
                    Authorization: `Bearer ${token}` // Encabezado de autorización con el token JWT
                }
            };
            // Realiza la solicitud PUT para actualizar el perfil del usuario
            const respuesta = await axios.put(url, datos, options);
            perfil(token); // Actualiza la información del perfil después de la actualización
            return { respuesta: respuesta.data.msg, tipo: true }; // Retorna la respuesta de éxito
        } catch (error) {
            return { respuesta: error.response.data.msg, tipo: false }; // Retorna la respuesta de error
        }
    };

    // Efecto de lado para cargar el perfil del usuario al cargar el componente
    useEffect(() => {
        const token = localStorage.getItem('token'); // Obtiene el token de autenticación del almacenamiento local
        if (token) {
            perfil(token); // Carga el perfil del usuario si existe un token válido
        }
    }, []);

    // Retorna el proveedor de contexto con los valores y funciones necesarios
    return (
        <AuthContext.Provider value={{
            auth,
            setAuth,
            actualizarPerfil,
            actualizarPassword
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// Exporta el proveedor de contexto AuthProvider
export { AuthProvider };

// Exporta el contexto AuthContext
export default AuthContext;
