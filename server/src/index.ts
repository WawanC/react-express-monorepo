import express from "express";
import dotenv from "dotenv";
import path = require("path");

dotenv.config();

const serverPort = +(process.env.PORT ?? 8000);

const app = express();

app.use(express.static(path.join(__dirname, "..", "..", "client", "dist")));

app.use("/api", (req, res) => {
  return res.status(200).json({
    message: "Hello from Express server"
  });
});

app.use("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "dist", "index.html")
  );
});

const bootstrap = (): void => {
  app.listen(serverPort, () => {
    console.log(`Listening on port ${serverPort}`);
  });
};
bootstrap();
