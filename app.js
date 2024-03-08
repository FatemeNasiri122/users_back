"use strict";
require("dotenv").config();
const exprss = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const user = require("./routes/user");
const app = exprss();

app.use(exprss.json());
app.use(cors({
    // origin: 
}));
app.use(user);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message });
});

mongoose.connect(process.env.DATABASE_URL, {dbName: "show-user"}).then((result) => {
    const server = app.listen(5000);
    // console.log(result);
}).catch((error) => {
    console.log(error);
})

