const createUser = require("../Model/students");
// const multer = require('multer');

exports.createStudent = async (req, res) => {
  try {
    const { email, age, phonNumber, name } = req.body;
    console.log(email);
    const fine_user = await createUser.findOne({ email });
    console.log(fine_user);
    if (fine_user) {
      res.status(401).json({
        status: "true",
        // data: response,
        message: "User already exist",
      });
    } else {
      const response = await createUser.create({
        email,
        name,
        phonNumber,
        age,
      });
      res.status(200).json({
        status: "success",
        data: response,
        message: "successfully creat Users on db",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Un success",
      // data: response,
      message: "Some thing went to wrong",
    });
    console.log(error);
  }
};

exports.findUserById = async (req, res) => {
  try {
    const userId = req.query.id;
    // const page = req.query.page;

    console.log("fgg", userId);
    if (userId) {
      const foundUser = await createUser.findById(userId);

    if (!foundUser) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: foundUser,
      message: "Successfully found a user by ID",
    });
    }else{
      const foundUser = await createUser.find();
      if(!foundUser){
        return res.status(404).json({
          status: "error",
          message: "Users not found",
        });

      }
      res.status(200).json({
        status: "success",
        data: foundUser,
        message: "Successfully found all users",
      });

    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    // Find all students
    const allStudents = await createUser.find();
    console.log("dgdfg", allStudents);
    res.status(200).json({
      status: "success",
      data: allStudents,
      message: "Successfully retrieved all students",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};
