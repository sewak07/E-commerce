import User from "../model/User.model.js";

//promoting user to admin
export const promoteToAdmin = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.role = "admin";
    await user.save();
    return res.status(200).json({ message: "User promoted to admin successfully", user });
  } catch (error) {
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
}


//demoting admin to user
export const demoteToUser = async (req, res)=>{
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.role = "user";
    await user.save();
    return res.status(200).json({ message: "User demoted to user successfully", user });
  } catch (error) {
      return res.status(500).json({ message: `Server error: ${error.message}` });
  }
}