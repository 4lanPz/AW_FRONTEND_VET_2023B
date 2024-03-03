# Proyecto Veterinaria Backend
Backend: https://github.com/4lanPz/AW_BACKEND_VET_2023B

Este proyecto Frontend ha sido desarrollado utilizando
- Vite
- React
- Tailwind
- MongoDB

## Requisitos
- Vite y npm instalados en tu sistema.
- Instancia de MongoDB en ejecución.

## Estructura del Proyecto
assets: Contiene las imagenes que se muestran.
models: Define los modelos de datos para los formularios y la base de datos.
routas: Define las rutas de la API para mostrarse.
páginas: Contiene todas las partes que se van a mostrar dependiendo de la ruta.
layouts: Define cómo se distribuyen y organizan los diferentes elementos visuales.
context: Contiene los datos de componentes sin perder la jerarquía para no pasar explícitamente las propiedades de componente a componente.

### - Veterinario
Realizar la creacion de pacientes y tratamientos de los pacientes.

Este va poder realizar los formularios para poder ingresar nuevos pacientes e ingresar tratamientos para los pacientes.

### - Pacientes
Pueden revisar los tratamientos que ha creado el veterinario y el resto de rutas van a estar bloqueadas.

### - Tratamientos
Son los datos que crea el veterinario sobre el paciente, estos se almacenan en la base de datos y tambien se van a mostrar en ciertas rutas.

## Rutas
![image](https://github.com/4lanPz/AW_FRONTEND_VET_2023B/assets/117743495/5c3b2042-989e-470a-92f9-729bbda8593d)

![image](https://github.com/4lanPz/AW_FRONTEND_VET_2023B/assets/117743495/53f955f6-6281-4b1e-b776-a5c248c0b72c)

![image](https://github.com/4lanPz/AW_FRONTEND_VET_2023B/assets/117743495/361c8045-6bac-4c9d-a4b7-e8cd0d82c76a)

![image](https://github.com/4lanPz/AW_FRONTEND_VET_2023B/assets/117743495/a4da8896-18e9-4dcf-a82e-f9a2de0ea748)

## Pruebas
### Faker y locust
Se utiliza Thunderclient para comprobar el funcionamiento de rutas privadas(por token) y públicas.

![pruebas front](https://github.com/4lanPz/AW_FRONTEND_VET_2023B/assets/117743495/a0a1f33b-4399-4eda-93b9-fa2a73b327b4)


![pruebas front2](https://github.com/4lanPz/AW_FRONTEND_VET_2023B/assets/117743495/8cdf2754-e472-4ef4-9617-1767881793c9)

## Deploy en Netlify
En este paso se debe agregar todas las variables y configuraciones necesarias del proyecto.

Para ello se ingresa las mismas variables del entorno local, si se va a pasar a producción utilizar el link de Backend.

![deploy front](https://github.com/4lanPz/AW_FRONTEND_VET_2023B/assets/117743495/fc618014-96bb-4313-a63a-f5a57743eda3)

