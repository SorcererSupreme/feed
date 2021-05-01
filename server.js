const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/app", (req, res) => {
  res.sendFile("./feed.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
