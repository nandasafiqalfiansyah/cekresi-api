const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");
const port = process.env.PORT;
const api = process.env.API;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  date = new Date();
  data = {
    date: date,
    anoucement: "Welcome to cek Api",
    Author: "Nanda safiq alfiansyah",
    version: "V0.2",
    Url: {
      cekresi: "/cekresi/:courier/:receipt",
      cekongkir: "/cekongkir/:origin/:destination/:weight",
    },
  };
  res.json(data);
});

app.get("/cekresi/:courier/:receipt", async (req, res) => {
  const { courier, receipt } = req.params;
  const baseURL = `https://api.binderbyte.com/v1/track?api_key=${api}`;
  try {
    const response = await axios.get(
      baseURL + "&courier=" + courier + "&awb=" + receipt
    );
    res.json(response.data);
  } catch (err) {
    res.json(err);
  }
});

app.get("/cekongkir/:origin/:destination/:weight", async (req, res) => {
  const { origin, destination, weight } = req.params;
  const baseURL = `https://api.binderbyte.com/v1/cost?api_key=${api}`;
  try {
    const response = await axios.get(
      baseURL +
        "&courier=jne,sicepat,anteraja,lion,sap,pos,ide" +
        "&origin=" +
        origin +
        "&destination=" +
        destination +
        "&weight=" +
        weight
    );
    res.json(response.data);
  } catch (err) {
    res.json(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
