const User = require('../models/user');
const { generateToken } = require('../utilits/jwtUtils');

const register = async (req, res) => {
  const { username, email, password } = req.body;
  
  // Debugging line to see what's in the request body
  console.log("Request Body:", req.body);

  try {
    const existingUser = await User.findByEmail(email);
    console.log(existingUser);
    
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    await User.create(username, email, password);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findByEmail(email);
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await User.comparePasswords(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = generateToken(user.id);
//     res.json({ token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

module.exports = register;