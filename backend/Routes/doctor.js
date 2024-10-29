import { updateDoctor,deleteDoctor,getAllDoctors,getSingleDoctor , getDoctorProfile } from "../Controllers/doctorControl.js";
import express from "express";
import { authenticate , restrict } from "../auth/verifyToken.js";
import reviewRouter from './review.js'

const router = express.Router()

//router anidado

router.get('/perfil/me', authenticate, restrict(["doctor"]),getDoctorProfile);
router.use('/:doctorId/reviews', reviewRouter);


router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctors);
router.put('/:id', authenticate, restrict(["doctor"]),updateDoctor);
router.delete('/:id',authenticate, restrict(["doctor"]),deleteDoctor);


export default router;