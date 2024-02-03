const express = require('express');
const dotenv=require('dotenv');
const router=require('./Router/routers');
const connectDb=require('./DbConnection/connection');
const app = express();


dotenv.config();


const port = process.env.PORT;




app.use(express.json());
connectDb();
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/',router);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
