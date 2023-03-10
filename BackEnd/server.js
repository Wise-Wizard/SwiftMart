const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const productRoutes = require("./Routes/productRoutes");
const connectDB = require("./Config/config");

//dotenv configuration
dotenv.config();

//Connecting to MongoDB
connectDB();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node</h1>");
});
app.use("/api", productRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is Up and Running.");
});
