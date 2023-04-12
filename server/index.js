const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001;

const cors = require("cors");
app.use(cors());

app.get("/countries", async (req, res) => {
  try {
    const response = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name,region,capital,population,flags,languages,cca2,cca3,currencies,subregion,latlng,area,coatOfArms"
    );
    const data = response.data;
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from API");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
