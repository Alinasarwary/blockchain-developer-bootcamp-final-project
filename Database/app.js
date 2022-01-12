const express = require("express");
const mongoose = require("mongoose");
const app = express();
// const Controller =  require('./controller/addCitizen');

const port = 3000;
// const bodyParser = require("body-parser");

// const cors = require("cors");
// app.use(cors())
// app.use(express.static("public"));

// app.use(bodyParser.json());
// app.use("/api", Controller);

mongoose.connect("mongodb://localhost:27017/final-project")
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is connected on port ${port}`);
        })
    })
    .catch(err=>{console.log(err);})

    