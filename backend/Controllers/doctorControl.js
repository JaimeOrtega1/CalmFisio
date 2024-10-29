import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js"

export const updateDoctor = async (req, res) => {
    const { id } = req.params;
    
    try{
        
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, { $set : req.body},{new: true});

        res.status(200).json({success: true, message:'Se ha actualizado correctamente',data: updatedDoctor});

    } catch (error) {
        res.status(500).json({success: false, message:'Ha fallado la actualizacion'});

    }
}

export const deleteDoctor = async (req, res) => {
    const { id } = req.params;
    
    try{

        await Doctor.findByIdAndDelete(id,);

        res.status(200).json({success: true, message:'Se ha eliminado correctamente'});

    } catch (error) {
        res.status(500).json({success: false, message:'Ha fallado la eliminacion'});

    }
}

export const getSingleDoctor = async (req, res) => {
    const { id } = req.params;
    
    try{

        const doctor = await Doctor.findById(id).populate('reviews').select('-password');

        res.status(200).json({success: true, message:'Usuario encontrado correctamente',data: doctor});

    } catch (error) {
        res.status(400).json({success: false, message:'Usuario no encontrado'});

    }
}

export const getAllDoctors = async (req, res) => {
    try{

        const{query} = req.query;   

        let doctors;

        if(query){
            doctors = await Doctor.find({
            isApproved:'Aprobado',
            $or:[
                {name: {$regex:query,$options:'i'}}, 
                {specialization:{$regex:query,$options:'i'}} 
                ],
            }).select('-password');
        } else{
            doctors = await Doctor.find({ isApproved:"Aprobado" }).select('-password');
        }

        

        res.status(200).json({success: true, message:'Usuarios encontrados correctamente',data: doctors});

    } catch (error) {
        res.status(400).json({success: false, message:'Usuarios no encontrados'});

    }
}

export const getDoctorProfile = async (req, res) => {
    const { _id } = req;
    try{
        
        const doctor = await Doctor.findById(_id)

        if(!doctor){
            return res.status(404).json({success: false, message: 'Doctor no encontrado'})

        } 

        const { password, ...rest } = doctor._doc
        
        const appointments = await Booking.find({doctor: _id})

        res.status(200).json({
            success: true,
            message: 'Informacion del perfil ',
            data: {...rest,appointments}
        })

    }catch (err) {
        res.status(500).json({
            success: true,
            message: ' Algo ha fallado ' + err ,
            // data: {...rest}
        })

    }
}

