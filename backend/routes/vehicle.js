import express from 'express';
import {
  deleteVehicle,
  getVehicleByUserId,
  getVehicleInformation,
  getVehicleLists,
  registerVehicle,
} from '../controller/vehicle.js';
import { verifyUser } from '../middleware/verify.js';

const router = express.Router();

router.post('/registerVehicle', verifyUser, registerVehicle);
router.get('/getVehicleLists', getVehicleLists);
router.get('/getVehicle/:id', getVehicleInformation);
router.delete('/deleteVehicle/:id', deleteVehicle);
router.get('/getVehicleByUserId/:id', getVehicleByUserId);

export default router;
