const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve images from icecreams folder
app.use("/icecreams", express.static(path.join(__dirname, "icecreams")));

// Read icecreams.json
app.get("/icecreams", (req, res) => {
  fs.readFile("icecreams.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading icecreams.json" });
    }
    res.json(JSON.parse(data));
  });
});

// PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Icecreams API running on port ${PORT}`);
});
