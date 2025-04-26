import { BrowserRouter, Routes, Route } from 'react-router-dom' // Usando react-router-dom para manejar las rutas de la aplicación
import Home from '../pages/Home' // Importando el componente Home
import Clients from '../pages/Clients' // Importando el componente Clients
import Users from '../pages/Users' // Importando el componente Users
import Error404 from '../pages/Error404' // Importando el componente Error404

function AppRoutes() { 
  return (
    <BrowserRouter> {/* Usando BrowserRouter para envolver las rutas.*/}
      <Routes> {/* Usando Routes para definir las rutas de la aplicación */}
        <Route path="/" element={<Home />} /> {/* Ruta para la página de inicio */}
        <Route path="/clients" element={<Clients />} /> {/* Ruta para la página de clientes */}
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Error404 />} /> {/* Ruta para manejar cualquier otra ruta no definida, mostrando el componente Error404 */}
      </Routes> 
    </BrowserRouter>
  )
}

export default AppRoutes // Exportando el componente AppRoutes para ser utilizado en otras partes de la aplicación