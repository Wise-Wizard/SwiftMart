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
  // Changed from 'router' to 'app' as it is an Express route handler and not a Router route handler.
  res.send("<h1>Welcome to Node</h1>"); // Added a closing tag for h1 element as this is invalid HTML syntax without it.
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
