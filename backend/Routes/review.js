import express from 'express';
import { getAllReviews , createReview } from '../Controllers/reviewControl.js';
import { authenticate , restrict } from '../auth/verifyToken.js';

const router = express.Router({mergeParams: true});

router.route('/').get(getAllReviews).post(authenticate, restrict(["paciente"]), createReview);

export default router;