import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = user => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
        expiresIn: '15d',
    });
};

export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;

    try {
        let user = null;

        // Verifica si el usuario ya existe en la colección correspondiente
        if (role === 'paciente') {
            user = await User.findOne({ email });
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email });
        }

        if (user) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crea un nuevo usuario según el rol
        if (role === 'paciente') {
            user = new User({
                email,
                password: hashedPassword,
                name,
                photo,
                gender,
                role,
            });
        } else if (role === 'doctor') {
            user = new Doctor({
                email,
                password: hashedPassword,
                name,
                photo,
                gender,
                role,
            });
        }

        await user.save();

        res.status(200).json({ success: true, message: 'Usuario creado correctamente' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error interno del servidor. Intente de nuevo' + err });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = null;

        // Buscar usuario en ambas colecciones
        const paciente = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        user = paciente || doctor;

        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        // Verifica la contraseña
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ status: false, message: 'Credenciales incorrectas' });
        }

        // Genera el token
        const token = generateToken(user);
        const { password: _, ...userData } = user.toObject();

        res.status(200).json({
            status: true,
            message: 'Login exitoso',
            token,
            data: { ...userData },
        });
    } catch (err) {
        res.status(500).json({ status: false, message: 'Error al iniciar sesión: ' + err.message });
    }
};
