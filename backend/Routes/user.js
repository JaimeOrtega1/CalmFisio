import { updateUser,deleteUser,getAllUser,getSingleUser,getUserProfile, getMyAppointments} from "../Controllers/userControl.js";
import express from "express";
import { authenticate , restrict} from "../auth/verifyToken.js";

const router = express.Router()

router.get('/:id',authenticate, restrict(["paciente"])  ,getSingleUser);
router.get('/', authenticate, restrict(["admin"]),getAllUser);
router.put('/:id', authenticate, restrict(["paciente"]) ,updateUser);
router.get('/perfil/me', authenticate, restrict(["paciente"]) ,getUserProfile);
router.get('/citas/mi-cita', authenticate, restrict(["paciente"]) ,getMyAppointments);

export default router;