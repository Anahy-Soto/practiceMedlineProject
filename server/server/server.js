require("dotenv").config();
const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express();

app.use(cors())

app.get("/api/v1/recents",  async (req, res) => {
    const results = await db.query("SELECT userdetails.user_id, username, title FROM userdetails JOIN scorecardtable ON userdetails.user_id = scorecardtable.scorecardid;")
    console.log(results);
    res.json({
        status: "succes"
        
    })
});

app.get("/api/v1/scorecard",  async (req, res) => {
    const results = await db.query("SELECT userdetails.user_id, scorecardtable.scorecardid, title, scorecardtable.description, subjectorder, scorecardsubjects.subjecttitle, scorecardsubjects.description, scorecardsubjects.weightage, scorecardsubjects.criteriaorder, scorecardcriteria.score, scorecardcriteria.score, scorecardtable.datecreated FROM userdetails JOIN scorecardtable ON userdetails.user_id = scorecardtable.scorecardid JOIN scorecardsubjects ON scorecardtable.scorecardid = scorecardsubjects.scorecardsubid JOIN scorecardcriteria ON scorecardsubjects.scorecardsubid = scorecardcriteria.scorecardcriteriaid;")
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