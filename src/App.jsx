import "./App.css"; // Importa estilos CSS para aplicar a la aplicación
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importa componentes relacionados con el enrutamiento de React
import Auth from "./layout/Auth"; // Importa el componente Auth para la autenticación
import Login from "./paginas/Login"; // Importa el componente Login para la página de inicio de sesión
import { LandinPage } from "./paginas/LandinPage"; // Importa el componente LandinPage para la página de inicio
import { Register } from "./paginas/Register"; // Importa el componente Register para la página de registro
import { Forgot } from "./paginas/Forgot"; // Importa el componente Forgot para la página de recuperación de contraseña
import { NotFound } from "./paginas/NotFound"; // Importa el componente NotFound para la página de error 404
import Dashboard from "./layout/Dashboard"; // Importa el componente Dashboard para el panel de control
import Listar from "./paginas/Listar"; // Importa el componente Listar para la página de listar
import Visualizar from "./paginas/Visualizar"; // Importa el componente Visualizar para la página de visualizar
import Crear from "./paginas/Crear"; // Importa el componente Crear para la página de creación
import Actualizar from "./paginas/Actualizar"; // Importa el componente Actualizar para la página de actualización
import Perfil from "./paginas/Perfil"; // Importa el componente Perfil para la página de perfil de usuario
import { Confirmar } from "./paginas/Confirmar"; // Importa el componente Confirmar para la página de confirmación de cuenta
import Restablecer from "./paginas/Restablecer"; // Importa el componente Restablecer para la página de restablecimiento de contraseña
import { AuthProvider } from "./context/AuthProvider"; // Importa el AuthProvider para proporcionar contexto de autenticación
import { PrivateRoute } from "./routes/PrivateRoute"; // Importa el PrivateRoute para rutas privadas
import { TratamientosProvider } from "./context/TratamientosProvider"; // Importa el TratamientosProvider para proporcionar contexto de tratamientos
import PrivateRouteWithRole from "./routes/PrivateRouteWithRole"; // Importa PrivateRouteWithRole para rutas privadas con roles
import Chat from "./paginas/Chat"; // Importa el componente Chat para la página de chat

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider> {/* Proporciona el contexto de autenticación */}
          <TratamientosProvider> {/* Proporciona el contexto de tratamientos */}
            <Routes> {/* Define las rutas de la aplicación */}
              <Route index element={<LandinPage />} /> {/* Ruta para la página de inicio */}

              <Route path="/" element={<Auth />}> {/* Ruta raíz para la autenticación */}
                <Route path="login" element={<Login />} /> {/* Ruta para la página de inicio de sesión */}
                <Route path="register" element={<Register />} /> {/* Ruta para la página de registro */}
                <Route path="forgot/:id" element={<Forgot />} /> {/* Ruta para la página de recuperación de contraseña */}
                <Route path="confirmar/:token" element={<Confirmar />} /> {/* Ruta para la página de confirmación de cuenta */}
                <Route
                  path="recuperar-password/:token"
                  element={<Restablecer />}
                /> {/* Ruta para la página de restablecimiento de contraseña */}
                <Route path="*" element={<NotFound />} /> {/* Ruta para la página de error 404 */}
              </Route>

              <Route
                path="dashboard/*"
                element={ {/* Ruta para el panel de control */}
                  <PrivateRoute> {/* Ruta privada */}
                    <Routes> {/* Define las rutas dentro del panel de control */}
                      <Route element={<Dashboard />}> {/* Ruta principal del panel de control */}
                        <Route index element={<Perfil />} /> {/* Ruta para la página de perfil de usuario */}
                        <Route path="listar" element={<Listar />} /> {/* Ruta para la página de listar */}
                        <Route path="visualizar/:id" element={<Visualizar />} /> {/* Ruta para la página de visualizar */}
                        <Route
                          path="crear"
                          element={ {/* Ruta para la página de creación */}
                            <PrivateRouteWithRole> {/* Ruta privada con roles */}
                              <Crear />
                            </PrivateRouteWithRole>
                          }
                        />
                        <Route path="actualizar/:id" element={<Actualizar />} /> {/* Ruta para la página de actualización */}
                        <Route path='chat' element={<Chat />} /> {/* Ruta para la página de chat */}
                      </Route>
                    </Routes>
                  </PrivateRoute>
                }
              />
            </Routes>
          </TratamientosProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App; // Exporta el componente App
