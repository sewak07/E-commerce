import mongoose from "mongoose";
import User from "./model/User.model.js"
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ role: "superadmin" });
    if (existingAdmin) {
      console.log("Admin user already exists. Skipping seeding.");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("superadmin123", 10);

    // Create the superadmin user
    const superadmin = await User.create({
      username: "superadmin",
      email: "superadmin@example.com",
      password: hashedPassword,
      role: "superadmin"
    });

    console.log("Superadmin user seeded successfully");

    await mongoose.disconnect();
    process.exit();


  } catch (error) {
    console.error("Error seeding superadmin user:", error);
    process.exit(1);
  }
};

seedAdmin();
