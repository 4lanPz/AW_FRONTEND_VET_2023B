import { createContext, useState } from "react"; // Importa createContext y useState desde React
import axios from "axios"; // Importa axios para realizar peticiones HTTP

// Crea el contexto TratamientosContext
const TratamientosContext = createContext();

// Define el proveedor de contexto TratamientosProvider que proporciona contexto de tratamientos a los componentes hijos
const TratamientosProvider = ({ children }) => {
  // Define estados para el modal, mensaje y tratamientos
  const [modal, setModal] = useState(false);
  const [mensaje, setMensaje] = useState({});
  const [tratamientos, setTratamientos] = useState([]);

  // Función para manejar el estado del modal
  const handleModal = () => {
    setModal(!modal);
  };

  // Función para registrar tratamientos
  const registrarTratamientos = async (datos) => {
    const token = localStorage.getItem("token"); // Obtiene el token de autenticación del almacenamiento local
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/tratamiento/registro`; // URL para la solicitud de registro de tratamientos
      const options = {
        headers: {
          "Content-Type": "application/json", // Tipo de contenido de la solicitud
          Authorization: `Bearer ${token}`, // Encabezado de autorización con el token JWT
        },
      };
      const respuesta = await axios.post(url, datos, options); // Realiza la solicitud POST para registrar tratamientos
      setTratamientos([respuesta.data.tratamiento, ...tratamientos]); // Actualiza la lista de tratamientos con el nuevo tratamiento registrado
    } catch (error) {
      console.log(error); // Maneja el error en caso de que falle la solicitud
    }
  };

  // Función para eliminar un tratamiento
  const handleDelete = async (id) => {
    try {
      const confirmar = confirm(
        "Vas a eliminar el tratamiento de un paciente, ¿Estás seguro de realizar esta acción?"
      );
      if (confirmar) {
        const token = localStorage.getItem("token"); // Obtiene el token de autenticación del almacenamiento local
        const url = `${import.meta.env.VITE_BACKEND_URL}/tratamiento/${id}`; // URL para la solicitud de eliminación de tratamiento
        const options = {
          headers: {
            "Content-Type": "application/json", // Tipo de contenido de la solicitud
            Authorization: `Bearer ${token}`, // Encabezado de autorización con el token JWT
          },
        };
        const response = await axios.delete(url, options); // Realiza la solicitud DELETE para eliminar el tratamiento
        const tratamientosActualizados = tratamientos.filter(
          (tratamiento) => tratamiento._id !== id
        ); // Filtra los tratamientos para actualizar la lista
        setTratamientos(tratamientosActualizados); // Actualiza la lista de tratamientos
        setMensaje({ respuesta: response.data?.msg, tipo: true }); // Establece el mensaje de éxito
        setTimeout(() => {
          setMensaje({});
        }, 2000); // Borra el mensaje después de 2 segundos
      }
    } catch (error) {
      setMensaje({ respuesta: error.response?.data?.msg, tipo: false }); // Establece el mensaje de error
    }
  };

  // Función para manejar el estado de un tratamiento
  const handleStatus = async (id) => {
    const token = localStorage.getItem("token"); // Obtiene el token de autenticación del almacenamiento local
    try {
      const confirmar = confirm(
        "Vas a finalizar el tratamiento de un paciente, ¿Estás seguro de realizar esta acción?"
      );
      if (confirmar) {
        const url = `${import.meta.env.VITE_BACKEND_URL}/tratamiento/estado/${id}`; // URL para la solicitud de cambio de estado de tratamiento
        const options = {
          headers: {
            "Content-Type": "application/json", // Tipo de contenido de la solicitud
            Authorization: `Bearer ${token}`, // Encabezado de autorización con el token JWT
          },
        };
        const response = await axios.put(url, {}, options); // Realiza la solicitud PUT para cambiar el estado del tratamiento
        const tratamientosActualizados = tratamientos.filter(
          (tratamiento) => tratamiento._id !== id
        ); // Filtra los tratamientos para actualizar la lista
        setTratamientos(tratamientosActualizados); // Actualiza la lista de tratamientos
        setMensaje({ respuesta: response.data?.msg, tipo: false }); // Establece el mensaje de éxito
        setTimeout(() => {
          setMensaje({});
        }, 2000); // Borra el mensaje después de 2 segundos
      }
    } catch (error) {
      setMensaje({ respuesta: error.response?.data?.msg, tipo: false }); // Establece el mensaje de error
    }
  };

  // Retorna el proveedor de contexto con los valores y funciones necesarios
  return (
    <TratamientosContext.Provider
      value={{
        modal,
        setModal,
        handleModal,
        tratamientos,
        setTratamientos,
        registrarTratamientos,
        handleDelete,
        mensaje,
        handleStatus,
      }}
    >
      {children}
    </TratamientosContext.Provider>
  );
};

// Exporta el proveedor de contexto TratamientosProvider
export { TratamientosProvider };

// Exporta el contexto TratamientosContext
export default TratamientosContext;
