import User from "../model/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


//REGISTER
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //checking if user already exists
    const existingUser = await User.find({ email });
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }
    //hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //creating the new user
    const createUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({ message: "User registered successfully", user: createUser });

  } catch (error) {
    return res.status(500).json({ message: `server error: ${error.message}` });
  }
}


//LOGIN
export const login = async (req, res) => {
  try {

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and Password are required" });
    }

    //checking if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist.  Please register first." });
    }

    //comparing the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    //token
    const token = jwt.sign({
      id: user._id,
      role: user.role,
    },
  process.env.JWT_SECRET,{
    expiresIn: "7d",
  }
  ) 

    return res.status(200).json({
      message: "Login successfull",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role:user.role,
      }
    });
  } catch (error) {
    return res.status(500).json({ message: `server error: ${error.message}` });
  }
}