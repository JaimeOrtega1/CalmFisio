import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js"; // Asegúrate de que esto sea necesario
import User from "../models/UserSchema.js"; // Asegúrate de que esto sea necesario

export const authenticate = async (req, res, next) => {
    // Obtenemos el token del header
    const authToken = req.headers.authorization;

    // Verificar si existe el token y si tiene el formato correcto
    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Token inválido, autorización denegada' });
    }

    try {
        // Extraer el token
        const token = authToken.split(' ')[1];

        // Verificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Guardar la información del usuario en req para que esté disponible en las siguientes rutas
        req.user = decoded;

        // Llamar a next() para continuar con la siguiente función de middleware
        next();
    } catch (err) {
        if(err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expirado, por favor vuelve a iniciar sesión' });
        }

        return res.status(401).json({ success: false, message: 'Token inválido' });
    }
};


export const restrict = roles => async (req, res, next) => {
    const userId = req.user.id; // Asegúrate de que estás obteniendo el ID del usuario desde el token decodificado.
    
    try {
        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
        }

        if (!roles.includes(user.role)) {
            return res.status(403).json({ success: false, message: 'No tienes los permisos necesarios' });
        }

        next();
    } catch (err) {
        console.error("Error en restrict:", err);
        return res.status(500).json({ success: false, message: 'Error interno del servidor' });
    }
};
