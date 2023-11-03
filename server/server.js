require("dotenv").config();
const express = require("express");
const db = require("./db");

const app = express();

app.get("/api/v1/usertable",  async (req, res) => {
    const results = await db.query("SELECT * FROM usertable")
    console.log(results);
    res.json({
        status: "succes"
    })
});

console.log("test")

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up ${port}`);
});