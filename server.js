import express from "express";
const app = express();
import cors from "cors";

const port = 3000;

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("PEER SERVER");
});

app.listen(port, () => {
  console.log("server is working ");
});
