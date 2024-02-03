
const createUser = require("../Model/students");
// exports.updateUserDataById = async (req, res) => {
//     try {
//       const { userId, updatedFields } = req.body;
  
//       // Find the user by ID
//       const existingUser = await createUser.findById(userId);
  
//       if (!existingUser) {
//         return res.status(404).json({
//           status: "error",
//           message: "User not found",
//         });
//       }
  
//       // Update user fields based on the provided object
//       for (const key in updatedFields) {
//         if (Object.hasOwnProperty.call(updatedFields, key)) {
//           existingUser[key] = updatedFields[key];
//         }
//       }
  
//       // Save the updated user
//       await existingUser.save();
  
//       res.status(200).json({
//         status: "success",
//         message: "Successfully updated user data",
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         status: "error",
//         message: "Something went wrong",
//       });
//     }
//   };
  

exports.updateUserDataById = async (req, res) => {
    try {
      const { userId, updatedFields } = req.body;
  
      // Use findByIdAndUpdate to update specific fields
      const result = await createUser.findByIdAndUpdate(
        userId,
        { $set: updatedFields },
        { new: true } // { new: true } returns the updated document
      );
  
      if (!result) {
        return res.status(404).json({
          status: "error",
          message: "User not found",
        });
      }
  
      res.status(200).json({
        status: "success",
        data: result,
        message: "Successfully updated user data",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        message: "Something went wrong",
      });
    }
  };
  