import User from "../models/UserSchema.js"
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateUser = async (req, res) => {
    const { id } = req.params;
    
    try{

        const updatedUser = await User.findByIdAndUpdate(id, req.body, { $set : req.body},{new: true});
        // const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json({success: true, message:'Se ha actualizado correctamente',data: updatedUser});

    } catch (error) {
        res.status(500).json({success: false, message:'Ha fallado la actualizacion'});

    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    
    try{

        await User.findByIdAndDelete(id,);

        res.status(200).json({success: true, message:'Se ha eliminado correctamente'});

    } catch (error) {
        res.status(500).json({success: false, message:'Ha fallado la eliminacion'});

    }
}

export const getSingleUser = async (req, res) => {
    const { id } = req.params;
    
    try{

        const user = await User.findById(id,).select('-password');

        res.status(200).json({success: true, message:'Usuario encontrado correctamente',data: user});

    } catch (error) {
        res.status(400).json({success: false, message:'Usuario no encontrado'});

    }
}

export const getAllUser = async (req, res) => {

    
    try{

        const users = await User.find({}).select('-password');

        res.status(200).json({success: true, message:'Usuarios encontrados correctamente',data: users});

    } catch (error) {
        res.status(400).json({success: false, message:'Usuarios no encontrados'});

    }
}




export const getUserProfile = async (req, res) => {
    try {
        // Obtén el usuario a partir del token JWT
        const { id } = req.user; // Asegúrate de tener un middleware que verifique el token y lo añada a req.user

        // Busca al usuario en ambas colecciones
        let user = await User.findById(id) || await Doctor.findById(id);

        if (!user) {
            return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
        }

        const { password, ...rest } = user._doc

        res.status(200).json({
            success: true,
            message: 'Informacion del perfil ',
            data: {...rest}
        })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error interno del servidor: ' + err.message });
    }
};

export const getMyAppointments = async (req, res) => {
    try{

        // Paso 1 : recuperar citas del booking del usuario especifico 

        const bookings = await Booking.find({user: req.userId})



        // Paso 2 : extraer el id del doctor  de la citas de booking

        const doctorIds = bookings.map( el => el.doctor.id)

        // Paso 3 : Recuperar doctor usando el id

        const doctors = await Doctor.find({_id: {$in: doctorIds}}).select('-password')
        







    } catch (err) {

    }

}