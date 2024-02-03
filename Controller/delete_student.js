const createUser = require("../Model/students");
exports.deleteUserDataById = async (req, res) => {
  try {
    const userId = req.query.id;

    // Use findByIdAndUpdate to update specific fields
    const existingUser = await createUser.findById(userId);
    

    if (!existingUser) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
   const response= await createUser.findByIdAndDelete(userId);
    res.status(200).json({
      status: "success",
      data: response,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
