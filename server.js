const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
// const { createFarms } = require("./api/controllers/farmsController");
// const farms = require("./api/model/farms");

const server = http.createServer(app);
const dbUrl =
  "mongodb+srv://larvish:larvish007@farm.9tkutai.mongodb.net/?retryWrites=true&w=majority&appName=farm";
mongoose
  .connect(dbUrl)
  .then(
    server.listen(4000, () => {
      // createFarms(farms);
      console.log("App is running in port 4000");
    })
  )
  .catch((err) => {
    console.log(err);
  });
