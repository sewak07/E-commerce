import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["user", "admin", "superadmin"],
    default: "user",
  },
},
  { timeStamps: true }
);

export default mongoose.model("User", userSchema);

