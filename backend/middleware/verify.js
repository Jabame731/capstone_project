import jwt from 'jsonwebtoken';
import { connection } from '../config/db.js';

export const verifyUser = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          console.log(err);

          if (
            err.name === 'JsonWebTokenError' &&
            err.message === 'jwt malformed'
          ) {
            return res.status(401).json('JWT Malformed');
          }

          return res.status(401).json('Not authorized');
        }

        const query = 'SELECT * FROM `users` WHERE `id` = ?';

        connection.query(query, [decoded.id], (err, data) => {
          if (err) {
            console.log(err);
            return res.status(401).json('Not authorized');
          }

          req.user = data[0];
          next();
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(401).json('Not authorized');
    }
  }

  if (!token) {
    return res.status(401).json('Not Authorized, no token');
  }
};

export const checkUserRole = (req, res, next) => {
  const role = req.user.user_role;

  switch (role) {
    case 'admin':
      next();
      break;
    case 'user':
      res.status(403).json({ error: 'Access Denied' });
      break;
    default:
      res.status(401).json({ error: 'Unathorized' });
  }
};
