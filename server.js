const express = require("express");
require('dotenv').config()
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "http://localhost:3000"
  };
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

require("./routes/payment.routes.js")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




