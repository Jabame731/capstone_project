import { connection } from '../config/db.js';
import { formatDate } from '../helpers/index.js';

export const createParkingLot = (req, res) => {
  const { name, address, capacity } = req.body;

  const query =
    'INSERT INTO parking_lot (`name`, `address`, `capacity`) VALUES (?)';

  const values = [name, address, capacity];

  connection.query(query, [values], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json('Parking Lot has been Created');
  });
};

export const updateParkingLot = (req, res) => {
  const { name, address, capacity } = req.body;

  const parkingLotId = req.params.id;

  const query =
    'UPDATE `parking_lot` SET `name` = ?, `address` = ?, `capacity` =?, `updated_at` = ?  WHERE `id` = ?';

  const values = [name, address, capacity, formatDate()];

  connection.query(query, [...values, parkingLotId], (err, _) => {
    if (err) return res.status(500).json(err);

    //fetch the updated parking lot from the database
    const fetchUpdatedParkingLot = 'SELECT * FROM `parking_lot` WHERE `id` = ?';

    connection.query(
      fetchUpdatedParkingLot,
      [parkingLotId],
      (err, updatedData) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(updatedData[0]);
      }
    );
  });
};

export const getParkingLotById = (req, res) => {
  const parkingLotId = req.params.id;

  const query = 'SELECT * FROM parking_lot WHERE id = ?';

  connection.query(query, [parkingLotId], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length === 0) return res.status(404).json('Parking lot not found');

    return res.status(200).json(data[0]);
  });
};

export const getParkingLotLists = (_, res) => {
  const query = 'SELECT * FROM parking_lot LIMIT 10';

  connection.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

export const deleteParkingLot = (req, res) => {
  {
    const parkingLotId = req.params.id;

    const query = 'DELETE FROM parking_lot WHERE `id` = ?';

    connection.query(query, [parkingLotId], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.json('Parking lot has been deleted');
    });
  }
};
