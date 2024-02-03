const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
 dbUrl=process.env.DB_URL;

const connectDb = async () => {
    try {
      const conn = await mongoose.connect(dbUrl, {
        useNewUrlParser: true, useUnifiedTopology: true
      });
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

  module.exports=connectDb;
