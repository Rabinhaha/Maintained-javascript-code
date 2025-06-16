const express = require("express");
const app = express();
const connectDb = require("./db/connect.js");
const productRoutes = require("./routes/product.route.js");
const logger = require("./middleware/logger.js");

app.use(express.json());
app.use(logger); // logging middleware
app.use("/products", productRoutes); // all routes start with /products

const startServer = async () => {
  await connectDb();
  app.listen(3000, () => {
    console.log("running on server 3000");
  });
};

startServer();
