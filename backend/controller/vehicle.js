import { connection } from '../config/db.js';
import jwt from 'jsonwebtoken';

//register vehicle ==> user
export const registerVehicle = (req, res) => {
  const { license_plate, car_type } = req.body;
  const userId = req.user.id;

  //check if vehicle is registered
  const query = 'SELECT * FROM vehicle WHERE license_plate = ?';

  connection.query(query, [license_plate], (err, data) => {
    if (err) return re.json(err);

    if (data.length) return res.status(409).json('Vehicle Already Exists');

    const query =
      'INSERT INTO `vehicle` (`owner_id`, `license_plate`, `car_type`) VALUES (?)';

    const values = [userId, license_plate, car_type];

    connection.query(query, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      const registeredVehicle = {
        id: data.insertId,
        owner_id: userId,
        license_plate,
        car_type,
      };

      return res.status(200).json(registeredVehicle);
    });
  });
};

// get all vehicle list ==> admin
export const getVehicleLists = (req, res) => {
  const query = 'SELECT * FROM vehicle';

  connection.query(query, (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

//get single vehicle information ==> user, admin
export const getVehicleInformation = (req, res) => {
  const vehicleId = req.params.id;

  const query =
    'SELECT u.first_name, u.last_name, v.license_plate, v.car_type FROM user u JOIN vehicle v ON u.id = v.owner_id';

  connection.query(query, [vehicleId], (err, data) => {
    if (err) return res.status(500).json(err);
    console.log(data);

    return res.status(200).json(data[0]);
  });
};

// delete vehicle ===> admin
export const deleteVehicle = (req, res) => {
  const vehicleId = req.params.id;

  const query = 'DELETE FROM vehicle WHERE id = ? AND owner_id = ?`';

  connection.query(query, [vehicleId, userInformation.id], (err, _) => {
    if (err)
      return res.status(403).json('You are not allowed to delete the vehicle');

    return res.status(200).json('Vehicle Deleted');
  });
};

export const getVehicleByUserId = (req, res) => {
  const id = req.params.id;

  const query = 'SELECT * FROM vehicle WHERE owner_id = ?';

  connection.query(query, [id], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};
