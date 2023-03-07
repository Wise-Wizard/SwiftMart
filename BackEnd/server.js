const express = require("express");
const products = require("./Data/products");
const app = express();

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
app.listen(8080, () => {
  console.log("Server is Up and Running.");
});
