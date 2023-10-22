// eslint-disable-next-line no-undef

const express = require("express");
const server = express();
const PORT = 3001;
const { sequelize } = require("./src/DB_connection");

const router = require("./src/routes/index");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());

server.use("/rickandmorty", router);

sequelize
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server raised in port: " + PORT);
    });
  })
  .catch((err) => console.log(err));
