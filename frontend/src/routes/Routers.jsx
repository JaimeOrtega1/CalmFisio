
import Home from '../pages/Home'
import Servicios from '../pages/Servicios'
import Login from '../pages/Login'
import Registrarse from '../pages/Registrarse'
import Contacto from '../pages/Contacto'
import Doctores from '../pages/Doctores/Doctores'
import DetalleDoctores from '../pages/Doctores/DetalleDoctores'
import Myaccount from '../Dashboard/user-account/Myaccount'
import Dashboard from '../Dashboard/doctor-account/Dashboard'



import {Routes,Route} from 'react-router-dom'
import RouteProtegida from './RouteProtegida'


const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/inicio' element={<Home/>} />
    <Route path='/doctores' element={<Doctores/>} />
    <Route path='/doctores/:id' element={<DetalleDoctores/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/registrarse' element={<Registrarse/>} />
    <Route path='/contacto' element={<Contacto/>} />
    <Route path='/servicios' element={<Servicios/>} />
    <Route path='/users/perfil/me' element={ <RouteProtegida allowedRoles={['paciente']} > <Myaccount/> </RouteProtegida> } />
    <Route path='/doctores/perfil/me' element={<RouteProtegida allowedRoles={['doctor']} > <Dashboard/> </RouteProtegida>} />

    
    
    
    

    </Routes>
  
}

export default Routers