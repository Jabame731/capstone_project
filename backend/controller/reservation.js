import { connection } from '../config/db.js';

export const reserveParkingSpot = (req, res) => {
  const parkingSlotId = req.params.id;
  const userId = req.user.id;

  const { start_time, end_time } = req.body;

  const query = 'SELECT * FROM reservation reservation WHERE id = ?';

  connection.query(query, [parkingSlotId], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length > 0) return res.status(409).json('Spot has been reserved');

    const query =
      'INSERT INTO reservation (`space_id`,`sensor_value`, `start_time`, `end_time`, `user_id`) VALUES (?)';

    //update the availabilty in the parking_space if its reserved
    const updateAvailabilityQuery =
      'UPDATE parking_space SET availabilty = ? WHERE id = ?';

    const values = [space_id, sensor_value, start_time, end_time, userId];

    //query to insert the values to the reservation
    connection.query(query, [values], (err, _) => {
      if (err) return res.status(500).json(err);

      const updateValues = ['Reserved', space_id];

      //query to update availability to reserved in the parking spacew
      connection.query(updateAvailabilityQuery, updateValues, (err) => {
        if (err) res.status(500).json(err);

        res.status(200).json('Parking spot has been reserved');
      });
    });
  });
};

export const getReservationByUserId = (req, res) => {
  const id = req.params.id;

  const query = 'SELECT * FROM reservation WHERE user_id = ?';

  connection.query(query, [id], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};
