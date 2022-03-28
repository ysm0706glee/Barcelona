require("dotenv").config();
console.log(process.env);
const axios = require("axios");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/match/:date", async (req, res) => {
  try {
    const responce = await axios.get(
      `https://api-football-v1.p.rapidapi.com/v3/fixtures?team=529&season=2021&date=${req.params.date}`,
      {
        headers: {
          "x-rapidapi-key": process.env.API_KEY,
        },
      }
    );
    res.json(responce.data.response);
  } catch (error) {
    console.error(error);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
