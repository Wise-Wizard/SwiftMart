const express = require("express");
const products = require("./Data/products");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./Config/config");

//dotenv configuration
dotenv.config();

//Connecting to MongoDB
connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node</h1>");
});
app.get("/products", (req, res) => {
  res.json(products);
});
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => {
    return p._id === req.params.id;
  });
  res.json(product);
});
app.listen(process.env.PORT, () => {
  console.log("Server is Up and Running.");
});
