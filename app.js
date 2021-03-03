const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/mCart", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("database Conected");
    },
    (err) => {
      console.log(err);
    }
  );

const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {
  console.log("Server Running on " + PORT);
});
