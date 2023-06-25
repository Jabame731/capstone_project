import { connection } from '../config/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { generateUniqueIdentifier } from '../helpers/index.js';

//generate a unique token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY);
};

export const registerUser = (req, res) => {
  //parsed request body data
  const {
    first_name,
    last_name,
    email,
    password,
    image,
    address,
    phone_number,
    telephone_number,
  } = req.body;

  //check for existing user
  const query = 'SELECT * FROM `user` WHERE `email` = ?';

  connection.query(query, [email], (err, data) => {
    if (err) return res.json(err);

    if (!username || !email || !password) {
      return res.status(400).json('Please provide required fields');
    }

    if (data.length) return res.status(409).json('User Already Exist!');

    //hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const query =
      'INSERT INTO users (`first_name`, `last_name`, `email`, `password`, `image`, `address`, `phone_number`, `telephone_number`, `uniqueId`) VALUES (?)';

    const values = [
      first_name,
      last_name,
      email,
      hash,
      image,
      address,
      phone_number,
      telephone_number,
      generateUniqueIdentifier(),
    ];

    connection.query(query, [values], (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json('User is Registered');
    });
  });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;
  //check user
  const query = 'SELECT * FROM users WHERE email = ? ';

  connection.query(query, [email], (err, data) => {
    if (err) return res.json(err);

    if (data.length === 0) return res.status(404).json('User Not Found');

    //compare password
    const isPasswordCorrect = bcrypt.compareSync(password, data[0].password);

    if (!isPasswordCorrect) return res.status(400).json('Invalid Password');

    res.status(200).json({
      id: data[0].id,
      email: data[0].email,
      first_name: data[0].first_name,
      middle_name: data[0].middle_name,
      last_name: data[0].last_name,
      image: data[0].image,
      address: data[0].address,
      phone_number: data[0].phone_number,
      telephone_number: data[0].telephone_number,
      user_role: data[0].user_role,
      uniqueId: data[0].uniqueId,
      token: generateToken(data[0].id),
    });
  });
};
