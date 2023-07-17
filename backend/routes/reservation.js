import express from 'express';
import {
  reserveParkingSpot,
  getReservationByUserId,
} from '../controller/reservation.js';
import { verifyUser } from '../middleware/verify.js';

const router = express.Router();

router.post('/reserveParkingSpot', verifyUser, reserveParkingSpot);
router.get('/getReservationByUser', verifyUser, getReservationByUserId);

export default router;
