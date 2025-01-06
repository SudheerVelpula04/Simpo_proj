const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(express.static("public")); 


app.post("/submit-order", (req, res) => {
  const clientData = req.body;


  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading data.json:", err);
      return res.status(500).send("Server error");
    }

    const existingData = data ? JSON.parse(data) : [];
    existingData.push(clientData);

  
    fs.writeFile("data.json", JSON.stringify(existingData, null, 2), (err) => {
      if (err) {
        console.error("Error writing to data.json:", err);
        return res.status(500).send("Server error");
      }

      res.status(200).send({ message: "Order submitted successfully" });
    });
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
