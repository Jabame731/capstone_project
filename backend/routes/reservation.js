import express from 'express';
import {
  reserveParkingSpot,
  getReservationByUserId,
} from '../controller/reservation.js';

const router = express.Router();

router.post('/reserveParkingSpot', reserveParkingSpot);
router.get('/getReservationByUserId/:id', getReservationByUserId);

export default router;
