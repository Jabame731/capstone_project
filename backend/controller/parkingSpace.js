import { connection } from '../config/db.js';

export const createParkingSpace = (req, res) => {
  const { space_number, availability, parkingLotId } = req.body;

  const query =
    'INSERT INTO parking_space (`lot_id`, `space_number`, `availabilty`) VALUES (?)';

  const values = [parkingLotId, space_number, availability];

  //inserting the values to the database
  connection.query(query, [values], (err, data) => {
    if (err) return res.json(err);

    console.log(data[0]);
    return res.status(200).json('Parking space has been created');
  });
};

export const getParkingSpaces = (_, res) => {
  const query = 'SELECT * FROM parking_space';

  connection.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

export const getParkingSpaceById = (req, res) => {
  const parkingSpaceId = req.params.id;

  const query =
    'SELECT * FROM parking_space INNER JOIN parking_lot ON parking_space.lot_number = parking_lot.id';

  connection.query(query, [parkingSpaceId], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const updateParkingSpace = (req, res) => {
  const { space_number, availabilty } = req.body;

  const parkingSpaceId = req.params.id;

  const query =
    'UPDATE `parking_space` SET `space_number` = ?, `availabilty` = ? WHERE `id` = ?';

  const values = [space_number, availabilty];

  connection.query(query, [...values, parkingSpaceId], (err, data) => {
    if (err) return res.status(500).json(err);

    //fetch the updated parking space from the database

    const fetchUpdatedParkingSpace =
      'SELECT * FROM `parking_space` WHERE `id` = ?';

    connection.query(
      fetchUpdatedParkingSpace,
      [parkingSpaceId],
      (err, updatedData) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(updatedData[0]);
      }
    );
  });
};

export const deleteParkingSpace = (req, res) => {
  const parkingSpaceId = req.params.id;

  const query = 'DELETE FROM parking_space WHERE `id` = ?';

  connection.query(query, [parkingSpaceId], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.json('Parking Space has been deleted');
  });
};
