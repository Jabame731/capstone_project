import express from 'express';
import dotenv from 'dotenv';

import multer from 'multer';
import cors from 'cors';
// import { createServer } from 'http';
// import { Server } from 'socket.io';

//import from routes
import authRoutes from './routes/auth.js';
import vehicleRoutes from './routes/vehicle.js';
import parkingLotRoutes from './routes/parkingLot.js';
import parkingSpaceRoutes from './routes/parkingSpace.js';
import reservationRoutes from './routes/reservation.js';
import { connection } from './config/db.js';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/vehicle', vehicleRoutes);
app.use('/api/parkingLot', parkingLotRoutes);
app.use('/api/parkingSpace', parkingSpaceRoutes);
app.use('/api/reservation', reservationRoutes);

//image upload functionality
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../frontend/public/upload');
  },
  filename: (_, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

// route for image upload
app.post('/api/upload', upload.single('file'), (req, res, next) => {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  const file = req.file;
  res.status(200).json(file.fieldname);
});

app.post('/data', (req, res) => {
  const receivedData = req.body;

  const { sensor, value } = receivedData;

  let value1;
  let value2;
  let value3;
  let value4;

  if (sensor == 1) {
    value1 = value;

    const query = `
    UPDATE parking_space
    SET sensor_value = CASE
      WHEN space_number = 1 THEN ${value1}
    END
    WHERE space_number IN (1);
  `;
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error updating data:', error);
        res.status(500).send('Error updating data');
      } else {
        console.log('Data updated successfully');
        res.sendStatus(200);
      }
    });
  }

  if (sensor == 2) {
    value2 = value;
    const query = `
    UPDATE parking_space
    SET sensor_value = CASE
      WHEN space_number = 2 THEN ${value2}
    END
    WHERE space_number IN (2);
  `;
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error updating data:', error);
        res.status(500).send('Error updating data');
      } else {
        console.log('Data updated successfully');
        res.sendStatus(200);
      }
    });
  }

  if (sensor == 3) {
    value3 = value;
    const query = `
    UPDATE parking_space
    SET sensor_value = CASE
      WHEN space_number = 3 THEN ${value3}
    END
    WHERE space_number IN (3);
  `;
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error updating data:', error);
        res.status(500).send('Error updating data');
      } else {
        console.log('Data updated successfully');
        res.sendStatus(200);
      }
    });
  }

  if (sensor == 4) {
    value4 = value;
    const query = `
    UPDATE parking_space
    SET sensor_value = CASE
      WHEN space_number = 4 THEN ${value4}
    END
    WHERE space_number IN (4);
  `;
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error updating data:', error);
        res.status(500).send('Error updating data');
      } else {
        console.log('Data updated successfully');
        res.sendStatus(200);
      }
    });
  }
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
