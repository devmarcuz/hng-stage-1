const express = require("express");
const app = express();

// connect server
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    slackUsername: "marcuz",
    backend: true,
    age: 20,
    bio: "I love tech",
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
