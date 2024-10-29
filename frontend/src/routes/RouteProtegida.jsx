import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../contexto/authContexto';

const RouteProtegida = ({ children, allowedRoles }) => {
    const { token, role } = useContext(authContext);

    // Verificar valores de `token` y `role` para debug
    console.log("Token:", token);
    console.log("Role:", role);
    console.log("Allowed Roles:", allowedRoles);

    const isAllowed = allowedRoles.includes(role)
    const accesibleRoute = token && isAllowed ? children : <Navigate to="/login" replace={true} />

    

    return accesibleRoute;
};

export default RouteProtegida;
