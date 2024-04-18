const express = require('express');
const cors = require('cors');
const parser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(parser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// Replace this with your own MongoDB URL
const uri = "mongodb+srv://AngeloPal:300363695@cluster0.aqefx3v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/BookList";

mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database successfully connected");
});

const bookListRouter = require('./routes/bookList.js');
app.use('/book', bookListRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
