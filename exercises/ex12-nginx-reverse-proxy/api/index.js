// @ts-check
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ hello: `world at ${new Date()}` });
});

app.listen(5000, () => {
  console.log("listening on http://localhost:5000");
});
