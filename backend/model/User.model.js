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
  cart:[
    {
      product: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
      },
      quantity:{
        type:Number,
      },
      totalPrice:{
        type:Number,
      }
    }
  ]
},
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;

