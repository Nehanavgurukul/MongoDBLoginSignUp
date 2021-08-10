require("./database/connectionDB");
const express = require("express");
const app = express();
app.use(express.json());
const routes = require("./routes/index")

app.use("/", require("./routes"))

app.listen(process.env.PORT, () => {
    console.log(`server is started on port no ${process.env.PORT}`)
});


